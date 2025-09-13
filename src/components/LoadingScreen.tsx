import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate app loading time - adjust as needed
    const loadingTimer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, [onLoadingComplete]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#2870de' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover"
          style={{ 
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover'
          }}
        >
          <source src="/FaithFlow intro video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Loading indicator overlay */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* FaithFlow Logo/Branding overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold mb-2">FaithFlow</h1>
            <p className="text-sm opacity-90">Your journey through faith begins here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

