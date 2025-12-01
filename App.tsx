import React, { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import SceneSelector from './components/SceneSelector';
import ResultViewer from './components/ResultViewer';
import { generateMovieSceneImage } from './services/geminiService';
import { MovieScene, MovieRole, AspectRatio } from './types';
import { MOVIE_SCENES } from './constants';

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

  // Reset Role when Scene changes
  useEffect(() => {
    if (selectedScene?.roles && selectedScene.roles.length > 0) {
      setSelectedRole(selectedScene.roles[0]);
    } else {
      setSelectedRole(null);
    }
  }, [selectedScene]);

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
    let metadata = { title: '', year: '', category: '', styleKeywords: '', useChineseTitle: false, roleName: '' };

    if (selectedScene) {
      promptToUse = selectedRole ? selectedRole.prompt : selectedScene.prompt;
      titleToUse = getPosterTitle(selectedScene) || selectedScene.title;
      metadata = {
        title: titleToUse,
        year: selectedScene.year,
        category: selectedScene.category,
        styleKeywords: selectedScene.styleKeywords || '',
        useChineseTitle: selectedScene.useChineseTitle,
        roleName: selectedRole ? selectedRole.name : ''
      };
    } else {
      alert("请选择一个电影场景");
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

  const isGenerateDisabled = !userImage || !selectedScene;
  const showInputUI = !generationState.loading && !generationState.result;

  // Filter images for marquee
  const marqueeImages = MOVIE_SCENES
    .filter(s => s.previewImage)
    .map(s => s.previewImage!)
    .slice(0, 20); // Limit to top 20 for performance

  if (!hasApiKey) {
    return (
      <div className="min-h-screen bg-cinema-950 text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Marquee for Login Screen */}
         <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-col gap-4 -rotate-6 scale-110">
            <div className="flex gap-4 animate-scroll w-max">
              {[...marqueeImages, ...marqueeImages].map((src, i) => (
                <img key={i} src={src} className="h-64 w-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" alt="" />
              ))}
            </div>
             <div className="flex gap-4 animate-scroll-reverse w-max">
              {[...marqueeImages, ...marqueeImages].map((src, i) => (
                <img key={i} src={src} className="h-64 w-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" alt="" />
              ))}
            </div>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/80 to-transparent pointer-events-none"></div>

        <div className="glass-panel p-10 rounded-3xl max-w-lg text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-cinema-gold/20 relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-cinema-gold to-yellow-700 text-black rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg shadow-yellow-900/40">
            ✨
          </div>
          <h1 className="text-4xl font-tech font-bold mb-4 tracking-wide text-white">MOVIE MAGIC AI</h1>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            开启 2K 高清电影海报生成体验。
            <br/>需要连接 Google Gemini API。
          </p>
          <button 
            onClick={handleSelectKey}
            className="w-full py-4 bg-cinema-gold text-black font-bold font-tech text-xl rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-lg shadow-cinema-gold/20"
          >
            CONNECT API KEY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-cinema-accent selection:text-black pb-20 overflow-x-hidden">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-cinema-gold to-yellow-600 flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform">M</div>
            <h1 className="text-xl font-tech font-bold tracking-wider text-white">
              MOVIE<span className="text-cinema-gold">MAGIC</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-cinema-accent/30 bg-cinema-accent/5">
                <div className="w-1.5 h-1.5 rounded-full bg-cinema-accent animate-pulse"></div>
                <span className="text-[10px] font-tech tracking-widest text-cinema-accent">SYSTEM ONLINE</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-28 relative">
        
        {/* Intro Section with Dynamic Poster Mix */}
        <div className={`text-center mb-12 transition-all duration-500 relative py-12 ${showInputUI ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 hidden'}`}>
          
          {/* Marquee Background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl mask-gradient opacity-30 select-none pointer-events-none">
             <div className="absolute inset-0 bg-gradient-to-r from-cinema-950 via-transparent to-cinema-950 z-10"></div>
             
             {/* Row 1 */}
             <div className="flex gap-6 animate-scroll w-max mb-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                {[...marqueeImages, ...marqueeImages].map((src, i) => (
                  <img key={`r1-${i}`} src={src} className="h-40 w-28 object-cover rounded shadow-lg" alt="" />
                ))}
             </div>
             {/* Row 2 */}
             <div className="flex gap-6 animate-scroll-reverse w-max opacity-40 grayscale hover:grayscale-0 transition-all">
                {[...marqueeImages, ...marqueeImages].reverse().map((src, i) => (
                  <img key={`r2-${i}`} src={src} className="h-40 w-28 object-cover rounded shadow-lg" alt="" />
                ))}
             </div>
          </div>

          <div className="relative z-20">
            <h2 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight drop-shadow-2xl">
              BE THE PROTAGONIST
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-white/5 inline-block">
              AI-Powered Cinematic Composition Engine
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative z-30">
          
          <div className={`contents ${showInputUI ? '' : 'hidden'}`}>
            
            {/* Left Sidebar: Controls */}
            <div className="w-full lg:w-[360px] flex flex-col gap-6 order-2 lg:order-1 shrink-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
               
              {/* Step 1: Upload */}
              <section className="glass-panel p-6 rounded-2xl tech-border group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-tech font-bold text-gray-200">SOURCE DATA</h3>
                  <span className="text-xs font-mono text-cinema-gold/70 border border-cinema-gold/30 px-1.5 rounded">STEP 01</span>
                </div>
                <ImageUpload onImageSelected={setUserImage} />
              </section>

              {/* Step 3: Aspect Ratio */}
              <section className={`glass-panel p-6 rounded-2xl tech-border transition-all duration-500 ${!userImage ? 'opacity-40 grayscale' : 'opacity-100'}`}>
                 <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-tech font-bold text-gray-200">OUTPUT FORMAT</h3>
                  <span className="text-xs font-mono text-cinema-gold/70 border border-cinema-gold/30 px-1.5 rounded">STEP 03</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['9:16', '16:9', '1:1'] as AspectRatio[]).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`
                        py-3 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-2 border
                        ${aspectRatio === ratio 
                          ? 'bg-cinema-gold text-black border-cinema-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                          : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20'}
                      `}
                    >
                      <div className={`border-2 border-current rounded-[2px] opacity-80 ${
                        ratio === '9:16' ? 'w-3 h-5' : 
                        ratio === '16:9' ? 'w-5 h-3' : 'w-4 h-4'
                      }`}></div>
                      <span className="font-tech tracking-wider">{ratio}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Mobile CTA */}
              <div className="lg:hidden sticky bottom-4 z-40">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    w-full py-4 rounded-xl font-tech font-bold text-xl tracking-widest transition-all duration-300 shadow-xl
                    ${isGenerateDisabled 
                      ? 'bg-gray-800 text-gray-600 border border-gray-700 cursor-not-allowed' 
                      : 'bg-cinema-gold text-black border border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-[1.02] active:scale-95'
                    }
                  `}
                >
                  INITIALIZE RENDER
                </button>
              </div>
            </div>

            {/* Right Column: Scene Browser */}
            <div className={`w-full lg:flex-1 order-1 lg:order-2 animate-slide-up ${!userImage ? 'lg:opacity-50 lg:pointer-events-none transition-opacity duration-500' : ''}`} style={{animationDelay: '0.2s'}}>
               <section className="glass-panel p-1 rounded-2xl tech-border h-full">
                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-tech font-bold text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cinema-gold"></span>
                    SCENARIO DATABASE
                  </h3>
                  <span className="text-xs font-mono text-cinema-gold/70 border border-cinema-gold/30 px-1.5 rounded">STEP 02</span>
                </div>
                
                <div className="p-5">
                  <SceneSelector 
                    selectedSceneId={selectedScene?.id || null} 
                    onSceneSelect={(scene) => setSelectedScene(scene)}
                    selectedRole={selectedRole}
                    onRoleSelect={(role) => setSelectedRole(role)}
                  />
                </div>
              </section>

               {/* Desktop CTA */}
               <div className="hidden lg:flex justify-end mt-6">
                 <button
                  onClick={handleGenerate}
                  disabled={isGenerateDisabled}
                  className={`
                    px-10 py-4 rounded-xl font-tech font-bold text-xl tracking-widest transition-all duration-300
                    ${isGenerateDisabled 
                      ? 'bg-white/5 text-gray-600 border border-white/5 cursor-not-allowed' 
                      : 'bg-cinema-gold text-black hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:scale-95 shadow-lg shadow-cinema-gold/20'
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    GENERATE VISUAL
                    {!isGenerateDisabled && <span className="text-xl">↗</span>}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Result View */}
          {!showInputUI && (
             <div className="w-full flex justify-center animate-fade-in">
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
    </div>
  );
};

export default App;