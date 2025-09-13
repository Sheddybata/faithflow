import React, { useState, Suspense, lazy } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Lazy load components for better performance
const HomeScreen = lazy(() => import('./HomeScreen'));
const ReadingScreen = lazy(() => import('./ReadingScreen'));
const JournalScreen = lazy(() => import('./JournalScreen'));
const ProfileScreen = lazy(() => import('./ProfileScreen'));
const LeaderboardScreen = lazy(() => import('./LeaderboardScreen'));
const CommunityScreen = lazy(() => import('./CommunityScreen'));
const AuthScreen = lazy(() => import('./AuthScreen'));
const OnboardingScreen = lazy(() => import('./OnboardingScreen'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-faith-primary"></div>
  </div>
);

type ScreenType = 'home' | 'reading-journal' | 'leaderboard' | 'community' | 'profile';

const Navigation: React.FC = () => {
  const { user, isAuthenticated, theme, toggleTheme } = useAppContext();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [showProfile, setShowProfile] = useState(false);

  // If not authenticated, show auth screen
  if (!isAuthenticated) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AuthScreen />
      </Suspense>
    );
  }

  // If user hasn't selected a reading plan, show onboarding
  if (user && !user.hasSelectedPlan) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <OnboardingScreen />
      </Suspense>
    );
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomeScreen />
          </Suspense>
        );
      case 'reading-journal':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <JournalScreen />
          </Suspense>
        );
      case 'leaderboard':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <LeaderboardScreen />
          </Suspense>
        );
      case 'community':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CommunityScreen />
          </Suspense>
        );
      case 'profile':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ProfileScreen />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomeScreen />
          </Suspense>
        );
    }
  };

  const getScreenIcon = (screen: ScreenType) => {
    switch (screen) {
      case 'home': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      );
      case 'reading-journal': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="9" x2="15" y2="9"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="13" y2="17"/>
        </svg>
      );
      case 'leaderboard': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M6 13c0 5.5 2.5 8 6 8s6-2.5 6-8"/>
          <path d="M12 13V9"/>
          <path d="M9 9h6"/>
        </svg>
      );
      case 'community': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
      default: return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      );
    }
  };

  const getScreenLabel = (screen: ScreenType) => {
    switch (screen) {
      case 'home': return 'Home';
      case 'reading-journal': return 'Journal';
      case 'leaderboard': return 'Leaderboard';
      case 'community': return 'Community';
      default: return 'Home';
    }
  };

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Main Content Area */}
      <div className="pb-20 sm:pb-24">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 glass-morphism border-t border-border">
        <div className="flex items-center justify-around p-2">
          {/* Home */}
          <Button
            variant={currentScreen === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentScreen('home')}
            className="flex flex-col items-center space-y-1 h-16 w-16"
          >
            <span className="text-lg">{getScreenIcon('home')}</span>
            <span className="text-xs">{getScreenLabel('home')}</span>
          </Button>

          {/* Reading & Journal */}
          <Button
            variant={currentScreen === 'reading-journal' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentScreen('reading-journal')}
            className="flex flex-col items-center space-y-1 h-16 w-16"
          >
            <span className="text-lg">{getScreenIcon('reading-journal')}</span>
            <span className="text-xs">{getScreenLabel('reading-journal')}</span>
          </Button>

          {/* Leaderboard */}
          <Button
            variant={currentScreen === 'leaderboard' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentScreen('leaderboard')}
            className="flex flex-col items-center space-y-1 h-16 w-20"
          >
            <span className="text-lg">{getScreenIcon('leaderboard')}</span>
            <span className="text-xs leading-tight text-center">{getScreenLabel('leaderboard')}</span>
          </Button>

          {/* Community */}
          <Button
            variant={currentScreen === 'community' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentScreen('community')}
            className="flex flex-col items-center space-y-1 h-16 w-20"
          >
            <span className="text-lg">{getScreenIcon('community')}</span>
            <span className="text-xs leading-tight text-center">{getScreenLabel('community')}</span>
          </Button>
        </div>
      </div>

      {/* Floating Action Button for Quick Actions */}
      {currentScreen === 'home' && (
        <div className="fixed bottom-24 right-4">
          <Button
            size="lg"
            className="h-14 w-14 rounded-full bg-faith-primary hover:bg-faith-primary/90 shadow-lg"
            onClick={() => setCurrentScreen('reading-journal')}
          >
            📖
          </Button>
        </div>
      )}

      {/* Progress Indicator - Now clickable to show profile */}
      {currentScreen === 'home' && user && (
        <div className="fixed top-1 left-1 right-1 sm:top-4 sm:left-4 sm:right-4 z-50">
          <Card 
            className="glass-morphism border-faith-primary/20 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setCurrentScreen('profile')}
          >
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.profilePicture} alt={user.name} />
                    <AvatarFallback className="bg-faith-primary text-white text-sm font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Day {user.currentDay} of {user.currentPlan.totalDays}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-faith-success text-white">
                    🔥 {user.streak}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-lg"
                  >
                    {theme === 'light' ? '🌙' : '☀️'}
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Continue your spiritual journey
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Navigation;