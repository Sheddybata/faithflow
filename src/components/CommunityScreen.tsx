import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Heart, Users, Clock, Star } from 'lucide-react';

// Mock data for community features
const mockDiscussions = [
  {
    id: '1',
    title: 'Reflections on Genesis 1',
    author: 'Sheddy',
    avatar: null,
    content: 'I found the creation story so powerful today. The way God speaks things into existence reminds me of His sovereignty over all things. The phrase "Let there be light" resonates with how God brings clarity and hope into our darkest moments.',
    replies: 12,
    likes: 24,
    timestamp: '2 hours ago',
    tags: ['Genesis', 'Creation', 'Reflection'],
    isFeatured: true,
    comments: [
      {
        id: 'c1',
        author: 'Mrs. Ella',
        content: 'Beautiful reflection! I love how you connected the creation story to God\'s sovereignty.',
        timestamp: '1 hour ago'
      },
      {
        id: 'c2',
        author: 'Pst. Dan',
        content: 'This really spoke to me too. Thank you for sharing!',
        timestamp: '45 minutes ago'
      }
    ]
  },
  {
    id: '2',
    title: 'Question about the Beatitudes',
    author: 'Uncle Nuhu',
    avatar: null,
    content: 'Can someone help me understand what "blessed are the poor in spirit" means? I\'ve been studying Matthew 5 and this particular verse has been on my mind.',
    replies: 8,
    likes: 15,
    timestamp: '5 hours ago',
    tags: ['Matthew', 'Beatitudes', 'Question'],
    isFeatured: false,
    comments: [
      {
        id: 'c3',
        author: 'Bata',
        content: 'Great question! "Poor in spirit" refers to those who recognize their spiritual need and dependence on God.',
        timestamp: '4 hours ago'
      }
    ]
  },
  {
    id: '3',
    title: 'Daily Reading Insights',
    author: 'Levite',
    avatar: null,
    content: 'Today\'s reading really spoke to me about trusting in God\'s timing. Sometimes we want immediate answers, but God\'s plan unfolds in His perfect time.',
    replies: 5,
    likes: 18,
    timestamp: '1 day ago',
    tags: ['Trust', 'Faith', 'Daily Reading'],
    isFeatured: false,
    comments: []
  }
];

const mockPrayerRequests = [
  {
    id: '1',
    title: 'Prayer for healing',
    author: 'Didi',
    avatar: null,
    content: 'Please pray for my grandmother who is in the hospital. She\'s been struggling with her health and we\'re trusting God for her complete healing.',
    prayerCount: 18,
    timestamp: '1 hour ago',
    isUrgent: true,
    category: 'Healing'
  },
  {
    id: '2',
    title: 'Thankful for answered prayer',
    author: 'Bata',
    avatar: null,
    content: 'God answered my prayer for a new job! Starting next week at a company that aligns with my values. Thank you for your prayers!',
    prayerCount: 12,
    timestamp: '3 hours ago',
    isUrgent: false,
    category: 'Praise'
  },
  {
    id: '3',
    title: 'Prayer for guidance',
    author: 'Uncle Nuhu',
    avatar: null,
    content: 'Please pray for wisdom as I make important life decisions regarding my career and family. I want to follow God\'s will.',
    prayerCount: 8,
    timestamp: '6 hours ago',
    isUrgent: false,
    category: 'Guidance'
  }
];

