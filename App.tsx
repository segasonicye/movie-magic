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
          // Fallback for environments without the helper (dev mode etc), assume true or handle error later
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
        // Assume success to mitigate race condition
        setHasApiKey(true);
      }
    } catch (e) {
      console.error("Error selecting key:", e);
    }
  };

  const getPosterTitle = (scene: MovieScene | null): string | undefined => {
    if (!scene) return undefined;
    
    // For Chinese movies, extract the Chinese part (usually before the brackets)
    if (scene.useChineseTitle) {
       return scene.title.split('(')[0].trim();
    }

    // For Western movies, prefer English title inside brackets
    const match = scene.title.match(/\((.*?)\)/);
    if (match && match[1]) {
      return match[1];
    }
    
    // Fallback logic
    if (scene.title.includes(':')) {
        return scene.title.split(':')[1].trim();
    }
    return scene.title;
  };

  const handleGenerate = async () => {
    if (!userImage) return;
    
    let promptToUse = '';
    let titleToUse = '';
    let metadata = { title: '', year: '', category: '', styleKeywords: '', useChineseTitle: false, roleName: '' };

    if (selectedScene) {
      // Use Role Prompt if a role is selected, otherwise fallback to scene prompt
      promptToUse = selectedRole ? selectedRole.prompt : selectedScene.prompt;
      
      titleToUse = getPosterTitle(selectedScene) || selectedScene.title;
      
      metadata = {
        title: titleToUse,
        year: selectedScene.year,
        category: selectedScene.category,
        styleKeywords: selectedScene.styleKeywords || '',
        useChineseTitle: selectedScene.useChineseTitle || false,
        roleName: selectedRole ? selectedRole.name : ''
      };
    } else {
      alert("请选择一个电影场景");
      return;
    }

    setGenerationState({ loading: true, result: null, error: null });

    try {
      // Re-instantiate AI client inside service to pick up key
      const generatedImageUrl = await generateMovieSceneImage(userImage, promptToUse, aspectRatio, metadata);
      setGenerationState({ loading: false, result: generatedImageUrl, error: null });
    } catch (err: any) {
      console.error(err);
      
      // Handle "Requested entity was not found" which often implies invalid/missing key for Pro models
      if (err.message && err.message.includes("Requested entity was not found")) {
        setHasApiKey(false); // Reset UI to force re-selection
        setGenerationState({ 
          loading: false, 
          result: null, 
          error: "API Key 似乎无效或未选择正确的项目。请重新选择。" 
        });
      } else {
        setGenerationState({ 
          loading: false, 
          result: null, 
          error: err.message || "Something went wrong during generation." 
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

  const getButtonText = () => {
    if (!userImage) return "UPLOAD PHOTO FIRST (请先上传照片)";
    if (!selectedScene) return "SELECT A SCENE (请选择剧本)";
    if (hasRoles && !selectedRole) return "SELECT A ROLE (请选择角色)";
    return "GENERATE VISUAL (生成海报)";
  };

  // --- API Key Selection Screen ---
  if (!hasApiKey) {
    return (
      <div className="min-h-screen bg-cinema-900 text-white font-sans flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-cinema-800 rounded-2xl border border-cinema-700 p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-cinema-gold text-black rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            ✨
          </div>
          <h1 className="text-3xl font-bold mb-4">开启高清电影魔法</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            为了生成 2K 高清海报并确保人物的高度还原，我们需要使用 Gemini Pro 高级模型。
            <br/><br/>
            请连接您的 Google Cloud 项目 API Key (需启用 Billing)。
          </p>
          <button 
            onClick={handleSelectKey}
            className="w-full py-4 bg-cinema-gold text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            连接 API Key 并开始
          </button>
          <p className="mt-6 text-xs text-gray-600">
            了解更多关于 <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline hover:text-gray-400">Gemini API Billing</a>
          </p>
        </div>
      </div>
    );
  }

  // --- Main App ---
  return (
    <div className="min-h-screen bg-cinema-900 text-white font-sans selection:bg-cinema-gold selection:text-black pb-20">
      
      {/* Intro Section with Scrolling Background */}
      <div className={`relative w-full h-80 overflow-hidden mb-8 ${showInputUI ? '' : 'hidden'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-900 via-transparent to-cinema-900 z-10"></div>
        <div className="absolute inset-0 z-0 opacity-30 animate-marquee whitespace-nowrap flex gap-4 items-center">
            {/* Using a few images for the marquee effect */}
             {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
                <img src="https://images.unsplash.com/photo-1517604931442-71053e3e2642?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
                <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
                <img src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=400&h=600&fit=crop" className="h-80 w-auto object-cover grayscale opacity-50" />
              </div>
            ))}
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] mb-2 font-[Rajdhani]">
              MOVIE MAGIC <span className="text-cinema-gold">AI</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-widest uppercase">
              Star in your own cinematic masterpiece
            </p>
        </div>
      </div>

      <header className="border-b border-cinema-800 bg-cinema-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-cinema-gold tracking-widest">REC ● LIVE</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-500 font-mono border border-cinema-800 px-2 py-1 rounded bg-cinema-900/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            SYSTEM: GEMINI 3 PRO PREVIEW (2K)
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-8">
        {/* Workflow container */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className={showInputUI ? 'contents' : 'hidden'}>
            
            {/* Left Column: Upload & Settings */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 order-2 lg:order-1">
               {/* Step 1: Upload */}
              <section className="bg-black/40 backdrop-blur-sm p-1 rounded-2xl border border-cinema-700/50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cinema-700 rounded-tl-2xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cinema-700 rounded-br-2xl opacity-50"></div>
                
                <div className="p-5">
                   <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-[Rajdhani] font-bold text-cinema-gold/20 absolute -top-2 right-4">01</span>
                    <h3 className="text-lg font-bold text-white font-[Rajdhani] tracking-wide uppercase">Source Subject</h3>
                  </div>
                  <ImageUpload onImageSelected={setUserImage} />
                  {userImage && (
                    <div className="mt-3 flex items-center gap-2 text-green-400 text-xs bg-green-900/20 p-2 rounded border border-green-900/50">
                      <span className="animate-pulse">●</span> SCAN COMPLETE: {userImage.name.substring(0, 15)}...
                    </div>
                  )}
                </div>
              </section>

              {/* Step 3: Format */}
              <section className={`bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-cinema-700/50 transition-all relative ${!userImage ? 'opacity-50 grayscale' : ''}`}>
                 <span className="text-4xl font-[Rajdhani] font-bold text-cinema-gold/20 absolute -top-2 right-4">03</span>
                 <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-white font-[Rajdhani] tracking-wide uppercase">Output Ratio</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(['9:16', '16:9', '1:1'] as AspectRatio[]).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`
                        py-3 px-2 rounded-lg border text-xs font-medium transition-all flex flex-col items-center justify-center gap-2 group
                        ${aspectRatio === ratio 
                          ? 'bg-cinema-gold/10 text-cinema-gold border-cinema-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                          : 'bg-cinema-900/50 text-gray-500 border-cinema-800 hover:border-gray-600 hover:text-gray-300'}
                      `}
                    >
                      <div className={`border border-current transition-all duration-300 ${
                        ratio === '9:16' ? 'w-3 h-5' : 
                        ratio === '16:9' ? 'w-5 h-3' : 'w-4 h-4'
                      } ${aspectRatio === ratio ? 'shadow-[0_0_8px_currentColor]' : ''}`}></div>
                      <span className="font-[Rajdhani]">{ratio}</span>
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
                    w-full py-4 rounded-xl font-bold text-lg tracking-widest uppercase font-[Rajdhani] transition-all duration-300
                    border border-transparent
                    ${isGenerateDisabled 
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed border-gray-700' 
                      : 'bg-cinema-gold text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 border-cinema-gold'
                    }
                  `}
                >
                  {getButtonText()}
                </button>
              </div>
            </div>

            {/* Right Column: Scene Selection */}
            <div className={`w-full lg:w-2/3 order-1 lg:order-2 transition-all`}>
               <section className="bg-black/20 backdrop-blur-sm rounded-2xl border border-cinema-700/30 p-1 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cinema-gold/5 blur-[60px] rounded-full pointer-events-none"></div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <span className="text-4xl font-[Rajdhani] font-bold text-cinema-gold/20">02</span>
                       <h3 className="text-lg sm:text-xl font-bold text-white font-[Rajdhani] tracking-wide uppercase">
                         Select Scenario
                       </h3>
                    </div>
                    {selectedScene && (
                      <div className="text-xs text-cinema-gold border border-cinema-gold/30 px-2 py-1 rounded bg-cinema-gold/5 font-mono">
                        ID: {selectedScene.id.toUpperCase()}
                      </div>
                    )}
                  </div>
                  
                  <SceneSelector 
                    selectedSceneId={selectedScene?.id || null} 
                    selectedRole={selectedRole}
                    onSceneSelect={(scene) => {
                      setSelectedScene(scene);
                      setSelectedRole(null); // Reset role when scene changes
                    }}
                    onRoleSelect={(role) => setSelectedRole(role)}
                  />
                </div>
              </section>

               {/* Action Button - Desktop */}
               <div className="hidden lg:flex justify-end mt-8">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    group relative px-12 py-5 rounded-xl font-bold text-xl tracking-widest uppercase font-[Rajdhani] transition-all duration-300 overflow-hidden
                    ${isGenerateDisabled 
                      ? 'bg-gray-900 text-gray-600 cursor-not-allowed border border-gray-800' 
                      : 'bg-cinema-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {getButtonText()}
                    {!isGenerateDisabled && <span className="group-hover:translate-x-1 transition-transform">►</span>}
                  </span>
                  {!isGenerateDisabled && (
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                  )}
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
               />
             </div>
          )}

        </div>
      </main>
      
      {/* Background Tech Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 bg-gradient-to-b from-cinema-900 to-black"></div>

    </div>
  );
};

export default App;