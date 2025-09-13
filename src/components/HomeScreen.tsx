import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Flame } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const { 
    user, 
    currentReading, 
    getProgressPercentage, 
    theme, 
    toggleTheme 
  } = useAppContext();

  const progressPercentage = getProgressPercentage();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-50 to-blue-50 p-1 sm:p-2 space-y-2 sm:space-y-4 pt-16 sm:pt-20">
      {/* Welcome Header */}
      <div className="text-center space-y-1 sm:space-y-2">
        <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
        <p className="text-sm sm:text-base text-gray-600">Continue your spiritual journey</p>
      </div>

      {/* Today's Reading */}
      <Card className="border-faith-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Today's Reading</CardTitle>
          <CardDescription>
            Day {user.currentDay} of {user.currentPlan.totalDays} • {user.currentPlan.name}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.currentPlan.dailyAssignments[user.currentDay - 1] ? (
            <>
              <div className="space-y-3">
                {user.currentPlan.dailyAssignments[user.currentDay - 1].passages.map((passage, index) => (
                  <div key={index} className="p-3 bg-faith-primary/5 rounded-lg border border-faith-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{passage.book}</h3>
                      <Badge variant="outline" className="text-xs">
                        Chapters {passage.startChapter}-{passage.endChapter}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {passage.reference}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Estimated time:</span>
                  <Badge variant="secondary" className="text-xs">
                    ~{user.currentPlan.dailyAssignments[user.currentDay - 1].estimatedTime} minutes
                  </Badge>
                </div>
                <Button
                  size="sm"
                  onClick={() => {/* Navigate to reading screen */}}
                  className="bg-faith-primary hover:bg-faith-primary/90"
                >
                  Start Reading
                </Button>
              </div>
            </>
          ) : (
            <p className="text-center text-muted-foreground py-4">
              No reading assignment for today.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Progress and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reading Progress */}
        <Card className="border-faith-accent/20 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-900">Reading Progress</CardTitle>
            <CardDescription className="text-gray-600">
              {user.currentDay} of {user.currentPlan.totalDays} days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-gray-900">{progressPercentage}%</span>
            </div>
            <p className="text-sm text-gray-500">
              {user.currentPlan.name}
            </p>
          </CardContent>
        </Card>

        {/* Streak Counter */}
        <Card className="border-faith-success/20 bg-gradient-to-br from-green-50 to-blue-50 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-900">Current Streak</CardTitle>
            <CardDescription className="text-gray-600">Keep the momentum going!</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold text-faith-success mb-2 flex items-center justify-center">
              <Flame className="w-8 h-8 text-orange-500 mr-2" />
              {user.streak}
            </div>
            <p className="text-sm text-gray-600">
              {user.streak === 1 ? 'day' : 'days'} in a row
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Verse of the Day */}
      <Card className="border-faith-secondary/20 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Verse of the Day</CardTitle>
          <CardDescription className="text-gray-600">John 3:16</CardDescription>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg italic text-gray-800 leading-relaxed">
            "For God so loved the world that he gave his one and only Son, 
            that whoever believes in him shall not perish but have eternal life."
          </blockquote>
          <p className="text-sm text-gray-600 mt-3">
            — John 3:16 (NIV)
          </p>
        </CardContent>
      </Card>

      {/* Primary Action Button */}
      <div className="space-y-3">
        <Button 
          className="w-full h-14 text-lg bg-faith-primary hover:bg-faith-primary/90 shadow-lg"
          disabled={!currentReading}
        >
          📖 Start Today's Reading
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-faith-primary">{user.totalReadings}</div>
          <div className="text-xs text-gray-600 font-medium">Total Readings</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-faith-success flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-500 mr-1" />
            {user.streak}
          </div>
          <div className="text-xs text-gray-600 font-medium">Current Streak</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-faith-accent">{progressPercentage}%</div>
          <div className="text-xs text-gray-600 font-medium">Plan Progress</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;