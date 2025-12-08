import React, { useRef, useState, useEffect } from 'react';

interface ImageUploadProps {
  onImageSelected: (file: File | null) => void;
  label?: string; // Label for the character name (e.g. "UPLOAD JACK")
  compact?: boolean; // Smaller layout for multi-upload
  initialImage?: File | null; // For maintaining state
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected, label = "Face Data", compact = false, initialImage }) => {
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

  // Sync with external initialImage if provided (e.g. when switching scenes but keeping data)
  useEffect(() => {
    if (initialImage) {
        // Logic to restore preview would go here, simplified for now to just allow re-upload
        // Ideally we keep the preview URL in parent or regenerate it
    }
  }, [initialImage]);

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

  // Editor Interaction
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    if ('touches' in e) e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setOffset({ x: clientX - dragStart.x, y: clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const generateCrop = async () => {
    if (!imageRef.current || !containerRef.current || !imageSrc) return;
    const canvas = document.createElement('canvas');
    const outputSize = 1024;
    canvas.width = outputSize;
    canvas.height = outputSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, outputSize, outputSize);

    const containerRect = containerRef.current.getBoundingClientRect();
    const pixelRatio = outputSize / containerRect.width;

    ctx.save();
    ctx.translate(outputSize / 2, outputSize / 2);
    ctx.translate(offset.x * pixelRatio, offset.y * pixelRatio);
    ctx.scale(scale, scale);
    const img = imageRef.current;
    const drawWidth = outputSize;
    const drawHeight = (img.naturalHeight / img.naturalWidth) * drawWidth;
    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    ctx.restore();

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "cropped_scan.png", { type: "image/png" });
        onImageSelected(file);
        setConfirmedPreview(URL.createObjectURL(blob));
        setIsEditing(false);
      }
    }, 'image/png', 0.95);
  };

  const handleReset = () => {
    setImageSrc(null);
    setConfirmedPreview(null);
    setIsEditing(false);
    onImageSelected(null);
  };

  // --- Render ---
  const heightClass = compact ? 'h-32' : 'h-64';

  if (!imageSrc) {
    return (
      <div 
        className={`relative ${heightClass} border border-dashed border-retro-border bg-black hover:bg-retro-panel hover:border-retro-gold transition-colors cursor-pointer group flex flex-col items-center justify-center overflow-hidden`}
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input ref={inputRef} type="file" className="hidden" onChange={handleChange} accept="image/*" />
        
        {/* Scanning Animation */}
        <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-retro-gold animate-scan opacity-0 group-hover:opacity-100"></div>

        <div className="text-center relative z-10 p-2">
          {!compact && (
            <div className="w-12 h-12 border border-retro-gold rounded-full flex items-center justify-center mx-auto mb-4 text-retro-gold group-hover:bg-retro-gold group-hover:text-black transition-colors">
              +
            </div>
          )}
          <p className="text-retro-gold font-mono text-sm tracking-widest uppercase mb-1">{label}</p>
          <p className="text-retro-border text-[10px] font-mono">DRAG & DROP or CLICK</p>
        </div>
        
        {/* Corner Markers */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-retro-gold"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-retro-gold"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-retro-gold"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-retro-gold"></div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="w-full animate-fade-in bg-black border border-retro-gold p-2">
        <div className="flex justify-between items-center mb-2">
           <span className="text-retro-gold text-xs font-mono">CALIBRATE: {label}</span>
           <button onClick={handleReset} className="text-retro-red text-xs hover:underline">[ CANCEL ]</button>
        </div>
        
        <div 
          ref={containerRef}
          className="relative w-full aspect-square bg-black border border-retro-gold cursor-move overflow-hidden touch-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Target Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 border border-retro-gold/20">
             <div className="absolute top-1/2 left-0 w-full h-px bg-retro-gold/50"></div>
             <div className="absolute top-0 left-1/2 w-px h-full bg-retro-gold/50"></div>
             <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-retro-gold/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <img 
            ref={imageRef}
            src={imageSrc} 
            className="absolute max-w-none select-none grayscale contrast-125"
            style={{
              width: '100%',
              top: '50%',
              left: '50%',
              transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`,
            }}
            draggable={false}
          />
        </div>

        <div className="mt-4 flex items-center gap-2">
           <span className="text-xs text-retro-teal font-mono">ZOOM:</span>
           <input 
             type="range" min="1" max="3" step="0.05" 
             value={scale}
             onChange={(e) => setScale(parseFloat(e.target.value))}
             className="w-full h-1 bg-retro-border appearance-none cursor-pointer accent-retro-gold"
           />
        </div>

        <button 
          onClick={generateCrop}
          className="mt-4 w-full py-2 bg-retro-gold text-black font-bold font-mono text-xs hover:bg-white"
        >
          [ CONFIRM ]
        </button>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-in">
       <div className="relative w-full aspect-square border border-retro-gold bg-black group overflow-hidden">
         <img src={confirmedPreview!} className="w-full h-full object-contain grayscale" />
         <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
           <button onClick={() => setIsEditing(true)} className="px-4 py-1 border border-retro-gold text-retro-gold text-xs font-mono hover:bg-retro-gold hover:text-black">
             RE-CALIBRATE
           </button>
           <button onClick={handleReset} className="px-4 py-1 border border-retro-red text-retro-red text-xs font-mono hover:bg-retro-red hover:text-black">
             PURGE
           </button>
         </div>
         {/* Corner Brackets */}
         <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-retro-gold"></div>
         <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-retro-gold"></div>
         <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-retro-gold"></div>
         <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-retro-gold"></div>
       </div>
       <div className="mt-1 text-center text-retro-gold text-[10px] font-mono bg-retro-gold/10 py-1 uppercase truncate">
         {label}: LOCKED
       </div>
    </div>
  );
};

export default ImageUpload;