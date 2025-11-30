import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackType?: 'building' | 'people' | 'tech';
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackType,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);

  // Normalize path: ensure local paths start with / to prevent relative path issues in sub-routes
  // e.g. "images/hero.jpg" becomes "/images/hero.jpg"
  const normalizedSrc = src && !src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:') 
    ? `/${src}` 
    : src;

  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
  }, [normalizedSrc]);

  // If no source is provided, or if the image failed to load, show the placeholder
  if (!normalizedSrc || hasError) {
    return (
      <div
        className={`bg-neutral-200 border-2 border-dashed border-neutral-400 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative ${className || ''}`}
        style={{ minHeight: '100%', minWidth: '100%', ...props.style }}
        role="img"
        aria-label={alt || "Image placeholder"}
        onClick={props.onClick}
      >
        <div className="bg-white/95 p-3 rounded-md shadow-md border border-neutral-300 max-w-full backdrop-blur-sm z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest border border-red-500 px-1 rounded-[3px]">Missing Image</span>
            <p className="font-mono text-sm text-gray-900 font-bold break-all select-all leading-tight my-1">
              {normalizedSrc || 'No source'}
            </p>
            <p className="font-sans text-[10px] text-gray-500 italic">
              Ensure file is at <span className="font-mono text-gray-700 font-medium">/{src}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={normalizedSrc} 
      alt={alt} 
      className={className}
      onError={(e) => {
        console.warn(`Failed to load image: ${normalizedSrc}`);
        setHasError(true);
      }}
      loading="lazy"
      {...props}
    />
  );
};

export default SafeImage;