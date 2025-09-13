import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { toast } from '@/components/ui/use-toast';

// Types
export interface ReadingPlan {
  id: string;
  name: string;
  totalDays: number;
  description: string;
  focus: 'new-testament' | 'full-bible';
  readings: Reading[];
  dailyAssignments: DailyAssignment[];
}

export interface DailyAssignment {
  day: number;
  passages: BiblePassage[];
  estimatedTime: number; // in minutes
}

export interface BiblePassage {
  book: string;
  startChapter: number;
  startVerse?: number;
  endChapter: number;
  endVerse?: number;
  reference: string;
}

export interface BibleVersion {
  id: string;
  name: string;
  abbreviation: string;
  language: string;
  pdfPath: string;
}

export interface Reading {
  id: string;
  date: string;
  title: string;
  content: string;
  reference: string;
  isCompleted: boolean;
  hasJournalEntry: boolean;
}

export interface JournalEntry {
  id: string;
  date: string;
  readingId: string;
  adoration: string;
  confession: string;
  thanksgiving: string;
  supplication: string;
  notes: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  streak: number;
  totalReadings: number;
  currentPlan: ReadingPlan;
  currentDay: number;
  hasSelectedPlan: boolean;
  preferredBibleVersion: string;
  profilePicture?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

interface AppContextType {
  // UI State
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  
  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
  // User State
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
  updateUsername: (newUsername: string) => void;
  
  // Reading Plan State
  availablePlans: ReadingPlan[];
  selectReadingPlan: (planId: string) => void;
  
  // Bible Version State
  availableBibleVersions: BibleVersion[];
  selectBibleVersion: (versionId: string) => void;
  
  // Reading State
  currentReading: Reading | null;
  readings: Reading[];
  markReadingComplete: (readingId: string) => void;
  unlockNextDay: () => void;
  
  // Journal State
  journalEntries: JournalEntry[];
  saveJournalEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => void;
  
  // Progress State
  updateStreak: () => void;
  getProgressPercentage: () => number;
  
