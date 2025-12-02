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
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-cinema-800 rounded-xl border border-cinema-700 p-8 animate-pulse">
        <div className="w-16 h-16 border-4 border-cinema-gold border-t-transparent rounded-full animate-spin mb-6"></div>
        <h3 className="text-xl font-bold text-white mb-2">正在拍摄中...</h3>
        <p className="text-gray-400 text-center max-w-md">
          AI 导演正在布置场景、调整灯光并将您合成到电影画面中。请稍候 (约10-20秒)。
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-cinema-800 rounded-xl border border-red-900/50 p-8">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-white mb-2">生成失败</h3>
        <p className="text-red-400 text-center mb-6">{error}</p>
        <button 
          onClick={onReset}
          className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          重试
        </button>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="flex flex-col items-center animate-fade-in">
        <div className="relative group w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl shadow-cinema-gold/10 border border-cinema-700">
          <img 
            src={imageUrl} 
            alt="Generated Scene" 
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end gap-4">
             <a 
              href={imageUrl} 
              download="movie-magic-scene.png"
              className="px-4 py-2 bg-cinema-gold text-black font-bold rounded hover:bg-yellow-500 transition-colors"
             >
               下载海报
             </a>
          </div>
        </div>
        
        <button 
          onClick={onReset}
          className="mt-8 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-full hover:border-white hover:text-white transition-all"
        >
          制作另一张
        </button>
      </div>
    );
  }

  return null;
};

export default ResultViewer;