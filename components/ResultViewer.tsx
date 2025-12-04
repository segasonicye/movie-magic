import React from 'react';

interface ResultViewerProps {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
  title?: string;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ imageUrl, loading, error, onReset, title }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-black border border-retro-gold p-8 font-mono">
        <div className="w-full max-w-sm mb-6">
           <div className="flex justify-between text-xs text-retro-gold mb-1">
             <span>RENDERING_NEURAL_NET</span>
             <span className="animate-pulse">PROCESSING...</span>
           </div>
           <div className="h-4 w-full border border-retro-gold p-0.5">
             <div className="h-full bg-retro-gold w-full animate-[scan_3s_ease-in-out_infinite] origin-left scale-x-0"></div>
           </div>
        </div>
        <div className="text-retro-teal text-sm space-y-1 text-left w-full max-w-sm font-mono">
          <p>> Allocating GPU resources...</p>
          <p>> Mapping facial geometry...</p>
          <p>> Injecting cinematic lighting...</p>
          <p>> Compiling 2K resolution...</p>
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
    const filename = title ? `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_poster.png` : 'poster.png';
    
    return (
      <div className="flex flex-col items-center animate-fade-in w-full">
        <div className="bg-black border-2 border-retro-gold p-1 relative shadow-[0_0_30px_rgba(0,255,65,0.2)] max-w-2xl w-full">
           <img 
            src={imageUrl} 
            alt="Generated Scene" 
            className="w-full h-auto"
          />
           <div className="absolute bottom-4 right-4">
             <a 
              href={imageUrl} 
              download={filename}
              className="px-6 py-2 bg-retro-gold text-black font-bold font-display tracking-wider hover:bg-white hover:text-black border border-black shadow-lg"
             >
               DOWNLOAD_FILE
             </a>
           </div>
        </div>
        
        <div className="mt-8 flex gap-4">
           <button 
             onClick={onReset}
             className="px-8 py-3 bg-black border border-retro-teal text-retro-teal font-mono hover:border-retro-gold hover:text-retro-gold"
           >
             &lt; NEW_SIMULATION
           </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ResultViewer;