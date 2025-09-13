import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Flame } from 'lucide-react';

// Mock data for leaderboard
const mockCommunityUsers = [
  {
    id: '1',
    name: 'Sheddy',
    avatar: null,
    streak: 45,
    totalReadings: 180,
    rank: 1,
    isCurrentUser: false
  },
  {
    id: '2',
    name: 'Mrs. Ella',
    avatar: null,
    streak: 38,
    totalReadings: 165,
    rank: 2,
    isCurrentUser: false
  },
  {
    id: '3',
    name: 'Pst. Dan',
    avatar: null,
    streak: 32,
    totalReadings: 142,
    rank: 3,
    isCurrentUser: false
  },
  {
    id: '4',
    name: 'Uncle Nuhu',
    avatar: null,
    streak: 28,
    totalReadings: 128,
    rank: 4,
    isCurrentUser: false
  },
  {
    id: '5',
    name: 'Bata',
    avatar: null,
    streak: 25,
    totalReadings: 115,
    rank: 5,
    isCurrentUser: false
  }
];

const LeaderboardScreen: React.FC = () => {
  const { user, theme, toggleTheme } = useAppContext();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const renderUserRow = (userData: any, index: number) => (
    <div
      key={userData.id}
      className={`flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all duration-200 ${
        userData.isCurrentUser 
          ? 'bg-faith-primary/10 border-2 border-faith-primary/30 shadow-md' 
          : 'bg-white border border-gray-200 hover:shadow-md hover:border-faith-primary/20'
      }`}
    >
      {/* User Info */}
      <div className="flex items-center space-x-2 sm:space-x-4">
      {/* Avatar */}
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
        <AvatarImage src={userData.avatar} alt={userData.name} />
          <AvatarFallback className="bg-faith-primary text-white text-lg font-semibold">
          {userData.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

        {/* Name and Stats */}
        <div className="flex flex-col">
        <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900 text-lg">{userData.name}</h3>
          {userData.isCurrentUser && (
              <Badge variant="outline" className="text-xs bg-faith-primary/10 text-faith-primary border-faith-primary/30">
              You
            </Badge>
          )}
        </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
            <span className="flex items-center">
              <Flame className="w-4 h-4 text-orange-500 mr-1" />
              {userData.streak} streak
            </span>
            <span className="flex items-center">
              <span className="text-faith-primary mr-1">📖</span>
              {userData.totalReadings} readings
            </span>
          </div>
        </div>
      </div>

      {/* Rank Position */}
      <div className="text-right">
        <div className="text-2xl font-bold text-faith-primary">
          #{userData.rank}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6 content-with-fixed-header">
      {/* Header */}
        <div className="text-center py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Community Leaderboard</h1>
          <p className="text-gray-600">Top readers from around the world</p>
      </div>

        {/* Leaderboard */}
        <div className="space-y-3">
              {mockCommunityUsers.map((userData, index) => 
                renderUserRow(userData, index)
              )}
        </div>

          {/* Community Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-faith-primary mb-2">2,847</div>
            <div className="text-sm text-gray-600">Active Users</div>
                </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-faith-primary mb-2">45</div>
            <div className="text-sm text-gray-600">Top Streak</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;

