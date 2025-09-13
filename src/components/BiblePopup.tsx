import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getBook, getChapter, isChapterAvailable, BibleVerse } from '../lib/bibleData';

interface BiblePopupProps {
  isOpen: boolean;
  onClose: () => void;
  readingReference?: string;
}

const BiblePopup: React.FC<BiblePopupProps> = ({ isOpen, onClose, readingReference }) => {
  const [selectedBook, setSelectedBook] = useState('genesis');
  const [selectedChapter, setSelectedChapter] = useState(1);

  if (!isOpen) return null;

  const bookData = getBook(selectedBook);
  const chapterData = getChapter(selectedBook, selectedChapter);

  const handlePreviousChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    } else if (bookData && bookData.order > 1) {
      // Go to previous book's last chapter
      const prevBook = Object.keys(getBook('genesis')).find(key => 
        getBook(key)?.order === bookData.order - 1
      );
      if (prevBook) {
        const prevBookData = getBook(prevBook);
        if (prevBookData) {
          setSelectedBook(prevBook);
          setSelectedChapter(prevBookData.chapters.length);
        }
      }
    }
  };

  const handleNextChapter = () => {
    if (bookData && selectedChapter < bookData.chapters.length) {
      setSelectedChapter(selectedChapter + 1);
    } else {
      // Go to next book's first chapter
      const nextBook = Object.keys(getBook('genesis')).find(key => 
        getBook(key)?.order === bookData.order + 1
      );
      if (nextBook) {
        setSelectedBook(nextBook);
        setSelectedChapter(1);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold text-faith-primary">
            {bookData?.name} Chapter {selectedChapter}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[70vh]">
          {chapterData ? (
            <div className="space-y-4">
              {chapterData.verses.map((verse) => (
                <div key={verse.verse_number} className="flex space-x-3">
                  <span className="text-sm font-semibold text-faith-primary flex-shrink-0 w-8">
                    {verse.verse_number}
                  </span>
                  <p className="text-gray-800 leading-relaxed">
                    {verse.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                This chapter is not yet available in the current version.
              </p>
              <p className="text-sm text-gray-500">
                Available chapters: Genesis 1-2, Exodus 1
              </p>
            </div>
          )}
        </CardContent>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between p-4 border-t bg-gray-50">
          <Button
            variant="outline"
            onClick={handlePreviousChapter}
            disabled={selectedChapter === 1 && bookData?.order === 1}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="text-sm text-gray-600">
            {bookData?.name} {selectedChapter}
          </div>
          
          <Button
            variant="outline"
            onClick={handleNextChapter}
            disabled={selectedChapter === bookData?.chapters.length && bookData?.order === 66}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BiblePopup;
