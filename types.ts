
export interface MovieRole {
  id: string;
  name: string;
  description: string;
  prompt: string;
  previewImage?: string;
}

export interface MovieScene {
  id: string;
  title: string;
  year: string;
  description: string; // Used for UI
  prompt: string; // Used for AI (Default if no role selected)
  category: 'action' | 'romance' | 'scifi' | 'classic' | 'fantasy' | 'drama' | 'animation' | 'game' | 'tv';
  previewColor: string;
  previewImage?: string; // New field for hover thumbnail
  styleKeywords?: string; // Specific visual style overrides (e.g. "Film Noir B&W")
  useChineseTitle?: boolean; // If true, extracts the Chinese title instead of English for the poster
  posterFont?: string; // Specific font style and color instruction for the poster title
  roles?: MovieRole[]; // Optional list of selectable roles
}

export interface GenerationResult {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}

export type AspectRatio = '16:9' | '9:16' | '1:1' | '4:3' | '3:4';

export enum AppState {
  UPLOAD = 'UPLOAD',
  SELECT_SCENE = 'SELECT_SCENE',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT'
}

// Augment the existing Window interface
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}
