import React, { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import SceneSelector from './components/SceneSelector';
import ResultViewer from './components/ResultViewer';
import { generateMovieSceneImage } from './services/geminiService';
import { MovieScene, MovieRole, AspectRatio } from './types';

const App: React.FC = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  
  // Replaced single userImage with a map of images (roleId -> File)
  // 'default' key is used for single-role scenes
  const [roleImages, setRoleImages] = useState<Record<string, File>>({});
  
  const [selectedScene, setSelectedScene] = useState<MovieScene | null>(null);
  const [selectedRole, setSelectedRole] = useState<MovieRole | null>(null); // Still used for preview focus
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
  
  const [generationState, setGenerationState] = useState<{
    loading: boolean;
    result: string | null;
    error: string | null;
  }>({
    loading: false,
    result: null,
    error: null,
  });

  // Check for API Key on mount
  useEffect(() => {
    const checkKey = async () => {
      try {
        if (window.aistudio && window.aistudio.hasSelectedApiKey) {
          const has = await window.aistudio.hasSelectedApiKey();
          setHasApiKey(has);
        } else {
          setHasApiKey(true);
        }
      } catch (e) {
        console.error("Error checking API key:", e);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    try {
      if (window.aistudio && window.aistudio.openSelectKey) {
        await window.aistudio.openSelectKey();
        setHasApiKey(true);
      }
    } catch (e) {
      console.error("Error selecting key:", e);
    }
  };

  const getPosterTitle = (scene: MovieScene | null): string | undefined => {
    if (!scene) return undefined;
    if (scene.useChineseTitle) {
       return scene.title.split('(')[0].trim();
    }
    const match = scene.title.match(/\((.*?)\)/);
    if (match && match[1]) {
      return match[1];
    }
    if (scene.title.includes(':')) {
        return scene.title.split(':')[1].trim();
    }
    return scene.title;
  };

  const handleImageUpload = (file: File | null, roleId: string = 'default') => {
    setRoleImages(prev => {
      const newMap = { ...prev };
      if (file) {
        newMap[roleId] = file;
      } else {
        delete newMap[roleId];
      }
      return newMap;
    });
  };

  const handleGenerate = async () => {
    // Check if we have at least one image
    const imageKeys = Object.keys(roleImages);
    if (imageKeys.length === 0) return;
    
    let promptToUse = '';
    let titleToUse = '';
    let metadata: any = { 
      title: '', year: '', category: '', styleKeywords: '', 
      useChineseTitle: false, roleName: '', posterFont: '',
      multiRoleMap: {} 
    };

    if (selectedScene) {
      // Logic for multi-role prompting
      if (selectedScene.roles && selectedScene.roles.length > 0) {
        // Construct a prompt that describes ALL roles
        promptToUse = selectedScene.prompt; // Base prompt usually describes the whole scene
        
        // However, if we only uploaded for ONE specific role (and not all), maybe we should specific focus?
        // Actually, the service now handles mapping. We just send the images we have.
        // We need to tell the service which Role ID maps to which Character Name
        const roleMap: Record<string, string> = {};
        selectedScene.roles.forEach(r => {
           roleMap[r.id] = r.name;
           // Append specific role prompts to base prompt to ensure detail
           promptToUse += ` ${r.prompt}`;
        });
        metadata.multiRoleMap = roleMap;
      } else {
        // Single role / Generic scene
        promptToUse = selectedScene.prompt;
      }

      titleToUse = getPosterTitle(selectedScene) || selectedScene.title;
      metadata = {
        ...metadata,
        title: titleToUse,
        year: selectedScene.year,
        category: selectedScene.category,
        styleKeywords: selectedScene.styleKeywords || '',
        useChineseTitle: selectedScene.useChineseTitle || false,
        roleName: selectedRole ? selectedRole.name : '', // Fallback
        posterFont: selectedScene.posterFont || ''
      };
    } else {
      alert("SELECT TARGET SCENE REQUIRED");
      return;
    }

    setGenerationState({ loading: true, result: null, error: null });

    try {
      // Pass the whole map of images
      const generatedImageUrl = await generateMovieSceneImage(roleImages, promptToUse, aspectRatio, metadata);
      setGenerationState({ loading: false, result: generatedImageUrl, error: null });
    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("Requested entity was not found")) {
        setHasApiKey(false);
        setGenerationState({ 
          loading: false, 
          result: null, 
          error: "ACCESS DENIED: API KEY INVALID" 
        });
      } else {
        setGenerationState({ 
          loading: false, 
          result: null, 
          error: err.message || "SYSTEM FAILURE" 
        });
      }
    }
  };

  const handleReset = () => {
    setGenerationState({ loading: false, result: null, error: null });
  };

  const hasRoles = selectedScene?.roles && selectedScene.roles.length > 0;
  
  // Validation: At least one image must be uploaded
  const hasUploadedImages = Object.keys(roleImages).length > 0;
  const isGenerateDisabled = !hasUploadedImages || !selectedScene;
  
  const showInputUI = !generationState.loading && !generationState.result;
  const resultTitle = getPosterTitle(selectedScene);

  const getButtonText = () => {
    if (!selectedScene) return "[ SELECT TARGET SIMULATION ]";
    if (!hasUploadedImages) return "[ UPLOAD BIOMETRIC DATA ]";
    if (hasRoles) return ">> INITIALIZE ENSEMBLE RENDER <<";
    return ">> INITIALIZE NEURAL RENDER <<";
  };

  // --- API Key Selection Screen (Terminal Style) ---
  if (!hasApiKey) {
    return (
      <div className="min-h-screen bg-retro-bg text-retro-gold font-mono flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-20"></div>
        
        <div className="max-w-lg w-full bg-black border border-retro-gold p-1 relative shadow-[0_0_20px_rgba(0,255,65,0.2)]">
           <div className="border border-retro-gold/50 p-8 text-center relative z-10">
              <h1 className="text-3xl font-bold mb-8 font-display uppercase animate-pulse">
                System Locked
              </h1>
              <div className="text-left font-mono text-sm mb-8 space-y-2 text-retro-teal">
                <p>> CHECKING_SECURITY_PROTOCOLS...</p>
                <p>> BIOMETRIC_SCAN... <span className="text-retro-red">FAILED</span></p>
                <p>> API_TOKEN_VERIFICATION... <span className="text-retro-red">MISSING</span></p>
                <p>> PLEASE INSERT KEYCARD TO PROCEED.</p>
              </div>
              <button 
                onClick={handleSelectKey}
                className="w-full py-4 bg-retro-gold text-black font-bold text-lg hover:bg-white transition-all uppercase font-display tracking-widest"
              >
                [ AUTHENTICATE ]
              </button>
           </div>
        </div>
      </div>
    );
  }

  // --- Main App ---
  return (
    <div className="min-h-screen text-retro-gold font-mono selection:bg-retro-gold selection:text-black pb-20 relative bg-retro-bg overflow-x-hidden">
      
      {/* Intro Section / Header */}
      <div className={`relative w-full border-b border-retro-gold bg-retro-panel z-20 ${showInputUI ? '' : 'hidden'}`}>
        
        {/* Marquee Strip */}
        <div className="relative w-full h-32 overflow-hidden opacity-30 border-b border-retro-border">
           <div className="absolute inset-0 bg-scanlines z-10 pointer-events-none"></div>
           <div className="absolute inset-0 z-0 animate-marquee whitespace-nowrap flex gap-0 items-center">
             {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                  <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=200&fit=crop" className="h-32 w-auto grayscale contrast-150 border-r border-retro-gold/50" />
                  <img src="https://images.unsplash.com/photo-1517604931442-71053e3e2642?w=300&h=200&fit=crop" className="h-32 w-auto grayscale contrast-150 border-r border-retro-gold/50" />
                  <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop" className="h-32 w-auto grayscale contrast-150 border-r border-retro-gold/50" />
                  <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=200&fit=crop" className="h-32 w-auto grayscale contrast-150 border-r border-retro-gold/50" />
                </div>
              ))}
           </div>
        </div>

        <div className="relative z-30 py-6 text-center bg-black/80 backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-retro-gold drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] mb-2 font-display uppercase">
              MOVIE_MAGIC<span className="animate-pulse">_AI</span>
            </h1>
            <p className="text-retro-teal text-xs font-mono tracking-widest uppercase">
              // NEURAL_RENDERING_ENGINE_V9.0 // READY
            </p>
        </div>
      </div>

      <header className="border-b border-retro-border bg-retro-bg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-retro-red animate-flash"></span>
            <span className="text-xs font-mono text-retro-red uppercase">REC</span>
          </div>
          <div className="text-[10px] text-retro-gold font-mono border border-retro-gold/50 px-2 py-1 bg-retro-bg flex items-center gap-2">
            SESSION_ID: {Math.floor(Math.random() * 999999)}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className={showInputUI ? 'contents' : 'hidden'}>
            
            {/* STEP 1: Scene Selection (Top on Mobile, Left on Desktop) */}
            <div className={`w-full lg:w-2/3`}>
               <section className="bg-black border border-retro-gold h-full flex flex-col">
                <div className="bg-retro-gold/10 p-2 border-b border-retro-gold flex justify-between items-center">
                   <h3 className="text-sm font-bold text-retro-gold font-mono uppercase">
                     01 // DATABASE_ACCESS
                   </h3>
                   {selectedScene && (
                      <div className="text-xs text-black bg-retro-gold px-2 font-mono">
                        SELECTED: {selectedScene.id.toUpperCase()}
                      </div>
                    )}
                </div>
                
                <div className="p-4 flex-1">
                  <SceneSelector 
                    selectedSceneId={selectedScene?.id || null} 
                    selectedRole={selectedRole}
                    onSceneSelect={(scene) => {
                      setSelectedScene(scene);
                      setSelectedRole(null); 
                      // Note: We keep roleImages state so users can switch scenes freely
                    }}
                    onRoleSelect={(role) => setSelectedRole(role)}
                  />
                </div>
              </section>
            </div>

            {/* STEP 2: Image Upload & Config (Bottom on Mobile, Right on Desktop) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
               {/* Upload Panel */}
              <section className="bg-black border border-retro-gold relative shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                {/* Header */}
                <div className="bg-retro-gold/10 p-2 border-b border-retro-gold flex justify-between items-center">
                   <h3 className="text-sm font-bold text-retro-gold font-mono uppercase">
                     02 // INPUT_SOURCE
                   </h3>
                   <div className="flex gap-1">
                     <div className="w-1 h-1 bg-retro-gold"></div>
                     <div className="w-1 h-1 bg-retro-gold"></div>
                     <div className="w-1 h-1 bg-retro-gold"></div>
                   </div>
                </div>

                <div className="p-4 relative space-y-4">
                  <div className="absolute top-0 right-0 p-1 text-[10px] text-retro-border">SECURE_CONNECTION</div>
                  
                  {/* Dynamic Upload Grid based on Scene Roles */}
                  {selectedScene && selectedScene.roles && selectedScene.roles.length > 0 ? (
                    <>
                      <div className="text-xs text-retro-teal mb-2 font-mono border-b border-retro-teal/30 pb-2">
                        [ MULTI-IDENTITY DETECTED ]<br/>
                        Upload faces for specific roles. Leave blank to use original actor.
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedScene.roles.map(role => (
                           <div key={role.id} className="flex flex-col">
                             <ImageUpload 
                               label={role.name.toUpperCase()} 
                               compact={true}
                               initialImage={roleImages[role.id]}
                               onImageSelected={(file) => handleImageUpload(file, role.id)} 
                             />
                           </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <ImageUpload 
                       label="FACE DATA"
                       initialImage={roleImages['default']} 
                       onImageSelected={(file) => handleImageUpload(file, 'default')} 
                    />
                  )}
                </div>
              </section>

              {/* Step 3: Format Panel */}
              <section className={`bg-black border border-retro-gold relative transition-opacity ${!hasUploadedImages ? 'opacity-50' : ''}`}>
                 <div className="bg-retro-gold/10 p-2 border-b border-retro-gold flex justify-between items-center">
                    <h3 className="text-sm font-bold text-retro-gold font-mono uppercase">
                      03 // OUTPUT_CONFIG
                    </h3>
                 </div>
                 
                  <div className="grid grid-cols-3 gap-0 p-4">
                    {(['9:16', '16:9', '1:1'] as AspectRatio[]).map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`
                          py-4 px-2 border text-xs font-bold font-mono transition-all flex flex-col items-center justify-center gap-2
                          ${aspectRatio === ratio 
                            ? 'bg-retro-gold text-black border-retro-gold' 
                            : 'bg-black text-retro-teal border-retro-border hover:border-retro-gold hover:text-retro-gold'}
                        `}
                      >
                        <span className="tracking-widest">{ratio}</span>
                      </button>
                    ))}
                  </div>
              </section>

              {/* Action Button - placed here for both Desktop and Mobile logic flow */}
               <div className="mt-4">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    w-full py-6 font-bold text-xl tracking-widest uppercase font-display transition-all duration-300
                    border-2 relative overflow-hidden group
                    ${isGenerateDisabled 
                      ? 'bg-black text-retro-border border-retro-border cursor-not-allowed' 
                      : 'bg-black text-retro-gold border-retro-gold hover:bg-retro-gold hover:text-black shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {getButtonText()}
                  </span>
                </button>
              </div>
            </div>
            
          </div>

          {/* Result Area */}
          {!showInputUI && (
             <div className="w-full">
               <ResultViewer 
                 imageUrl={generationState.result}
                 loading={generationState.loading}
                 error={generationState.error}
                 onReset={handleReset}
                 title={resultTitle}
               />
             </div>
          )}

        </div>
      </main>
      
    </div>
  );
};

export default App;