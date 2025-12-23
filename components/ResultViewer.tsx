
import React, { useState, useEffect } from 'react';

interface ResultViewerProps {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
  title?: string;
}

const LOADING_LOGS = [
  "INITIALIZING_NEURAL_UPLINK...",
  "SCANNING_BIOMETRIC_DATA...",
  "ANALYZING_FACIAL_TOPOLOGY...",
  "MATCHING_LIGHTING_VECTORS...",
  "RENDERING_SKIN_TEXTURES...",
  "COMPILING_PIXEL_SHADERS...",
  "APPLYING_CINEMATIC_COLOR_GRADE...",
  "SYNCHRONIZING_REALITY_MATRIX...",
  "GENERATING_VIBRANIUM_MESH...",
  "CALIBRATING_FLUX_CAPACITOR...",
  "ESTABLISHING_CONNECTION_TO_SKYNET...",
  "UPLOADING_CONSCIOUSNESS...",
  "OPTIMIZING_OUTPUT_RESOLUTION...",
];

const ResultViewer: React.FC<ResultViewerProps> = ({ imageUrl, loading, error, onReset, title }) => {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLogIndex(prev => (prev + 1) % LOADING_LOGS.length);
      }, 800); // Change log every 800ms
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleDownload = async () => {
    if (!imageUrl) return;
    
    const timestamp = new Date().toISOString().slice(0, 10);
    const safeTitle = title ? title.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'scene';
    const filename = `movie_magic_${safeTitle}_${timestamp}.png`;

    try {
      // Fetch the data URL to get a blob, which is more reliable for downloads on mobile browsers
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
    } catch (e) {
      console.error("Download failed:", e);
      // Fallback for simple data URI download
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-black border border-retro-gold p-8 font-mono relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none"></div>
        
        <div className="w-full max-w-sm mb-8 z-10">
           <div className="flex justify-between text-xs text-retro-gold mb-2 font-bold tracking-widest">
             <span>SYSTEM_STATUS</span>
             <span className="animate-pulse">PROCESSING...</span>
           </div>
           
           {/* Progress Bar */}
           <div className="h-2 w-full border border-retro-gold p-0.5 mb-6">
             <div className="h-full bg-retro-gold w-full animate-[scan_2s_ease-in-out_infinite] origin-left scale-x-0"></div>
           </div>

           {/* Dynamic Logs */}
           <div className="font-mono text-xs space-y-1 h-32 overflow-hidden border-l-2 border-retro-teal pl-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
              {LOADING_LOGS.slice(Math.max(0, logIndex - 4), logIndex + 1).map((log, i) => (
                <p key={i} className={`text-retro-teal ${i === 4 ? 'text-retro-gold font-bold animate-pulse' : 'opacity-60'}`}>
                  > {log}
                </p>
              ))}
           </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-black border border-retro-red p-8">
        <div className="text-retro-red text-4xl mb-4 font-mono">ERROR_404</div>
        <h3 className="text-xl font-bold text-retro-red mb-4 font-display">GENERATION FAILED</h3>
        <p className="text-retro-border text-center mb-6 font-mono text-sm max-w-md">{error}</p>
        <button 
          onClick={onReset}
          className="px-6 py-2 border border-retro-red text-retro-red font-mono hover:bg-retro-red hover:text-black transition-colors"
        >
          [ RETRY_PROTOCOL ]
        </button>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="flex flex-col items-center animate-fade-in w-full">
        {/* Image Display */}
        <div className="bg-black border-2 border-retro-gold p-1 relative shadow-[0_0_30px_rgba(0,255,65,0.2)] max-w-2xl w-full">
           <img 
            src={imageUrl} 
            alt="Generated Scene" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Control Panel */}
        <div className="mt-6 flex flex-col items-center w-full gap-4 max-w-2xl">
           
           {/* Mobile Hint */}
           <p className="text-retro-teal text-[10px] font-mono uppercase opacity-70 md:hidden border border-retro-teal/30 px-2 py-1 bg-black">
             [ TIP: LONG PRESS IMAGE TO SAVE IF BUTTON FAILS ]
           </p>

           <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
             <button 
              onClick={handleDownload}
              className="flex-1 px-6 py-3 bg-retro-gold text-black font-bold font-display tracking-wider hover:bg-white hover:text-black border border-black shadow-lg flex items-center justify-center gap-2 min-w-[200px]"
             >
               <span>💾</span> DOWNLOAD_FILE
             </button>

             <button 
               onClick={onReset}
               className="flex-1 px-6 py-3 bg-black border border-retro-teal text-retro-teal font-mono hover:border-retro-gold hover:text-retro-gold transition-colors flex items-center justify-center gap-2 min-w-[200px]"
             >
               <span>↻</span> NEW_SIMULATION
             </button>
           </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ResultViewer;
