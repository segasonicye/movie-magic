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
  posterFont?: string;
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
      action: "Masterpiece quality, high contrast, dynamic motion blur, teal and orange color grading, grit, intensity, blockbuster aesthetic, detailed skin texture, sweat and grime.",
      romance: "Masterpiece quality, soft focus, blooming highlights, warm golden hour lighting, dreamy atmosphere, emotional depth, 8k resolution, cinematic bokeh.",
      scifi: "Masterpiece quality, neon rim lighting, chromatic aberration, futuristic textures, sharp digital resolution, lens flares, cool blue/magenta tones, hyper-detailed, anamorphic lens look.",
      classic: "Masterpiece quality, vintage film grain, dramatic chiaroscuro lighting, timeless composition, silver screen elegance, high fidelity, rich shadows.",
      drama: "Masterpiece quality, realistic textures, moody lighting, shallow depth of field, cinematic storytelling, emotional gravity, raw photo style, natural lighting.",
      fantasy: "Masterpiece quality, ethereal lighting, magical particles, painterly textures, epic scale, vibrant colors, intricate details, subsurface scattering.",
      animation: "Masterpiece quality, vibrant saturated colors, bold lines, exaggerated lighting, illustrative style, 3D render perfection, studio lighting.",
      game: "Masterpiece quality, cinematic game cinematics, unreal engine 5 render, high fidelity, stylized realism, dramatic lighting, detailed textures, ray tracing.",
      tv: "Masterpiece quality, cinematic TV promo style, dramatic character portraits, high fidelity, narrative lighting."
    };

    // Combine broad category style with specific scene style keywords if available
    const baseStyle = categoryStyles[metadata?.category || 'drama'] || "Cinematic lighting, high resolution, 8k.";
    const specificStyle = metadata?.styleKeywords 
      ? `${metadata.styleKeywords} ${baseStyle}` 
      : baseStyle;

    // 2. Era-Specific Context
    const yearInt = parseInt(metadata?.year || "2024");
    let eraAesthetic = "Modern digital cinema quality (Arri Alexa style), ultra-sharp.";
    if (yearInt < 1960) eraAesthetic = "Vintage Technicolor or rich Black & White film stock (Kodak 5207), fine film grain, retro styling.";
    else if (yearInt < 1980) eraAesthetic = "New Hollywood gritty film aesthetic, 35mm film grain, 70s/80s color palette, raw texture.";
    else if (yearInt < 2000) eraAesthetic = "Classic 90s blockbuster film look, sharp but organic, Fuji film stock.";

    // 3. Typography & Text Handling
    const isChineseTitle = metadata?.useChineseTitle;
    const defaultFontStyle = isChineseTitle 
      ? "Chinese Calligraphy or stylized Chinese movie font suitable for the genre" 
      : "Large, cinematic font, professional typography";
    
    // Use specific posterFont if provided, otherwise fallback to default
    const fontInstruction = metadata?.posterFont ? metadata.posterFont : defaultFontStyle;

    const titleInstruction = metadata?.title
      ? `TITLE: The title "${metadata.title}" MUST be visible on the poster. 
         - Placement: Top or Bottom center (standard movie poster layout).
         - Style: ${fontInstruction}
         - Integration: The text should look like a real movie poster title (embossed, glowing, or textured).
         - Quality: Sharp, vector-like text.`
      : `TITLE: Create a dramatic title fitting for this scene.`;

    const fullPrompt = `
      [SYSTEM INSTRUCTION: EXPERT VFX SUPERVISOR & BIOMETRIC SPECIALIST]
      
      GOAL: Generate a 2K resolution movie poster starring the person from the INPUT IMAGE.
      
      SOURCE MATERIAL:
      - **INPUT IMAGE IS GROUND TRUTH**: The face in the input image is the absolute reference.
      - Target Scene: ${scenePrompt}
      - Character Role: ${metadata?.roleName || 'Protagonist'}
      - Visual Style: ${specificStyle} | ${eraAesthetic}

      ⚠️ CRITICAL PRIORITY: IDENTITY CLONING MODE ⚠️
      You must perform a "Digital Face Transplant" rather than a "Generation". 
      
      1. 🧬 ABSOLUTE FACIAL GEOMETRY LOCK (THE USER)
         - **Do NOT change the face shape**: Keep the exact jawline width, chin shape, and cheekbone structure of the input user.
         - **Do NOT "Westernize" or "Beautify"**: If the user has specific ethnic features, monolid eyes, a flat nose bridge, or asymmetry, PRESERVE THEM EXACTLY.
         - **Eyes are Critical**: The shape of the eyes must match 100%.
         - **Role Assignment**: The USER is playing the role of **${metadata?.roleName || 'the main character'}**. ONLY this character should have the user's face.

      2. 👥 CO-STAR RENDERING (THE OTHERS)
         - If the prompt mentions other characters (e.g., Jack, Iron Man, Jesse Pinkman), **RENDER THEM WITH THEIR ORIGINAL MOVIE ACTOR LIKENESSES**.
         - Do NOT put the user's face on everyone.
         - Create a realistic interaction (looking at each other, standing back-to-back, etc.) typical of movie posters.

      3. 💇 HAIRSTYLE PRESERVATION
         - **Keep User's Hair**: Unless the user is wearing a hat/helmet in the scene description, use the user's ACTUAL hair from the photo.
      
      4. 🎭 EXPRESSION MAPPING
         - Map the *emotion* of the scene (e.g., fierce, scared, happy) onto the *user's* face.
         - Do NOT swap the face for a generic actor with that expression. Distort the USER'S muscles to show the emotion.

      5. SCENE INTEGRATION
         - ${titleInstruction}
         - Composition: Professional movie poster layout.
         - Lighting: Dramatic, cinematic lighting that matches the scene description but hits the user's face naturally.

      QUALITY CHECK:
      - The User's character MUST look like the Input Photo.
      - The Co-Stars MUST look like the original Movie Actors.
      - It must look like a high-budget official poster.
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