import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Navigation from './Navigation';
import LoadingScreen from './LoadingScreen';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar, isLoading, setIsLoading } = useAppContext();
  const isMobile = useIsMobile();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen w-full">
      <Navigation />
    </div>
  );
};

export default AppLayout;