  // Achievements
  achievements: Achievement[];
  unlockAchievement: (achievementId: string) => void;
}

// Lightweight reading plans - only load when needed
const createReadingPlan = (id: string, name: string, totalDays: number, focus: 'new-testament' | 'full-bible'): ReadingPlan => ({
  id,
  name,
  totalDays,
  description: `${name} - ${focus === 'new-testament' ? 'Focus on the New Testament' : 'Read through the entire Bible'}`,
  focus,
  readings: [],
  dailyAssignments: [] // Load assignments dynamically when needed
});

// Minimal available reading plans
const availableReadingPlans: ReadingPlan[] = [
  createReadingPlan('40-day', 'Bible in 40 Days', 40, 'new-testament'),
  createReadingPlan('90-day', 'Bible in 90 Days', 90, 'full-bible')
];

// Minimal Bible versions
const availableBibleVersions: BibleVersion[] = [
  {
    id: 'kjv',
    name: 'King James Version',
    abbreviation: 'KJV',
    language: 'English',
    pdfPath: '/KJV--King_James_Version.pdf',
  }
];

// Minimal default readings
const defaultReadings: Reading[] = [
  {
    id: '1',
    date: new Date().toISOString().split('T')[0],
    title: 'Genesis 1:1-31',
    content: 'In the beginning God created the heavens and the earth...',
    reference: 'Genesis 1:1-31',
    isCompleted: false,
    hasJournalEntry: false,
  }
];

// Minimal achievements
const defaultAchievements: Achievement[] = [
  {
    id: '1',
    name: 'First Reading',
    description: 'Complete your first daily reading',
    icon: '📖',
    unlockedAt: new Date().toISOString(),
  }
];

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  isLoading: true,
  setIsLoading: () => {},
  theme: 'light',
  toggleTheme: () => {},
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
  updateUsername: () => {},
  availablePlans: [],
  selectReadingPlan: () => {},
  availableBibleVersions,
  selectBibleVersion: () => {},
  currentReading: null,
  readings: [],
  markReadingComplete: () => {},
  unlockNextDay: () => {},
  journalEntries: [],
  saveJournalEntry: () => {},
  updateStreak: () => {},
  getProgressPercentage: () => 0,
  achievements: [],
  unlockAchievement: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [readings, setReadings] = useState<Reading[]>(defaultReadings);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements);

  // Memoize expensive computations
  const currentReading = useMemo(() => {
    return readings.find(reading => !reading.isCompleted) || null;
  }, [readings]);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('faithflow-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('faithflow-theme', theme);
  }, [theme]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const login = async (email: string, password: string) => {
    try {
      // Demo credentials for testing
      if (email === 'demo@faithflow.com' && password === 'demo123') {
        const demoUser: User = {
          id: 'demo-1',
          name: 'Sheddy',
          email: 'demo@faithflow.com',
          streak: 7,
          totalReadings: 15,
          currentPlan: availableReadingPlans[0], // 40-day plan
          currentDay: 15,
          hasSelectedPlan: true,
          preferredBibleVersion: 'kjv',
        };
        setUser(demoUser);
        setIsAuthenticated(true);
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in.",
        });
        return;
      }
      
      // Regular login logic
      setIsAuthenticated(true);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    toast({
      title: "Logged out",
      description: "Come back soon!",
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        streak: 0,
        totalReadings: 0,
        currentPlan: availableReadingPlans[0], // Default to 40-day plan
        currentDay: 1,
        hasSelectedPlan: false, // User needs to complete onboarding
        preferredBibleVersion: 'kjv', // Default to KJV
      };
      setUser(newUser);
      setIsAuthenticated(true);
      toast({
        title: "Welcome to FaithFlow!",
        description: "Your account has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateUsername = (newUsername: string) => {
    if (user) {
      setUser({ ...user, name: newUsername });
      toast({
        title: "Username updated",
        description: "Your username has been changed successfully.",
      });
    }
  };

  const selectReadingPlan = (planId: string) => {
    if (user) {
      const selectedPlan = availableReadingPlans.find(plan => plan.id === planId);
      if (selectedPlan) {
        setUser({
          ...user,
          currentPlan: selectedPlan,
          hasSelectedPlan: true,
          currentDay: 1, // Reset to day 1 when changing plans
        });
        toast({
          title: "Reading plan selected",
          description: `You've selected the ${selectedPlan.name}.`,
        });
      }
    }
  };

  const selectBibleVersion = (versionId: string) => {
    if (user) {
      setUser({ ...user, preferredBibleVersion: versionId });
      toast({
        title: "Bible version updated",
        description: "Your preferred Bible version has been changed.",
      });
    }
  };

  const markReadingComplete = (readingId: string) => {
    setReadings(prev => 
      prev.map(reading => 
        reading.id === readingId 
          ? { ...reading, isCompleted: true }
          : reading
      )
    );
  };

  const unlockNextDay = () => {
    if (user) {
      setUser({ ...user, currentDay: user.currentDay + 1 });
    }
  };

  const saveJournalEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setJournalEntries(prev => [...prev, newEntry]);
    toast({
      title: "Journal entry saved",
      description: "Your thoughts have been recorded.",
    });
  };

  const updateStreak = () => {
    if (user) {
      setUser({ ...user, streak: user.streak + 1 });
    }
  };

  const getProgressPercentage = () => {
    if (!user) return 0;
    return Math.round((user.currentDay / user.currentPlan.totalDays) * 100);
  };

  const unlockAchievement = (achievementId: string) => {
    const achievement = defaultAchievements.find(a => a.id === achievementId);
    if (achievement && !achievements.find(a => a.id === achievementId)) {
      setAchievements(prev => [...prev, achievement]);
      toast({
        title: "Achievement unlocked!",
        description: achievement.description,
      });
    }
  };

  const contextValue: AppContextType = {
    sidebarOpen,
    toggleSidebar,
    isLoading,
    setIsLoading,
    theme,
    toggleTheme,
    user,
    isAuthenticated,
    login,
    logout,
    signup,
    updateUsername,
    availablePlans: availableReadingPlans,
    selectReadingPlan,
    availableBibleVersions,
    selectBibleVersion,
    currentReading,
    readings,
    markReadingComplete,
    unlockNextDay,
    journalEntries,
    saveJournalEntry,
    updateStreak,
    getProgressPercentage,
    achievements,
    unlockAchievement,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
