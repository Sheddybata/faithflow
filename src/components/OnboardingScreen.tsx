import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Target, Clock, CheckCircle } from 'lucide-react';

const OnboardingScreen: React.FC = () => {
  const { availablePlans, selectReadingPlan, user, updateUsername } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState(user?.name || '');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 2;
  const progress = (currentStep / totalSteps) * 100;

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      updateUsername(username.trim());
      setCurrentStep(2);
    }
  };

  const handlePlanSelection = async (planId: string) => {
    setSelectedPlan(planId);
    setIsLoading(true);
    
    try {
      await selectReadingPlan(planId);
      // The context will handle the redirect
    } catch (error) {
      console.error('Error selecting plan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Choose Your Username";
      case 2:
        return "Select Your Reading Plan";
      default:
        return "Welcome to FaithFlow";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Pick a username that represents your faith journey";
      case 2:
        return "Choose a reading plan that fits your schedule and goals";
      default:
        return "Let's get you started on your spiritual journey";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-faith-primary via-faith-primary/90 to-faith-primary/80 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-4 text-white text-sm">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome!</h1>
          <p className="text-xl text-white/90">Let's set up your FaithFlow journey</p>
        </div>

        {/* Plant Illustration Placeholder */}
        <div className="flex justify-end mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-t-3xl p-6 space-y-6">
        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Step Content */}
        {currentStep === 1 ? (
          // Step 1: Username Selection
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <img src="/FaithFlow Logo.jpg" alt="FaithFlow" className="w-20 h-20 rounded-full object-cover mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Choose Your Username</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Pick a username that represents your faith journey
              </p>
            </div>

            <div className="space-y-4">
              <Label htmlFor="username" className="text-base font-medium text-gray-700 dark:text-gray-300">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-center text-lg h-12 border-gray-300 dark:border-gray-600 focus:border-faith-primary focus:ring-faith-primary/20"
                maxLength={20}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                This will be displayed in the community and leaderboards
              </p>
            </div>

            <Button
              onClick={handleUsernameSubmit}
              disabled={!username.trim()}
              className="w-full h-12 bg-faith-primary hover:bg-faith-primary/90 text-white font-semibold rounded-xl"
            >
              Continue to Reading Plan
            </Button>
          </div>
        ) : (
          // Step 2: Reading Plan Selection
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Choose Your Journey</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Select a reading plan that matches your spiritual goals
              </p>
            </div>

            <div className="space-y-4">
              {availablePlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                    selectedPlan === plan.id
                      ? 'border-faith-primary bg-faith-primary/5'
                      : 'border-gray-200 dark:border-gray-600 hover:border-faith-primary/30'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                      </div>
                      <Badge variant={selectedPlan === plan.id ? 'default' : 'secondary'} className="ml-2">
                        {plan.totalDays} days
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-faith-primary" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {plan.focus === 'new-testament' ? 'New Testament' : 'Full Bible'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-faith-primary" />
                        <span className="text-gray-600 dark:text-gray-400">
                          ~{plan.dailyAssignments[0]?.estimatedTime} min/day
                        </span>
                      </div>
                    </div>
                    
                    {selectedPlan === plan.id && (
                      <div className="mt-3 p-2 bg-faith-primary/10 border border-faith-primary/20 rounded-lg">
                        <div className="flex items-center justify-center space-x-2 text-faith-primary">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Selected</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => setCurrentStep(1)}
                variant="outline"
                className="w-full h-12 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl"
              >
                ← Back to Username
              </Button>
              
              <Button
                onClick={() => selectedPlan && handlePlanSelection(selectedPlan)}
                disabled={!selectedPlan || isLoading}
                className="w-full h-12 bg-faith-primary hover:bg-faith-primary/90 text-white font-semibold rounded-xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Setting up your account...
                  </>
                ) : (
                  'Complete Setup'
                )}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Don't worry! You can change your reading plan anytime from your profile.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingScreen;
