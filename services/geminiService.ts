
import { GoogleGenAI } from "@google/genai";
import { AspectRatio } from "../types";

/**
 * Converts a File object to a Base64 string suitable for the API.
 */
export const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

interface SceneMetadata {
  title: string;
  year: string;
  category: string;
  styleKeywords?: string;
  useChineseTitle?: boolean;
  roleName?: string;
}

/**
 * Generates the movie scene image using Gemini.
 */
export const generateMovieSceneImage = async (
  imageFile: File,
  scenePrompt: string,
  aspectRatio: AspectRatio = '1:1',
  metadata?: SceneMetadata
): Promise<string> => {
  try {
    // Initialize AI client inside the function to ensure it uses the latest API Key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const imagePart = await fileToGenerativePart(imageFile);

    // 1. Dynamic Category Styling
    const categoryStyles: Record<string, string> = {
      action: "High contrast, dynamic motion blur, teal and orange color grading, grit, intensity, blockbuster aesthetic.",
      romance: "Soft focus, blooming highlights, warm golden hour lighting, dreamy atmosphere, emotional depth.",
      scifi: "Neon rim lighting, chromatic aberration, futuristic textures, sharp digital resolution, lens flares, cool blue/magenta tones.",
      classic: "Vintage film grain, dramatic chiaroscuro lighting, timeless composition, silver screen elegance.",
      drama: "Realistic textures, moody lighting, shallow depth of field, cinematic storytelling, emotional gravity.",
      fantasy: "Ethereal lighting, magical particles, painterly textures, epic scale, vibrant colors.",
      animation: "Vibrant saturated colors, bold lines, exaggerated lighting, illustrative style."
    };

    // Combine broad category style with specific scene style keywords if available
    const baseStyle = categoryStyles[metadata?.category || 'drama'] || "Cinematic lighting, high resolution.";
    const specificStyle = metadata?.styleKeywords 
      ? `${metadata.styleKeywords} ${baseStyle}` 
      : baseStyle;

    // 2. Era-Specific Context
    const yearInt = parseInt(metadata?.year || "2024");
    let eraAesthetic = "Modern digital cinema quality (Arri Alexa style).";
    if (yearInt < 1960) eraAesthetic = "Vintage Technicolor or rich Black & White film stock (Kodak 5207), retro styling.";
    else if (yearInt < 1980) eraAesthetic = "New Hollywood gritty film aesthetic, 35mm film grain, 70s/80s color palette.";
    else if (yearInt < 2000) eraAesthetic = "Classic 90s blockbuster film look, sharp but organic.";

    // 3. Typography & Text Handling
    const isChineseTitle = metadata?.useChineseTitle;
    const fontStyle = isChineseTitle 
      ? "Chinese Calligraphy or stylized Chinese movie font suitable for the genre" 
      : "Large, cinematic font";
    
    const titleInstruction = metadata?.title
      ? `TITLE: The title "${metadata.title}" MUST be visible on the poster. 
         - Placement: Top or Bottom center.
         - Style: ${fontStyle} that matches the ${metadata.category} genre.
         - Opacity: Ensure it overlays the image naturally.`
      : `TITLE: Create a dramatic title fitting for this scene.`;

    const roleInstruction = metadata?.roleName 
      ? `ROLE: The user is portraying the character "${metadata.roleName}". Ensure the styling matches this specific character's iconic look.`
      : '';

    const fullPrompt = `
      Task: Create a Masterpiece High-Definition Movie Poster featuring the user from the input photo.
      
      MOVIE CONTEXT:
      - Scene: ${scenePrompt}
      - Genre: ${metadata?.category || 'General'}
      - Year: ${metadata?.year || 'Unknown'}
      - Style Keywords: ${specificStyle}
      - Era Aesthetic: ${eraAesthetic}
      - ${roleInstruction}

      CRITICAL INSTRUCTIONS FOR IDENTITY FIDELITY:
      
      1. ***FACE & HAIR RECONSTRUCTION (HIGHEST PRIORITY)***:
         - The output image MUST feature the exact face AND HAIRSTYLE of the person provided in the input image.
         - **DO NOT CHANGE THE FACE SHAPE.** Preserve the jawline, cheekbones, and forehead structure exactly.
         - **DO NOT CHANGE THE FEATURES.** Eyes, nose, and mouth must be identical in shape, size, and relative position.
         - **HAIRSTYLE PRESERVATION:** You MUST keep the user's actual hairstyle, hair length, hairline, and hair color from the input photo. Do NOT replace their hair with the movie character's wig or style.
         - **DO NOT "BEAUTIFY" OR "GENERICIZE".** Keep wrinkles, skin texture, moles, scars, and asymmetry. This is crucial for realism.
         - IDENTITY OVER STYLE: Even if the movie style is highly stylized, the face and hair must remain immediately recognizable as the specific user provided.

      2. ***PHOTOREALISTIC TEXTURE & LIGHTING***:
         - Render skin with high-frequency details (pores, fine lines). Avoid the "waxy" or "smooth" AI look.
         - Ensure the skin tone accurately reflects the input photo but adapts to the scene's lighting conditions (e.g., blue moonlight, warm sunset).
         - LIGHTING MATCH: Re-light the user's face and hair to perfectly match the scene's lighting direction and shadows while keeping structural accuracy.

      3. ***SCENE INTEGRATION***:
         - Seamlessly blend the head (face + hair) onto the character's body. The neck connection must be anatomically correct and flawless.
         - EXPRESSION: Adapt the user's facial expression to fit the dramatic intensity of the scene (e.g., screaming, crying, stoic) WITHOUT distorting their identity features.

      4. ***POSTER ELEMENTS***:
         - ${titleInstruction}
         - TAGLINE: Generate a short, punchy tagline fitting the movie (In Chinese if the Title is Chinese, otherwise English).
         - BILLING BLOCK: Add realistic small credits text at the bottom.
         - COMPOSITION: Professional movie poster layout (Rule of Thirds, Central Hero).
    `;

    // Upgraded model for better quality and higher resolution
    const model = 'gemini-3-pro-image-preview';

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
            imagePart,
            { text: fullPrompt }
        ]
      },
      config: {
        imageConfig: { 
          aspectRatio: aspectRatio,
          imageSize: '2K' 
        }
      }
    });

    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }

    throw new Error("No image generated.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
