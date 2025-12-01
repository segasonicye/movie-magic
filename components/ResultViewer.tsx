
import React from 'react';

interface ResultViewerProps {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ imageUrl, loading, error, onReset }) => {
  if (loading) {
    return (
      <div className="w-full h-[600px] flex flex-col items-center justify-center bg-black/80 border border-white/10 rounded-2xl relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Spinner */}
        <div className="relative z-10 flex flex-col items-center">
           <div className="relative w-24 h-24 mb-8">
             <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
             <div className="absolute inset-0 border-4 border-t-cinema-gold border-r-cinema-gold border-b-transparent border-l-transparent rounded-full animate-spin"></div>
             <div className="absolute inset-4 border-2 border-cinema-accent/50 rounded-full animate-pulse"></div>
           </div>
           
           <div className="text-center space-y-2">
             <h3 className="text-2xl font-tech font-bold text-white tracking-widest animate-pulse">PROCESSING</h3>
             <p className="text-cinema-accent font-mono text-xs tracking-wider">
               COMPOSITING SCENE DATA...
             </p>
           </div>
        </div>
        
        {/* Fake Terminal Output */}
        <div className="absolute bottom-8 left-8 font-mono text-[10px] text-gray-600 space-y-1 opacity-50 hidden sm:block">
           <p>> LOADING ASSETS...</p>
           <p>> ANALYZING GEOMETRY...</p>
           <p>> RELIGHTING SUBJECT...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[400px] flex flex-col items-center justify-center bg-red-900/10 border border-red-500/30 rounded-2xl">
        <h3 className="text-2xl font-tech font-bold text-red-500 mb-2">SYSTEM FAILURE</h3>
        <p className="text-red-300/70 font-mono text-sm mb-6 max-w-md text-center">{error}</p>
        <button 
          onClick={onReset}
          className="px-8 py-3 bg-red-600/20 border border-red-500 text-red-400 font-tech font-bold rounded hover:bg-red-600/40 transition-all"
        >
          REBOOT SEQUENCE
        </button>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="flex flex-col items-center w-full animate-fade-in pb-10">
        
        {/* Main Result Display */}
        <div className="relative group w-full max-w-[800px] rounded-sm p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl">
          {/* Decorative Corner Lights */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cinema-gold"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cinema-gold"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cinema-gold"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cinema-gold"></div>
          
          <img 
            src={imageUrl} 
            alt="Generated Scene" 
            className="w-full h-auto shadow-inner"
          />
          
          <div className="absolute bottom-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
             <a 
              href={imageUrl} 
              download="movie-magic-poster.png"
              className="px-6 py-3 bg-cinema-gold text-black font-tech font-bold tracking-wider rounded-sm hover:bg-white transition-colors shadow-lg"
             >
               DOWNLOAD
             </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <button 
            onClick={onReset}
            className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 border border-white/20 rounded-full group-hover:border-cinema-gold/50 transition-colors"></span>
            <span className="relative font-tech font-bold tracking-widest text-gray-400 group-hover:text-cinema-gold transition-colors">
              CREATE ANOTHER
            </span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ResultViewer;
