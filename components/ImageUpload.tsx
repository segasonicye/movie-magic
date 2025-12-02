import React, { useRef, useState, useEffect } from 'react';

interface ImageUploadProps {
  onImageSelected: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  // State
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmedPreview, setConfirmedPreview] = useState<string | null>(null);

  // Editor State
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- File Handling ---

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("请上传图片文件");
      return;
    }
    
    setOriginalFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string);
      setIsEditing(true);
      // Reset editor
      setScale(1);
      setOffset({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // --- Editor Interaction (Pan & Zoom) ---

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    // We don't preventDefault for mouse, but we do for touch to prevent scrolling
    if ('touches' in e) {
      // e.preventDefault(); // Handled by CSS touch-action: none usually, but safe to keep
    }
    
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling on touch
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    setOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // --- Cropping Logic ---

  const generateCrop = async () => {
    if (!imageRef.current || !containerRef.current || !imageSrc) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use high resolution for output
    const outputSize = 1024; 
    canvas.width = outputSize;
    canvas.height = outputSize;

    // Fill background (black) to avoid transparency issues
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, outputSize, outputSize);

    // Calculate Ratios
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerW = containerRect.width;
    
    // The visual scale factor between the DOM container and our Canvas
    const pixelRatio = outputSize / containerW;

    ctx.save();
    
    // 1. Move Origin to Center of Canvas
    ctx.translate(outputSize / 2, outputSize / 2);
    
    // 2. Apply User Offset (scaled)
    ctx.translate(offset.x * pixelRatio, offset.y * pixelRatio);
    
    // 3. Apply Scale
    ctx.scale(scale, scale);

    // 4. Draw Image Centered
    const img = imageRef.current;
    
    // The image's visual width in DOM is '100%' of container => containerW
    // So on canvas, its width should be containerW * pixelRatio => outputSize.
    const drawWidth = outputSize;
    const drawHeight = (img.naturalHeight / img.naturalWidth) * drawWidth;
    
    // Draw centered at the current origin
    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    
    ctx.restore();

    // Convert to Blob/File
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "cropped_image.png", { type: "image/png" });
        onImageSelected(file);
        
        // Create preview URL
        setConfirmedPreview(URL.createObjectURL(blob));
        setIsEditing(false);
      }
    }, 'image/png', 0.95);
  };

  const handleReset = () => {
    setImageSrc(null);
    setOriginalFile(null);
    setConfirmedPreview(null);
    setIsEditing(false);
    onImageSelected(null);
  };

  // --- Render ---

  // 1. Upload State
  if (!imageSrc) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div 
          className={`relative h-64 md:h-80 flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer overflow-hidden bg-cinema-800/50 border-gray-600 hover:border-cinema-gold hover:bg-cinema-800`}
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input 
            ref={inputRef}
            type="file" 
            className="hidden" 
            onChange={handleChange}
            accept="image/*"
          />
          <div className="text-center p-6">
            <div className="w-16 h-16 mb-4 mx-auto rounded-full bg-cinema-700 flex items-center justify-center">
              <span className="text-3xl text-gray-300">+</span>
            </div>
            <p className="text-lg font-medium text-white mb-2">点击或拖拽上传照片</p>
            <p className="text-sm text-gray-400">支持 JPG, PNG (请确保五官清晰)</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Edit/Crop State
  if (isEditing) {
    return (
      <div className="w-full max-w-md mx-auto animate-fade-in">
        <h4 className="text-white text-sm mb-2 font-medium flex justify-between">
          <span>调整照片位置与大小</span>
          <button onClick={handleReset} className="text-gray-400 hover:text-white text-xs underline">取消</button>
        </h4>
        
        {/* Editor Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-square bg-black overflow-hidden rounded-lg cursor-move border border-cinema-700 touch-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          style={{ touchAction: 'none' }} // Crucial for preventing scrolling while dragging
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
            <div className="w-full h-1/3 border-b border-white/50 absolute top-0"></div>
            <div className="w-full h-1/3 border-b border-white/50 absolute bottom-0"></div>
            <div className="h-full w-1/3 border-r border-white/50 absolute left-0"></div>
            <div className="h-full w-1/3 border-r border-white/50 absolute right-0"></div>
          </div>

          <img 
            ref={imageRef}
            src={imageSrc} 
            alt="To Crop"
            className="absolute max-w-none select-none"
            style={{
              width: '100%', // Visual width is 100% of container
              // Center the image first using top/left 50% and translate(-50%, -50%)
              top: '50%',
              left: '50%',
              // Combine centering with user offset and scale
              // Note: The order of CSS transforms matches our Canvas logic conceptually
              transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`,
            }}
            draggable={false}
          />
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center gap-4">
           <span className="text-xs text-gray-400">缩放</span>
           <input 
             type="range" 
             min="1" 
             max="3" 
             step="0.05" 
             value={scale}
             onChange={(e) => setScale(parseFloat(e.target.value))}
             className="w-full h-1 bg-cinema-700 rounded-lg appearance-none cursor-pointer accent-cinema-gold"
           />
        </div>

        <button 
          onClick={generateCrop}
          className="mt-6 w-full py-3 bg-cinema-gold text-black font-bold rounded hover:bg-yellow-500 transition-colors shadow-lg shadow-cinema-gold/20"
        >
          确认裁剪 (OK)
        </button>
      </div>
    );
  }

  // 3. Preview State (Confirmed)
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
       <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-cinema-gold shadow-lg shadow-cinema-gold/10 group bg-black">
         <img src={confirmedPreview!} alt="Confirmed" className="w-full h-full object-contain" />
         
         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
           <button 
             onClick={() => {
               setIsEditing(true);
             }}
             className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200"
           >
             重新调整
           </button>
           <button 
             onClick={handleReset}
             className="px-5 py-2 bg-transparent border border-white text-white text-sm font-bold rounded-full hover:bg-white/10"
           >
             更换照片
           </button>
         </div>
       </div>
       <p className="text-center mt-3 text-green-400 text-sm flex items-center justify-center gap-1 font-medium">
          <span className="bg-green-500/20 text-green-400 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span> 
          照片已就绪
       </p>
    </div>
  );
};

export default ImageUpload;