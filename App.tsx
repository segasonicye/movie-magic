import React, { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import SceneSelector from './components/SceneSelector';
import ResultViewer from './components/ResultViewer';
import { generateMovieSceneImage } from './services/geminiService';
import { MovieScene, MovieRole, AspectRatio } from './types';

const App: React.FC = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  const [userImage, setUserImage] = useState<File | null>(null);
  const [selectedScene, setSelectedScene] = useState<MovieScene | null>(null);
  const [selectedRole, setSelectedRole] = useState<MovieRole | null>(null);
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

  const handleGenerate = async () => {
    if (!userImage) return;
    
    let promptToUse = '';
    let titleToUse = '';
    let metadata = { title: '', year: '', category: '', styleKeywords: '', useChineseTitle: false, roleName: '', posterFont: '' };

    if (selectedScene) {
      promptToUse = selectedRole ? selectedRole.prompt : selectedScene.prompt;
      titleToUse = getPosterTitle(selectedScene) || selectedScene.title;
      metadata = {
        title: titleToUse,
        year: selectedScene.year,
        category: selectedScene.category,
        styleKeywords: selectedScene.styleKeywords || '',
        useChineseTitle: selectedScene.useChineseTitle || false,
        roleName: selectedRole ? selectedRole.name : '',
        posterFont: selectedScene.posterFont || ''
      };
    } else {
      alert("SELECT TARGET SCENE REQUIRED");
      return;
    }

    setGenerationState({ loading: true, result: null, error: null });

    try {
      const generatedImageUrl = await generateMovieSceneImage(userImage, promptToUse, aspectRatio, metadata);
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
  const isGenerateDisabled = !userImage || !selectedScene || (hasRoles && !selectedRole);
  const showInputUI = !generationState.loading && !generationState.result;
  const resultTitle = getPosterTitle(selectedScene);

  const getButtonText = () => {
    if (!userImage) return "[ WAITING FOR BIOMETRIC DATA ]";
    if (!selectedScene) return "[ SELECT TARGET SIMULATION ]";
    if (hasRoles && !selectedRole) return "[ SELECT IDENTITY ]";
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
            
            {/* Left Column - Image Upload & Ratio - ORDER-1 on Mobile to be TOP */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 order-1">
               {/* Step 1: Upload Panel */}
              <section className="bg-black border border-retro-gold relative shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                {/* Header */}
                <div className="bg-retro-gold/10 p-2 border-b border-retro-gold flex justify-between items-center">
                   <h3 className="text-sm font-bold text-retro-gold font-mono uppercase">
                     01 // INPUT_SOURCE
                   </h3>
                   <div className="flex gap-1">
                     <div className="w-1 h-1 bg-retro-gold"></div>
                     <div className="w-1 h-1 bg-retro-gold"></div>
                     <div className="w-1 h-1 bg-retro-gold"></div>
                   </div>
                </div>

                <div className="p-4 relative">
                  <div className="absolute top-0 right-0 p-1 text-[10px] text-retro-border">SECURE_CONNECTION</div>
                  <ImageUpload onImageSelected={setUserImage} />
                </div>
              </section>

              {/* Step 3: Format Panel */}
              <section className={`bg-black border border-retro-gold relative transition-opacity ${!userImage ? 'opacity-50' : ''}`}>
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

              {/* Action Button - Mobile */}
              <div className="lg:hidden mt-4">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    w-full py-4 font-bold text-lg tracking-widest uppercase font-display transition-all duration-300
                    border
                    ${isGenerateDisabled 
                      ? 'bg-black text-retro-border border-retro-border cursor-not-allowed' 
                      : 'bg-retro-gold text-black hover:bg-white hover:border-white border-retro-gold shadow-[0_0_15px_rgba(0,255,65,0.5)]'
                    }
                  `}
                >
                  {getButtonText()}
                </button>
              </div>
            </div>

            {/* Right Column: Scene Selection - ORDER-2 on Mobile */}
            <div className={`w-full lg:w-2/3 order-2`}>
               <section className="bg-black border border-retro-gold h-full flex flex-col">
                <div className="bg-retro-gold/10 p-2 border-b border-retro-gold flex justify-between items-center">
                   <h3 className="text-sm font-bold text-retro-gold font-mono uppercase">
                     02 // DATABASE_ACCESS
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
                    }}
                    onRoleSelect={(role) => setSelectedRole(role)}
                  />
                </div>
              </section>

               {/* Action Button - Desktop */}
               <div className="hidden lg:flex justify-end mt-6">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    px-12 py-6 font-bold text-xl tracking-widest uppercase font-display transition-all duration-300
                    border-2 relative overflow-hidden group
                    ${isGenerateDisabled 
                      ? 'bg-black text-retro-border border-retro-border cursor-not-allowed' 
                      : 'bg-black text-retro-gold border-retro-gold hover:bg-retro-gold hover:text-black shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
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