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
  { id: 'all', label: 'ALL' },
  { id: 'tv', label: 'TV' },
  { id: 'game', label: 'GAME' },
  { id: 'action', label: 'ACTION' },
  { id: 'scifi', label: 'SCI-FI' },
  { id: 'romance', label: 'ROMANCE' },
  { id: 'classic', label: 'CLASSIC' },
  { id: 'fantasy', label: 'FANTASY' },
  { id: 'drama', label: 'DRAMA' },
  { id: 'animation', label: 'ANIME' },
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
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredScenes = useMemo(() => {
    let scenes = MOVIE_SCENES;
    if (activeCategory !== 'all') {
      scenes = scenes.filter(scene => scene.category === activeCategory);
    }
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

  const previewScene = useMemo(() => {
    if (hoveredSceneId) return MOVIE_SCENES.find(s => s.id === hoveredSceneId);
    if (selectedSceneId) return MOVIE_SCENES.find(s => s.id === selectedSceneId);
    return null;
  }, [hoveredSceneId, selectedSceneId]);

  const handleRandomSelect = () => {
    if (filteredScenes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredScenes.length);
      onSceneSelect(filteredScenes[randomIndex]);
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in font-mono">
      
      {/* 1. Control Panel */}
      <div className="flex gap-2 border border-retro-border p-1 bg-retro-panel">
        <div className="relative flex-1 group">
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <span className="text-retro-gold animate-pulse">></span>
           </div>
           <input 
            type="text" 
            placeholder="QUERY_DB..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border-none text-retro-gold font-mono py-2 pl-8 pr-10 focus:outline-none placeholder-retro-border/50 uppercase text-sm"
           />
           {searchQuery && (
             <button 
               onClick={() => setSearchQuery('')}
               className="absolute inset-y-0 right-0 pr-3 flex items-center text-retro-red hover:text-white"
             >
               X
             </button>
           )}
        </div>
        <button 
          onClick={handleRandomSelect}
          className="bg-retro-border text-retro-teal px-4 hover:bg-retro-gold hover:text-black transition-colors border-l border-retro-border"
        >
          RND()
        </button>
      </div>

      {/* 2. Category Tabs (Terminal Tabs) */}
      <div className="overflow-x-auto custom-scrollbar border-b border-retro-border">
        <div className="flex gap-1 min-w-max pb-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-4 py-2 text-xs font-bold font-mono tracking-widest uppercase border border-retro-border transition-all
                ${activeCategory === cat.id 
                  ? 'bg-retro-gold text-black border-retro-gold shadow-[0_0_10px_rgba(0,255,65,0.5)] animate-flicker' 
                  : 'bg-black text-retro-gold border-retro-gold/30 hover:bg-retro-gold/20 hover:border-retro-gold hover:text-white opacity-80'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Featured Preview Panel (Terminal Display) */}
      <div className="relative w-full h-56 bg-black border border-retro-gold overflow-hidden group">
        {/* Terminal Header */}
        <div className="absolute top-0 left-0 w-full flex justify-between px-2 py-1 bg-retro-gold/20 border-b border-retro-gold z-30">
           <span className="text-[10px] text-retro-gold">PREVIEW_WINDOW</span>
           <span className="text-[10px] text-retro-gold">RES: 2K</span>
        </div>

        {previewScene ? (
          <>
            {/* Base Layer: Gradient (Always Visible) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${previewScene.previewColor} z-0 opacity-40 transition-opacity`}></div>
            
            {/* Image Layer: Renders on top if available */}
            {previewScene.previewImage && !imageErrors[`preview-${previewScene.id}`] && (
              <img 
                src={previewScene.previewImage} 
                alt="Preview" 
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-80 transition-opacity duration-500"
                onError={() => handleImageError(`preview-${previewScene.id}`)}
              />
            )}
            
            {/* Scanline Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-30 z-20 pointer-events-none"></div>
            
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/90 border-t border-retro-gold p-4 z-30">
                 <div className="flex items-center gap-4 mb-1">
                   <h2 className="text-2xl font-display font-bold text-retro-gold uppercase">
                     {previewScene.title}
                   </h2>
                   <span className="text-retro-teal font-mono text-xs border border-retro-teal px-1">
                     {previewScene.year}
                   </span>
                 </div>
                 <p className="text-retro-teal font-mono text-xs leading-tight opacity-80 max-w-2xl">
                   > {previewScene.description}
                 </p>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
            <div className="text-4xl animate-pulse text-retro-border mb-2">_</div>
            <p className="font-mono text-retro-border text-xs">WAITING FOR INPUT...</p>
          </div>
        )}
      </div>

      {/* 4. Role Selection */}
      {selectedSceneId && (() => {
        const scene = MOVIE_SCENES.find(s => s.id === selectedSceneId);
        if (scene && scene.roles && scene.roles.length > 0) {
          return (
            <div className="border border-retro-teal/50 p-2 bg-retro-teal/5 animate-fade-in">
              <div className="flex items-center gap-2 mb-2">
                 <span className="text-retro-teal animate-spin-slow">✻</span>
                 <h3 className="font-mono text-retro-teal text-xs uppercase">Select Identity Subroutine</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {scene.roles.map(role => {
                   const hasRoleImage = role.previewImage && !imageErrors[`role-${role.id}`];
                   return (
                     <button
                       key={role.id}
                       onClick={() => onRoleSelect(role)}
                       className={`
                         flex items-center gap-3 p-2 border transition-all text-left
                         ${selectedRole?.id === role.id 
                           ? 'border-retro-gold bg-retro-gold/10' 
                           : 'border-retro-border hover:border-retro-teal bg-black'}
                       `}
                     >
                       <div className="w-12 h-12 border border-retro-border bg-black shrink-0 relative overflow-hidden flex items-center justify-center">
                          {hasRoleImage ? (
                             <img 
                               src={role.previewImage} 
                               className="w-full h-full object-cover grayscale"
                               onError={() => handleImageError(`role-${role.id}`)}
                             />
                          ) : (
                            <div className="text-retro-teal text-[10px] font-mono opacity-50">N/A</div>
                          )}
                       </div>
                       <div>
                          <div className={`font-bold font-display uppercase text-sm ${selectedRole?.id === role.id ? 'text-retro-gold' : 'text-gray-400'}`}>
                             {role.name}
                          </div>
                          <div className="text-[10px] text-retro-teal/70 font-mono truncate max-w-[150px]">
                             {role.description}
                          </div>
                       </div>
                     </button>
                   );
                })}
              </div>
            </div>
          );
        }
        return null;
      })()}

      {/* 5. Scene List (Database Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredScenes.map(scene => {
          const isSelected = selectedSceneId === scene.id;
          const hasImage = scene.previewImage && !imageErrors[scene.id];

          return (
            <button
              key={scene.id}
              onClick={() => onSceneSelect(scene)}
              onMouseEnter={() => setHoveredSceneId(scene.id)}
              onMouseLeave={() => setHoveredSceneId(null)}
              className={`
                relative h-24 border transition-all flex items-end p-2 text-left overflow-hidden group
                ${isSelected 
                  ? 'border-retro-gold bg-retro-gold/10' 
                  : 'border-retro-border hover:border-retro-teal bg-black'}
              `}
            >
              {/* Layer 1: Base Gradient (Always rendered for aesthetic fallback) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${scene.previewColor} opacity-20 transition-opacity duration-500`}></div>

              {/* Layer 2: Image (Rendered on top if available) */}
              {hasImage && (
                <img 
                  src={scene.previewImage} 
                  alt={scene.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 grayscale group-hover:grayscale-0 transition-all duration-300 z-10 mix-blend-normal"
                  onError={() => handleImageError(scene.id)}
                />
              )}
              
              {/* Layer 3: Text Overlay */}
              <div className="relative z-20 w-full">
                 <div className="flex justify-between items-end border-b border-white/10 pb-1 mb-1">
                   <span className={`font-display text-xs font-bold leading-none truncate pr-2 ${isSelected ? 'text-retro-gold' : 'text-gray-300'}`}>
                     {scene.title}
                   </span>
                   {isSelected && <span className="text-retro-gold text-[10px]">●</span>}
                 </div>
                 <div className="text-[9px] text-retro-teal font-mono uppercase">
                   ID: {scene.id.substring(0,6)}
                 </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {filteredScenes.length === 0 && (
         <div className="text-center py-8 border border-dotted border-retro-border text-retro-border font-mono text-sm">
           <p>> NO_MATCH_FOUND</p>
           <button onClick={() => {setSearchQuery(''); setActiveCategory('all');}} className="mt-2 text-retro-gold underline">[ RESET_QUERY ]</button>
         </div>
      )}
    </div>
  );
};

export default SceneSelector;