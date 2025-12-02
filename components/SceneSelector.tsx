import React, { useState, useMemo } from 'react';
import { MOVIE_SCENES } from '../constants';
import { MovieScene, MovieRole } from '../types';

interface SceneSelectorProps {
  selectedSceneId: string | null;
  selectedRole: MovieRole | null;
  onSceneSelect: (scene: MovieScene) => void;
  onRoleSelect: (role: MovieRole) => void;
}

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'game', label: '游戏 (Game)' },
  { id: 'action', label: '动作 (Action)' },
  { id: 'scifi', label: '科幻 (Sci-Fi)' },
  { id: 'romance', label: '爱情 (Romance)' },
  { id: 'classic', label: '经典 (Classic)' },
  { id: 'fantasy', label: '奇幻 (Fantasy)' },
  { id: 'drama', label: '剧情 (Drama)' },
  { id: 'animation', label: '动画 (Animation)' },
];

const SceneSelector: React.FC<SceneSelectorProps> = ({ 
  selectedSceneId, 
  selectedRole,
  onSceneSelect,
  onRoleSelect
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSceneId, setHoveredSceneId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScenes = useMemo(() => {
    let scenes = MOVIE_SCENES;

    // 1. Category Filter
    if (activeCategory !== 'all') {
      scenes = scenes.filter(scene => scene.category === activeCategory);
    }

    // 2. Search Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      scenes = scenes.filter(scene => 
        scene.title.toLowerCase().includes(query) ||
        scene.year.includes(query) ||
        scene.description.toLowerCase().includes(query) ||
        (scene.styleKeywords && scene.styleKeywords.toLowerCase().includes(query))
      );
    }

    return scenes;
  }, [activeCategory, searchQuery]);

  // Determine which scene to show in the large preview panel
  const previewScene = useMemo(() => {
    if (hoveredSceneId) return MOVIE_SCENES.find(s => s.id === hoveredSceneId);
    if (selectedSceneId) return MOVIE_SCENES.find(s => s.id === selectedSceneId);
    return null;
  }, [hoveredSceneId, selectedSceneId]);

  // Handle Random Selection
  const handleRandomSelect = () => {
    if (filteredScenes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredScenes.length);
      onSceneSelect(filteredScenes[randomIndex]);
    }
  };

  const selectedScene = MOVIE_SCENES.find(s => s.id === selectedSceneId);
  const hasRoles = selectedScene?.roles && selectedScene.roles.length > 0;

  return (
    <div className="w-full">
      {/* Controls Bar */}
      <div className="flex flex-col gap-4 mb-6">
        
        {/* Search & Random */}
        <div className="flex gap-2">
          <div className="relative flex-grow group">
             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
               <span className="text-gray-500 group-focus-within:text-cinema-gold transition-colors">🔍</span>
             </div>
             <input
               type="text"
               placeholder="Search movies, year, or style..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-cinema-900/50 border border-cinema-700 text-white rounded-lg py-2.5 pl-10 pr-10 focus:outline-none focus:border-cinema-gold focus:ring-1 focus:ring-cinema-gold/50 transition-all font-sans text-sm placeholder-gray-600"
             />
             {searchQuery && (
               <button 
                 onClick={() => setSearchQuery('')}
                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white"
               >
                 ✕
               </button>
             )}
          </div>
          <button
            onClick={handleRandomSelect}
            className="px-4 py-2 bg-cinema-800 border border-cinema-700 text-cinema-gold rounded-lg hover:bg-cinema-700 hover:text-white transition-all font-[Rajdhani] font-bold tracking-wider flex items-center gap-2 group"
          >
             <span className="group-hover:animate-spin">🎲</span>
             <span className="hidden sm:inline">RANDOM</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded text-[11px] sm:text-xs font-medium uppercase tracking-wider transition-all border
                ${activeCategory === cat.id 
                  ? 'bg-cinema-gold text-black border-cinema-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                  : 'bg-transparent text-gray-500 border-cinema-800 hover:border-gray-500 hover:text-gray-300'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Preview Panel (Master View) */}
      <div className="mb-6 relative w-full rounded-xl overflow-hidden border border-cinema-700 shadow-2xl bg-black transition-all group">
        
        {/* Main Banner Height */}
        <div className="h-56 sm:h-64 relative">
          {previewScene ? (
            <>
              {/* Background Image with Blur/Dim */}
              <div className="absolute inset-0 bg-black">
                {previewScene.previewImage ? (
                  <img 
                    src={previewScene.previewImage} 
                    alt="preview background" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-[2s] group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${previewScene.previewColor} opacity-50`}></div>
                )}
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div key={previewScene.id} className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center animate-fade-in z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cinema-gold font-bold text-[10px] tracking-[0.2em] uppercase bg-black/50 border border-cinema-gold/30 px-2 py-1 rounded backdrop-blur-sm">
                      {CATEGORIES.find(c => c.id === previewScene.category)?.label || previewScene.category}
                    </span>
                    <span className="text-gray-400 text-[10px] border border-gray-700 bg-black/30 px-2 py-1 rounded font-mono">
                      {previewScene.year}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg max-w-2xl font-[Rajdhani] uppercase leading-none">
                    {previewScene.title}
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base max-w-lg line-clamp-3 leading-relaxed drop-shadow-md border-l-2 border-cinema-gold/50 pl-3">
                    {previewScene.description}
                  </p>
                  {previewScene.styleKeywords && (
                    <div className="mt-4 flex gap-2 overflow-hidden max-w-lg">
                      {previewScene.styleKeywords.split(',').slice(0, 3).map((keyword, idx) => (
                        <span key={idx} className="text-[10px] text-gray-400 bg-gray-900/80 px-2 py-0.5 rounded-full border border-gray-700 whitespace-nowrap">
                          {keyword.trim()}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-600 gap-3 bg-cinema-900/50">
                <span className="text-4xl opacity-20 animate-pulse">📼</span>
                <p className="text-sm font-medium font-mono uppercase tracking-widest">Select or Hover a Scene</p>
            </div>
          )}
        </div>

        {/* --- ROLE SELECTION PANEL (Conditional) --- */}
        {selectedScene && hasRoles && (
          <div className="border-t border-cinema-700 bg-black/80 p-4 sm:p-6 animate-slide-up backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-1.5 h-1.5 bg-cinema-gold rounded-full animate-ping"></div>
               <h3 className="text-cinema-gold font-bold font-[Rajdhani] uppercase tracking-widest text-sm">
                 Select Character Role
               </h3>
               <span className="text-gray-500 text-xs italic ml-auto hidden sm:inline">
                 {selectedRole ? 'Role Selected' : 'Required*'}
               </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedScene.roles!.map((role) => (
                <button
                  key={role.id}
                  onClick={() => onRoleSelect(role)}
                  className={`
                    relative flex items-center gap-4 p-3 rounded-lg border text-left transition-all overflow-hidden group
                    ${selectedRole?.id === role.id 
                      ? 'bg-cinema-gold/10 border-cinema-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-600 hover:bg-gray-800'}
                  `}
                >
                  {/* Role Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded overflow-hidden border border-gray-700 relative">
                     {role.previewImage ? (
                       <img src={role.previewImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     ) : (
                       <div className="w-full h-full bg-gray-800"></div>
                     )}
                     {selectedRole?.id === role.id && (
                       <div className="absolute inset-0 bg-cinema-gold/20 flex items-center justify-center">
                         <span className="text-xl">✓</span>
                       </div>
                     )}
                  </div>

                  {/* Role Info */}
                  <div className="flex-grow min-w-0">
                    <h4 className={`font-bold font-[Rajdhani] uppercase text-lg leading-none mb-1 ${selectedRole?.id === role.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {role.name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Scenes Grid (Detail List) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 max-h-[500px] overflow-y-auto custom-scrollbar pr-2 pb-2">
        {filteredScenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => onSceneSelect(scene)}
            onMouseEnter={() => setHoveredSceneId(scene.id)}
            onMouseLeave={() => setHoveredSceneId(null)}
            className={`
              relative overflow-hidden rounded-lg h-40 sm:h-48 text-left transition-all duration-300 group flex flex-col justify-end
              border
              ${selectedSceneId === scene.id 
                ? 'border-cinema-gold ring-1 ring-cinema-gold scale-[1.02] shadow-xl shadow-cinema-gold/10 z-10' 
                : 'border-cinema-800 hover:border-gray-500 hover:scale-[1.02]'}
            `}
          >
            {/* Background Layer 1: Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${scene.previewColor} opacity-80 group-hover:opacity-100 transition-all`}></div>
            
            {/* Background Layer 2: Image Preview */}
            {scene.previewImage && (
              <img 
                src={scene.previewImage} 
                alt="preview" 
                className={`
                  absolute inset-0 w-full h-full object-cover transition-all duration-700
                  ${selectedSceneId === scene.id ? 'opacity-40 scale-105 grayscale-0' : 'opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'}
                `}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 p-3 w-full transform transition-transform duration-300">
              <span className="text-[10px] font-mono text-cinema-gold/80 uppercase tracking-wider mb-1 block">
                {scene.year}
              </span>
              <h3 className={`text-sm sm:text-base font-bold drop-shadow-md leading-tight mb-1 font-[Rajdhani] uppercase ${selectedSceneId === scene.id ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                {scene.title.split('(')[0]}
              </h3>
            </div>
            
            {/* Selected Indicator */}
            {selectedSceneId === scene.id && (
              <div className="absolute top-2 right-2 bg-cinema-gold text-black rounded-sm w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-lg z-20">
                ✓
              </div>
            )}
            
            {/* Role Indicator */}
            {scene.roles && scene.roles.length > 0 && (
               <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-gray-300 border border-gray-700 rounded-sm px-1.5 py-0.5 text-[9px] font-mono flex items-center gap-1">
                 <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                 MULTI-ROLE
               </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SceneSelector;