
import React, { useState, useMemo } from 'react';
import { MOVIE_SCENES } from '../constants';
import { MovieScene, MovieRole } from '../types';

interface SceneSelectorProps {
  selectedSceneId: string | null;
  onSceneSelect: (scene: MovieScene) => void;
  selectedRole: MovieRole | null;
  onRoleSelect: (role: MovieRole) => void;
}

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'classic', label: 'CLASSIC' },
  { id: 'scifi', label: 'SCI-FI' },
  { id: 'action', label: 'ACTION' },
  { id: 'romance', label: 'ROMANCE' },
  { id: 'fantasy', label: 'FANTASY' },
  { id: 'drama', label: 'DRAMA' },
  { id: 'animation', label: 'ANIME' },
];

const SceneSelector: React.FC<SceneSelectorProps> = ({ 
  selectedSceneId, 
  onSceneSelect,
  selectedRole,
  onRoleSelect
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSceneId, setHoveredSceneId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScenes = useMemo(() => {
    let scenes = MOVIE_SCENES;

    // 1. Filter by Category
    if (activeCategory !== 'all') {
      scenes = scenes.filter(scene => scene.category === activeCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      scenes = scenes.filter(scene => 
        scene.title.toLowerCase().includes(query) ||
        scene.year.includes(query) ||
        scene.description.toLowerCase().includes(query)
      );
    }

    return scenes;
  }, [activeCategory, searchQuery]);

  const previewScene = useMemo(() => {
    if (hoveredSceneId) return MOVIE_SCENES.find(s => s.id === hoveredSceneId);
    if (selectedSceneId) return MOVIE_SCENES.find(s => s.id === selectedSceneId);
    return null;
  }, [hoveredSceneId, selectedSceneId]);

  const selectedScene = useMemo(() => 
    MOVIE_SCENES.find(s => s.id === selectedSceneId), 
  [selectedSceneId]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-4 mb-6">
        
        {/* Search Bar */}
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="SEARCH DATABASE (TITLE, YEAR, KEYWORD)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-white/10 text-white font-mono text-xs px-4 py-3 rounded focus:outline-none focus:border-cinema-gold/50 focus:bg-black/60 transition-all placeholder-gray-600"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs - Tech Pill Style */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-sm text-[10px] font-tech font-bold tracking-widest transition-all uppercase border
                ${activeCategory === cat.id 
                  ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.4)]' 
                  : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-gray-300'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Preview Panel (Holographic Billboard) */}
      <div className="mb-6 relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-black group shrink-0 shadow-lg">
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
        
        {previewScene ? (
           <>
             {/* Background Image */}
             {previewScene.previewImage && (
               <img 
                 src={previewScene.previewImage} 
                 alt="preview background" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s] ease-out"
               />
             )}
             
             {/* Content */}
             <div key={previewScene.id} className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center animate-fade-in z-30">
                <div className="flex items-center gap-3 mb-3">
                   <span className="text-cinema-accent font-tech font-bold text-xs tracking-widest uppercase border border-cinema-accent/30 px-2 py-1 rounded bg-cinema-accent/10">
                     {CATEGORIES.find(c => c.id === previewScene.category)?.label || previewScene.category}
                   </span>
                   <span className="text-gray-400 font-mono text-xs px-2">
                     // {previewScene.year}
                   </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-tech font-bold text-white mb-2 drop-shadow-xl max-w-2xl tracking-wide uppercase">
                  {previewScene.title}
                </h1>
                <p className="text-gray-300 text-sm max-w-lg line-clamp-2 leading-relaxed font-light">
                  {previewScene.description}
                </p>
                
                {/* Style Tags */}
                {previewScene.styleKeywords && (
                  <div className="flex gap-2 mt-4 overflow-hidden">
                     {previewScene.styleKeywords.split(',').slice(0,3).map((tag, i) => (
                       <span key={i} className="text-[10px] text-gray-500 uppercase tracking-wider border border-white/5 px-2 py-1 rounded-full whitespace-nowrap">
                         {tag.trim()}
                       </span>
                     ))}
                  </div>
                )}
             </div>
           </>
        ) : (
           <div className="flex flex-col items-center justify-center h-full text-gray-700 gap-2 z-30 relative">
              <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center">
                 <div className="w-1 h-1 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest">Awaiting Selection</p>
           </div>
        )}
      </div>

      {/* Role Selection Area - Expanded View */}
      {selectedScene && selectedScene.roles && selectedScene.roles.length > 0 && (
        <div className="mb-8 animate-slide-up bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
              <span className="text-cinema-accent">↳</span>
              <h4 className="font-tech font-bold text-cinema-accent tracking-wider text-sm">SELECT CHARACTER PROTOCOL</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedScene.roles.map((role) => (
              <button
                key={role.id}
                onClick={() => onRoleSelect(role)}
                className={`
                  relative h-32 rounded-lg border text-left transition-all overflow-hidden group flex items-stretch
                  ${selectedRole?.id === role.id 
                    ? 'border-cinema-gold shadow-[0_0_20px_rgba(255,215,0,0.15)] ring-1 ring-cinema-gold/50' 
                    : 'border-white/10 hover:border-white/30'}
                `}
              >
                 {/* Card Background (uses scene preview if available, darkened) */}
                 <div className="absolute inset-0 bg-black z-0">
                    {selectedScene.previewImage && (
                        <img 
                            src={selectedScene.previewImage} 
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 ${selectedRole?.id === role.id ? 'opacity-50' : ''}`}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                 </div>

                 <div className="relative z-10 flex flex-col justify-center p-5 w-full">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className={`font-tech font-bold text-xl tracking-wide ${selectedRole?.id === role.id ? 'text-cinema-gold' : 'text-gray-100 group-hover:text-white'}`}>
                          {role.name}
                        </h4>
                        {selectedRole?.id === role.id && (
                             <div className="bg-cinema-gold text-black text-[10px] font-bold px-2 py-0.5 rounded font-mono">SELECTED</div>
                        )}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-[90%] group-hover:text-gray-300 transition-colors">
                      {role.description}
                    </p>
                 </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Scenes Grid */}
      <div className="flex-1 min-h-[300px]">
        <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest pl-1">Available Scenarios ({filteredScenes.length})</h4>
        
        {filteredScenes.length === 0 ? (
           <div className="flex items-center justify-center h-40 text-gray-500 font-mono text-xs border border-white/5 rounded-lg bg-white/5">
             NO DATA FOUND
           </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2 pb-2">
              {filteredScenes.map((scene) => {
                const isSelected = selectedSceneId === scene.id;
                const isHovered = hoveredSceneId === scene.id;
                const showColor = isSelected || isHovered;

                return (
                  <button
                      key={scene.id}
                      onClick={() => onSceneSelect(scene)}
                      onMouseEnter={() => setHoveredSceneId(scene.id)}
                      onMouseLeave={() => setHoveredSceneId(null)}
                      className={`
                      relative overflow-hidden rounded-xl h-48 text-left transition-all duration-300 group
                      border w-full
                      ${isSelected 
                          ? 'border-cinema-gold ring-1 ring-cinema-gold/50 shadow-[0_0_20px_rgba(255,215,0,0.2)]' 
                          : 'border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-cinema-accent/10'}
                      `}
                  >
                      {/* Background Image */}
                      <div className="absolute inset-0 bg-black">
                        {scene.previewImage && (
                          <img 
                            src={scene.previewImage} 
                            className={`
                              w-full h-full object-cover transition-all duration-700 ease-out
                              ${showColor ? 'scale-110 opacity-100 grayscale-0' : 'scale-100 opacity-50 grayscale'}
                            `}
                          />
                        )}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-100'}`}></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 flex flex-col justify-end h-full p-4">
                        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="flex justify-between items-end mb-1">
                                <span className={`text-[10px] font-mono uppercase tracking-wider py-0.5 px-1.5 rounded bg-black/60 backdrop-blur-md border border-white/10 ${isSelected ? 'text-cinema-gold border-cinema-gold/30' : 'text-gray-400'}`}>
                                {scene.category}
                                </span>
                                <span className="text-[10px] font-mono text-gray-300 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-md">{scene.year}</span>
                            </div>
                            
                            <h3 className={`text-lg font-bold font-tech tracking-wide leading-tight drop-shadow-lg ${isSelected ? 'text-cinema-gold' : 'text-white'}`}>
                              {scene.title.split('(')[0]}
                            </h3>
                        </div>
                      </div>
                      
                      {/* Selection Highlight */}
                      {isSelected && (
                        <>
                          <div className="absolute inset-0 border-2 border-cinema-gold rounded-xl pointer-events-none z-20"></div>
                          <div className="absolute top-0 right-0 w-4 h-4 bg-cinema-gold z-20 flex items-center justify-center rounded-bl-lg">
                             <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          </div>
                        </>
                      )}
                  </button>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SceneSelector;
