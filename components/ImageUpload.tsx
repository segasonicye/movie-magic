
import React, { useRef, useState } from 'react';

interface ImageUploadProps {
  onImageSelected: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmedPreview, setConfirmedPreview] = useState<string | null>(null);

  // Editor State
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string);
      setIsEditing(true);
      setScale(1);
      setOffset({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setOffset({ x: clientX - dragStart.x, y: clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const generateCrop = async () => {
    if (!imageRef.current || !containerRef.current || !imageSrc) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const outputSize = 1024; // High res
    canvas.width = outputSize;
    canvas.height = outputSize;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, outputSize, outputSize);

    const containerRect = containerRef.current.getBoundingClientRect();
    const pixelRatio = outputSize / containerRect.width;
    const img = imageRef.current;

    ctx.save();
    ctx.translate(outputSize / 2, outputSize / 2);
    ctx.translate(offset.x * pixelRatio, offset.y * pixelRatio);
    ctx.scale(scale, scale);
    
    // Draw based on the fitted size in container
    const drawWidth = outputSize;
    const drawHeight = (img.naturalHeight / img.naturalWidth) * drawWidth;
    
    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    ctx.restore();

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "crop.png", { type: "image/png" });
        onImageSelected(file);
        setConfirmedPreview(URL.createObjectURL(blob));
        setIsEditing(false);
      }
    }, 'image/png');
  };

  const handleReset = () => {
    setImageSrc(null);
    setConfirmedPreview(null);
    setIsEditing(false);
    onImageSelected(null);
  };

  // --- Render ---

  if (!imageSrc) {
    return (
      <div 
        className="relative group h-64 border border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all hover:border-cinema-gold hover:bg-white/5"
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input ref={inputRef} type="file" className="hidden" onChange={handleChange} accept="image/*" />
        
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:border-cinema-gold group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
          <span className="text-2xl text-gray-400 group-hover:text-cinema-gold">+</span>
        </div>
        <p className="text-sm font-tech font-bold text-gray-300 tracking-wider">INITIATE UPLOAD</p>
        <p className="text-xs text-gray-500 mt-1 font-mono">DRAG & DROP OR CLICK</p>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono text-cinema-gold">ADJUST TARGET</span>
          <button onClick={handleReset} className="text-[10px] text-gray-500 hover:text-white uppercase tracking-wider">Cancel</button>
        </div>
        
        <div 
          ref={containerRef}
          className="relative w-full aspect-square bg-black overflow-hidden rounded border border-gray-700 cursor-move"
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown} onTouchMove={handleMouseMove} onTouchEnd={handleMouseUp}
        >
          {/* HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 border border-white/10 m-2">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cinema-accent/30"></div>
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cinema-accent/30"></div>
            {/* Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cinema-accent"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cinema-accent"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cinema-accent"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cinema-accent"></div>
          </div>

          <img 
            ref={imageRef}
            src={imageSrc} 
            className="absolute max-w-none origin-center select-none opacity-80"
            style={{ width: '100%', transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
            draggable={false}
          />
        </div>

        <div className="mt-4 flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5">
           <span className="text-[10px] font-mono text-gray-500">ZOOM</span>
           <input 
             type="range" min="1" max="3" step="0.1" 
             value={scale} onChange={(e) => setScale(parseFloat(e.target.value))}
             className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cinema-gold"
           />
        </div>

        <button 
          onClick={generateCrop}
          className="mt-4 w-full py-3 bg-white/10 border border-white/10 text-white font-tech font-bold tracking-wider text-sm rounded hover:bg-white/20 hover:border-white/30 transition-all"
        >
          CONFIRM CROP
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
       <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-cinema-gold shadow-[0_0_20px_rgba(255,215,0,0.1)] group">
         <img src={confirmedPreview!} className="w-full h-full object-cover" />
         
         {/* Scanning Animation overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cinema-gold/10 to-transparent h-[10%] w-full animate-scan pointer-events-none"></div>

         <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
           <button onClick={() => setIsEditing(true)} className="px-5 py-2 bg-white text-black text-xs font-bold font-tech tracking-wider rounded-sm hover:scale-105 transition-transform">
             READJUST
           </button>
           <button onClick={handleReset} className="px-5 py-2 border border-white text-white text-xs font-bold font-tech tracking-wider rounded-sm hover:bg-white/10">
             NEW UPLOAD
           </button>
         </div>
       </div>
       <div className="mt-3 flex items-center justify-center gap-2 text-cinema-gold/80 text-xs font-mono">
          <span className="w-1.5 h-1.5 bg-cinema-gold rounded-full animate-pulse"></span>
          SUBJECT LOCKED
       </div>
    </div>
  );
};

export default ImageUpload;