const CommunityScreen: React.FC = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState<'discussions' | 'prayer'>('discussions');
  const [newDiscussion, setNewDiscussion] = useState('');
  const [newPrayer, setNewPrayer] = useState('');
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [showNewPrayer, setShowNewPrayer] = useState(false);
  const [prayedFor, setPrayedFor] = useState<Set<string>>(new Set());
  const [showComments, setShowComments] = useState<Set<string>>(new Set());
  const [newComments, setNewComments] = useState<{[key: string]: string}>({});

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleCreateDiscussion = () => {
    if (newDiscussion.trim()) {
      console.log('Creating discussion:', newDiscussion);
      setNewDiscussion('');
      setShowNewDiscussion(false);
    }
  };

  const handleCreatePrayer = () => {
    if (newPrayer.trim()) {
      console.log('Creating prayer request:', newPrayer);
      setNewPrayer('');
      setShowNewPrayer(false);
    }
  };

  const handlePrayerClick = (prayerId: string) => {
    setPrayedFor(prev => {
      const newSet = new Set(prev);
      if (newSet.has(prayerId)) {
        newSet.delete(prayerId);
      } else {
        newSet.add(prayerId);
      }
      return newSet;
    });
  };

  const toggleComments = (discussionId: string) => {
    setShowComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(discussionId)) {
        newSet.delete(discussionId);
      } else {
        newSet.add(discussionId);
      }
      return newSet;
    });
  };

  const handleAddComment = (discussionId: string) => {
    const commentText = newComments[discussionId];
    if (commentText && commentText.trim()) {
      console.log('Adding comment to discussion:', discussionId, commentText);
      setNewComments(prev => ({ ...prev, [discussionId]: '' }));
    }
  };

  const handleCommentChange = (discussionId: string, value: string) => {
    setNewComments(prev => ({ ...prev, [discussionId]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 space-y-6 content-with-fixed-header">
        {/* Community Stats Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-faith-primary">{mockPrayerRequests.length}</div>
              <div className="text-sm text-gray-600">Prayer Requests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-faith-primary">{mockDiscussions.length}</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-faith-primary">156</div>
              <div className="text-sm text-gray-600">Total Prayers</div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'discussions' | 'prayer')}>
          <TabsList className="grid w-full grid-cols-2 bg-white border border-gray-200 rounded-lg p-1">
            <TabsTrigger 
              value="discussions" 
              className="data-[state=active]:bg-faith-primary data-[state=active]:text-white rounded-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Discussions
            </TabsTrigger>
            <TabsTrigger 
              value="prayer" 
              className="data-[state=active]:bg-faith-primary data-[state=active]:text-white rounded-md"
            >
              <Heart className="w-4 h-4 mr-2" />
              Prayer Wall
            </TabsTrigger>
          </TabsList>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-4 mt-6">
            {/* Create Discussion Card */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-faith-primary" />
                      Share Your Thoughts
                    </CardTitle>
                  </div>
                  <Button
                    onClick={() => setShowNewDiscussion(!showNewDiscussion)}
                    className="bg-faith-primary hover:bg-faith-primary/90 text-white"
                  >
                    {showNewDiscussion ? 'Cancel' : 'New Post'}
                  </Button>
                </div>
              </CardHeader>
              
              {showNewDiscussion && (
                <CardContent className="space-y-4 pt-0">
                  <Textarea
                    placeholder="What's on your mind? Share your thoughts, questions, or insights..."
                    value={newDiscussion}
                    onChange={(e) => setNewDiscussion(e.target.value)}
                    className="min-h-[100px] border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                  />
                  <Button onClick={handleCreateDiscussion} className="w-full bg-faith-primary hover:bg-faith-primary/90 text-white">
                    Post Discussion
                  </Button>
                </CardContent>
              )}
            </Card>

            {/* Discussions Feed */}
            <div className="space-y-4">
              {mockDiscussions.map((discussion) => (
                <Card key={discussion.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header with name and timestamp */}
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-faith-primary text-lg">{discussion.author}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                          {discussion.isFeatured && (
                            <Badge className="bg-faith-primary text-white text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Discussion title */}
                      <h4 className="font-medium text-gray-900 text-lg">{discussion.title}</h4>
                      
                      {/* Discussion content */}
                      <p className="text-gray-800 leading-relaxed">{discussion.content}</p>
                      
                      {/* Action buttons */}
                      <div className="flex items-center justify-start">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="flex items-center hover:text-faith-primary transition-colors">
                            <Heart className="w-4 h-4 mr-1" />
                            {discussion.likes}
                          </button>
                          <button 
                            onClick={() => toggleComments(discussion.id)}
                            className="flex items-center hover:text-faith-primary transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {discussion.replies} {showComments.has(discussion.id) ? 'Hide' : 'Show'} Comments
                          </button>
                        </div>
                      </div>

                      {/* Comments Section */}
                      {showComments.has(discussion.id) && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          {/* Existing Comments */}
                          {discussion.comments && discussion.comments.length > 0 && (
                            <div className="space-y-3 mb-4">
                              {discussion.comments.map((comment) => (
                                <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-faith-primary text-sm">{comment.author}</span>
                                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                                  </div>
                                  <p className="text-gray-700 text-sm">{comment.content}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Add Comment Form */}
                          <div className="space-y-3">
                            <Textarea
                              placeholder="Write a comment..."
                              value={newComments[discussion.id] || ''}
                              onChange={(e) => handleCommentChange(discussion.id, e.target.value)}
                              className="min-h-[80px] border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                            />
                            <div className="flex justify-end">
                              <Button 
                                onClick={() => handleAddComment(discussion.id)}
                                className="bg-faith-primary hover:bg-faith-primary/90 text-white px-6 py-2"
                              >
                                Post Comment
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Prayer Wall Tab */}
          <TabsContent value="prayer" className="space-y-4 mt-6">
            {/* Create Prayer Card */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-faith-primary" />
                      Share Prayer Request
                    </CardTitle>
                  </div>
                  <Button
                    onClick={() => setShowNewPrayer(!showNewPrayer)}
                    className="bg-faith-primary hover:bg-faith-primary/90 text-white"
                  >
                    {showNewPrayer ? 'Cancel' : 'New Prayer'}
                  </Button>
                </div>
              </CardHeader>
              
              {showNewPrayer && (
                <CardContent className="space-y-4 pt-0">
                  <Input
                    placeholder="Prayer request title..."
                    className="border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                  />
                  <Textarea
                    placeholder="Share your prayer request or praise report..."
                    value={newPrayer}
                    onChange={(e) => setNewPrayer(e.target.value)}
                    className="min-h-[100px] border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                  />
                  <Button onClick={handleCreatePrayer} className="w-full bg-faith-primary hover:bg-faith-primary/90 text-white">
                    Submit Prayer Request
                  </Button>
                </CardContent>
              )}
            </Card>

            {/* Prayer Requests Feed */}
            <div className="space-y-4">
              {mockPrayerRequests.map((prayer) => (
                <Card key={prayer.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header with name and timestamp */}
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-faith-primary text-lg">{prayer.author}</h3>
                        <span className="text-sm text-gray-500">{prayer.timestamp}</span>
                      </div>
                      
                      {/* Prayer content */}
                      <p className="text-gray-800 leading-relaxed">{prayer.content}</p>
                      
                      {/* I'm Praying button */}
                      <div className="flex justify-start">
                        <Button 
                          onClick={() => handlePrayerClick(prayer.id)}
                          className={`border rounded-lg px-4 py-2 transition-all duration-200 ${
                            prayedFor.has(prayer.id) 
                              ? 'bg-faith-primary/10 border-faith-primary/30 text-faith-primary hover:bg-faith-primary/20' 
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-faith-primary/30'
                          }`}
                        >
                          <span className={`mr-2 ${prayedFor.has(prayer.id) ? 'text-faith-primary' : 'text-gray-500'}`}>❤️</span>
                          I'm Praying ({prayer.prayerCount + (prayedFor.has(prayer.id) ? 1 : 0)})
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityScreen;