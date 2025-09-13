import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import BibleVersionSelector from './BibleVersionSelector';

const ProfileScreen: React.FC = () => {
  const { user, logout, updateUsername, theme, toggleTheme, selectReadingPlan, achievements } = useAppContext();
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.name || '');

  if (!user) return null;

  const handleUsernameSave = () => {
    if (newUsername.trim() && newUsername !== user.name) {
      updateUsername(newUsername.trim());
    }
    setIsEditingUsername(false);
  };

  const handleUsernameCancel = () => {
    setNewUsername(user.name);
    setIsEditingUsername(false);
  };

  const getProgressPercentage = () => {
    if (!user.currentPlan) return 0;
    return (user.currentDay / user.currentPlan.totalDays) * 100;
  };

  const progressPercentage = getProgressPercentage();

  const [fontSize, setFontSize] = useState(16);
  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    streakBreak: true,
    weeklyProgress: false,
    communityUpdates: true
  });

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6 content-with-fixed-header">
      {/* Back Button */}
      <div className="flex justify-start">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.history.back()}
          className="text-muted-foreground hover:text-foreground"
        >
          ← Back to Home
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="border-faith-primary/20 bg-gradient-to-br from-faith-primary/5 to-faith-secondary/10">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback className="bg-faith-primary text-white text-2xl font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {isEditingUsername ? (
                <div className="space-y-2">
                  <Input
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="text-lg font-semibold"
                    maxLength={20}
                  />
                  <div className="flex space-x-2">
                    <Button size="sm" onClick={handleUsernameSave}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleUsernameCancel}>
                      Cancel
              </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsEditingUsername(true)}
                    className="h-6 w-6 p-0"
                  >
                    ✏️
                  </Button>
                </div>
              )}
              <p className="text-muted-foreground">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-faith-success text-white">
                  🔥 {user.streak} day streak
                </Badge>
                <Badge variant="secondary">
                  📖 {user.totalReadings} readings
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Section */}
      <Card className="border-faith-accent/20">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Your Statistics</CardTitle>
          <CardDescription>Track your spiritual journey progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-faith-success/10 rounded-lg">
              <div className="text-2xl font-bold text-faith-success">{user.streak}</div>
              <div className="text-xs text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center p-3 bg-faith-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-faith-primary">{user.totalReadings}</div>
              <div className="text-xs text-muted-foreground">Total Readings</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Reading Plan Progress</span>
              <span className="font-medium text-foreground">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {user.currentDay} of {user.currentPlan.totalDays} days completed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bible Version Selection */}
      <BibleVersionSelector />

      {/* Achievements */}
      <Card className="border-faith-warning/20">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Achievements</CardTitle>
          <CardDescription>Badges earned on your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="text-center p-3 bg-faith-warning/10 rounded-lg">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-sm font-medium text-foreground">{achievement.name}</div>
                <div className="text-xs text-muted-foreground">{achievement.description}</div>
                <div className="text-xs text-faith-warning mt-1">
                  Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
          
          {achievements.length === 0 && (
            <div className="text-center py-6 text-muted-foreground">
              <p>Complete readings to earn your first achievement!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="border-faith-secondary/20">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Settings</CardTitle>
          <CardDescription>Customize your FaithFlow experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Theme Selection */}
          <div className="space-y-3">
            <Label className="text-foreground">Theme</Label>
            <div className="flex items-center space-x-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={toggleTheme}
                className="flex-1"
              >
                ☀️ Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={toggleTheme}
                className="flex-1"
              >
                🌙 Dark
              </Button>
            </div>
          </div>

          <Separator />

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-foreground">Font Size</Label>
              <span className="text-sm text-muted-foreground">{fontSize}px</span>
            </div>
            <Slider
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              max={24}
              min={12}
              step={1}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">
              Adjust text size for better readability
            </div>
          </div>

          <Separator />

          {/* Reading Plan Selection */}
          <div className="space-y-3">
            <Label className="text-foreground">Reading Plan</Label>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Current: {user.currentPlan.name}
              </p>
              <Select 
                value={user.currentPlan.id} 
                onValueChange={(planId) => {
                  selectReadingPlan(planId);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40-day">Bible in 40 Days</SelectItem>
                  <SelectItem value="90-day">Bible in 90 Days</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Changing plans will reset your current day but keep your overall progress.
              </p>
            </div>
          </div>

          <Separator />

          {/* Notifications */}
          <div className="space-y-3">
            <Label className="text-foreground">Notifications</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-foreground">Daily Reminders</div>
                  <div className="text-xs text-muted-foreground">Get reminded to read daily</div>
                </div>
                <Switch
                  checked={notifications.dailyReminders}
                  onCheckedChange={() => handleNotificationToggle('dailyReminders')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-foreground">Streak Break Alerts</div>
                  <div className="text-xs text-muted-foreground">Notify when streak is at risk</div>
                </div>
                <Switch
                  checked={notifications.streakBreak}
                  onCheckedChange={() => handleNotificationToggle('streakBreak')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-foreground">Weekly Progress</div>
                  <div className="text-xs text-muted-foreground">Weekly reading summary</div>
                </div>
                <Switch
                  checked={notifications.weeklyProgress}
                  onCheckedChange={() => handleNotificationToggle('weeklyProgress')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-foreground">Community Updates</div>
                  <div className="text-xs text-muted-foreground">Group and leaderboard updates</div>
                </div>
                <Switch
                  checked={notifications.communityUpdates}
                  onCheckedChange={() => handleNotificationToggle('communityUpdates')}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card className="border-faith-error/20">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full border-faith-warning text-faith-warning">
            🔒 Change Password
          </Button>
          <Button variant="outline" className="w-full border-faith-error text-faith-error">
            📧 Update Email
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-faith-error text-faith-error"
            onClick={handleLogout}
          >
            🚪 Logout
          </Button>
        </CardContent>
      </Card>

      {/* App Information */}
      <div className="text-center text-xs text-muted-foreground space-y-1">
        <p>FaithFlow v1.0.0</p>
        <p>Your daily journey through scripture</p>
      </div>
    </div>
  );
};

export default ProfileScreen;

