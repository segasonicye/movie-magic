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
  multiRoleMap?: Record<string, string>; // Maps "Role ID" to "Character Name"
}

/**
 * Generates the movie scene image using Gemini.
 * Now accepts a record of images for multi-role support.
 */
export const generateMovieSceneImage = async (
  imageFiles: Record<string, File>,
  scenePrompt: string,
  aspectRatio: AspectRatio = '1:1',
  metadata?: SceneMetadata
): Promise<string> => {
  try {
    // Initialize AI client inside the function to ensure it uses the latest API Key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Prepare content parts
    const contentParts: any[] = [];
    let identityPrompt = "";
    
    // Convert all images to generative parts and build identity mapping prompt
    let index = 0;
    const roleIds = Object.keys(imageFiles);
    
    for (const roleId of roleIds) {
        const file = imageFiles[roleId];
        const part = await fileToGenerativePart(file);
        contentParts.push(part);
        
        const characterName = metadata?.multiRoleMap?.[roleId] || metadata?.roleName || "Main Character";
        
        identityPrompt += `
        [IMAGE SOURCE ${index + 1}]:
        - This image corresponds to the character role: "${characterName}".
        - ACTION: Apply the face from Image ${index + 1} onto the body/costume of "${characterName}" in the scene.
        `;
        index++;
    }

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
      
      GOAL: Generate a 2K resolution movie poster starring the person(s) from the INPUT IMAGE(S).
      
      SOURCE MATERIAL:
      - **INPUT IMAGES ARE GROUND TRUTH**: The faces provided are absolute references.
      - Target Scene: ${scenePrompt}
      - Visual Style: ${specificStyle} | ${eraAesthetic}

      ${identityPrompt}

      ⚠️ CRITICAL PRIORITY: IDENTITY CLONING MODE ⚠️
      You must perform a "Digital Face Transplant" rather than a "Generation". 
      
      1. 🧬 ABSOLUTE FACIAL GEOMETRY LOCK
         - **Do NOT change face shapes**: Keep exact jawline, chin, and cheekbone structures.
         - **Do NOT "Westernize" or "Beautify"**: Preserve ethnic features, asymmetry, and skin imperfections.
         - **Eyes**: The shape of the eyes must match 100%.
         - **Gender**: Adapt the character's body/hair to match the USER'S gender if significantly different, UNLESS it breaks the scene's core iconicity.

      2. 💡 LIGHTING & TEXTURE MATCHING (CRITICAL)
         - The face MUST react to the scene's lighting (e.g., if the scene is sunset, the face must have warm side-lighting).
         - Avoid "floating head" effect. The skin tone and grain must match the body and environment perfectly.
         - If the scene is dirty/gritty, apply dirt/sweat to the face to match.

      3. 👥 MULTI-ROLE / CO-STAR RENDERING
         - If multiple images are provided, map them EXACTLY as defined in [IMAGE SOURCE] sections.
         - Ensure consistent artistic style across all characters.
         
      4. 🎞️ MOVIE POSTER COMPOSITION
         - ${titleInstruction}
         - Composition must be balanced and cinematic.
    `;

    // Add text prompt to content parts
    contentParts.push({ text: fullPrompt });

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: contentParts
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: '2K'
        }
      }
    });

    // Extract image from response
    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }

    throw new Error("No image generated by the model.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
