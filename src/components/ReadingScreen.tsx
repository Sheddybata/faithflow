import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAvailableBooks, getChapter, BibleBook, BibleChapter } from '../lib/bibleData';
import { useAppContext } from '../contexts/AppContext';
import { ChevronLeft, ChevronRight, BookOpen, Calendar, Clock, Target } from 'lucide-react';

const ReadingScreen: React.FC = () => {
  const { user } = useAppContext();
  const [currentDay, setCurrentDay] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [selectedBook, setSelectedBook] = useState('genesis');
  const [availableBooks, setAvailableBooks] = useState<BibleBook[]>([]);
  const [currentChapterData, setCurrentChapterData] = useState<BibleChapter | null>(null);
  const [loading, setLoading] = useState(false);

  if (!user || !user.currentPlan) {
    return (
      <div className="content-with-fixed-header">
        <div className="max-w-4xl mx-auto p-4">
          <Card>
            <CardHeader>
              <CardTitle>Reading Plan Not Selected</CardTitle>
              <CardDescription>
                Please select a reading plan in your profile to start reading.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Get today's reading assignments
  const todayAssignments = user.currentPlan.dailyAssignments.find(
    day => day.day === currentDay
  );

  // Get available books on component mount
  useEffect(() => {
    const books = getAvailableBooks();
    setAvailableBooks(books);
  }, []);

  // Get chapter when book or chapter changes
  useEffect(() => {
    if (selectedBook && currentChapter) {
      setLoading(true);
      const chapter = getChapter(selectedBook, currentChapter);
      setCurrentChapterData(chapter);
      setLoading(false);
    }
  }, [selectedBook, currentChapter]);

  const handleDayChange = (newDay: number) => {
    setCurrentDay(newDay);
    const firstPassage = user.currentPlan.dailyAssignments.find(day => day.day === newDay)?.passages[0];
    setCurrentChapter(firstPassage?.startChapter || 1);
    setSelectedBook(firstPassage?.book.toLowerCase() || 'genesis');
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const handleNextChapter = () => {
    const book = availableBooks.find(b => b.id === selectedBook);
    if (book && currentChapter < book.chapters.length) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handleBookChange = (bookId: string) => {
    setSelectedBook(bookId);
    setCurrentChapter(1);
  };

  const handleChapterChange = (chapter: number) => {
    setCurrentChapter(chapter);
  };

  // Get available chapters for selected book
  const selectedBookData = availableBooks.find(b => b.id === selectedBook);
  const availableChapters = selectedBookData ? Array.from({ length: selectedBookData.chapters.length }, (_, i) => i + 1) : [];

  return (
    <div className="content-with-fixed-header">
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        {/* Today's Reading Progress - Compact Header */}
        <div className="bg-gradient-to-r from-faith-primary to-faith-primary/80 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Day {currentDay} of {user.currentPlan.totalDays}</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {Math.round((currentDay / user.currentPlan.totalDays) * 100)}%
            </Badge>
          </div>
          
          {/* Day Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDayChange(Math.max(1, currentDay - 1))}
              disabled={currentDay <= 1}
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <span className="text-lg font-bold">Day {currentDay}</span>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDayChange(Math.min(user.currentPlan.totalDays, currentDay + 1))}
              disabled={currentDay >= user.currentPlan.totalDays}
              className="text-white hover:bg-white/20"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Today's Reading Assignment - Compact */}
        {todayAssignments && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-faith-primary" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Today's Reading</h3>
              <Badge variant="outline" className="ml-auto">
                <Clock className="w-3 h-3 mr-1" />
                {todayAssignments.estimatedTime} min
              </Badge>
            </div>
            
            <div className="space-y-2">
              {todayAssignments.passages.map((passage, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{passage.reference}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Chapters {passage.startChapter}-{passage.endChapter}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedBook(passage.book.toLowerCase());
                      setCurrentChapter(passage.startChapter);
                    }}
                    className="bg-faith-primary text-white border-faith-primary hover:bg-faith-primary/90"
                  >
                    Read Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bible Reader - Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Book and Chapter Selection - Compact Header */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <Label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Book</Label>
                <Select value={selectedBook} onValueChange={handleBookChange}>
                  <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="Select a book" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableBooks.map((book) => (
                      <SelectItem key={book.id} value={book.id}>
                        {book.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <Label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Chapter</Label>
                <Select 
                  value={currentChapter.toString()} 
                  onValueChange={(value) => handleChapterChange(parseInt(value))}
                >
                  <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="Chapter" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableChapters.map((chapter) => (
                      <SelectItem key={chapter} value={chapter.toString()}>
                        {chapter}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Chapter Navigation - Floating Action Buttons */}
          <div className="relative">
            {/* Previous Chapter Button */}
            <Button
              onClick={handlePreviousChapter}
              disabled={currentChapter <= 1}
              className="absolute left-4 top-4 z-10 h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Next Chapter Button */}
            <Button
              onClick={handleNextChapter}
              disabled={!selectedBookData || currentChapter >= selectedBookData.chapters.length}
              className="absolute right-4 top-4 z-10 h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Bible Text */}
            <div className="p-6 pt-20 min-h-[500px]">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-faith-primary"></div>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Loading chapter...</span>
                </div>
              ) : currentChapterData ? (
                <div className="space-y-6">
                  {/* Chapter Header */}
                  <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-600">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedBookData?.name} {currentChapterData.chapter}
                    </h1>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {currentChapterData.verses.length} verses
                      </span>
                      <span>•</span>
                      <span>King James Version</span>
                    </div>
                  </div>

                  {/* Verses */}
                  <div className="space-y-4 text-lg leading-relaxed">
                    {currentChapterData.verses.map((verse) => (
                      <div key={verse.verse} className="group hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-3 transition-colors">
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-faith-primary text-lg min-w-[2.5rem] pt-1">
                            {verse.verse}
                          </span>
                          <p className="text-gray-900 dark:text-white flex-1 leading-relaxed">
                            {verse.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chapter Navigation Footer */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={handlePreviousChapter}
                        disabled={currentChapter <= 1}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Chapter</span>
                      </Button>
                      
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Chapter {currentChapter} of {selectedBookData?.chapters.length}
                      </span>
                      
                      <Button
                        onClick={handleNextChapter}
                        disabled={!selectedBookData || currentChapter >= selectedBookData.chapters.length}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <span>Next Chapter</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Chapter Not Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    This chapter is not available in the current version.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingScreen;