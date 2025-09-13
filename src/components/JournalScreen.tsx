import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Heart, Shield, Gift, Hand, FileText } from 'lucide-react';
import BiblePopup from './BiblePopup';

const JournalScreen: React.FC = () => {
  const { 
    currentReading, 
    saveJournalEntry, 
    unlockNextDay,
    user,
    theme, 
    toggleTheme 
  } = useAppContext();

  const [formData, setFormData] = useState({
    adoration: '',
    confession: '',
    thanksgiving: '',
    supplication: '',
    notes: ''
  });

  const [isSubmitting, setIsLoading] = useState(false);
  const [isBiblePopupOpen, setIsBiblePopupOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['adoration', 'confession', 'thanksgiving', 'supplication'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setIsLoading(true);
    
    try {
      await saveJournalEntry({
        readingId: currentReading?.id || 'general',
        adoration: formData.adoration,
        confession: formData.confession,
        thanksgiving: formData.thanksgiving,
        supplication: formData.supplication,
        notes: formData.notes
      });
      
      if (currentReading) {
        unlockNextDay();
      }
      
      setFormData({
        adoration: '',
        confession: '',
        thanksgiving: '',
        supplication: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error saving journal entry:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.adoration && formData.confession && formData.thanksgiving && 
                     formData.supplication;

  const completedFields = Object.values(formData).filter(Boolean).length;
  const progressPercentage = (completedFields / 5) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Header */}
        <Card className="border-faith-primary/20 bg-gradient-to-r from-faith-primary/10 to-faith-secondary/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-faith-primary flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Today's Journal Entry
            </CardTitle>
            <CardDescription>
              Reflect on today's reading using the ACTS method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {completedFields} of 5 fields completed
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reading Reference */}
        {currentReading ? (
          <Card 
            className="border-faith-accent/20 cursor-pointer hover:border-faith-primary/40 hover:shadow-md transition-all duration-200"
            onClick={() => setIsBiblePopupOpen(true)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-faith-primary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">
                    Today's Reading: {currentReading.reference}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-faith-primary hover:text-faith-primary/80">
                  📖 Read
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-faith-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-faith-warning rounded-full"></div>
                <span className="text-sm font-medium text-foreground">
                  No current reading assigned. Complete a reading to start journaling.
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Journal Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Adoration */}
          <Card className="border-faith-primary/20">
            <CardHeader>
              <CardTitle className="text-lg text-faith-primary flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Adoration
              </CardTitle>
              <CardDescription>
                Praise God for who He is and what He has done
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="adoration">What do you praise God for today?</Label>
                <Textarea
                  id="adoration"
                  placeholder="Lord, I praise You for..."
                  value={formData.adoration}
                  onChange={(e) => handleInputChange('adoration', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Confession */}
          <Card className="border-faith-error/20">
            <CardHeader>
              <CardTitle className="text-lg text-faith-error flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Confession
              </CardTitle>
              <CardDescription>
                Acknowledge your sins and ask for forgiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="confession">What do you need to confess?</Label>
                <Textarea
                  id="confession"
                  placeholder="Lord, I confess..."
                  value={formData.confession}
                  onChange={(e) => handleInputChange('confession', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Thanksgiving */}
          <Card className="border-faith-success/20">
            <CardHeader>
              <CardTitle className="text-lg text-faith-success flex items-center">
                <Gift className="w-5 h-5 mr-2" />
                Thanksgiving
              </CardTitle>
              <CardDescription>
                Express gratitude for God's blessings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="thanksgiving">What are you thankful for?</Label>
                <Textarea
                  id="thanksgiving"
                  placeholder="Thank You, Lord, for..."
                  value={formData.thanksgiving}
                  onChange={(e) => handleInputChange('thanksgiving', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Supplication */}
          <Card className="border-faith-warning/20">
            <CardHeader>
              <CardTitle className="text-lg text-faith-warning flex items-center">
                <Hand className="w-5 h-5 mr-2" />
                Supplication
              </CardTitle>
              <CardDescription>
                Present your requests and intercede for others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="supplication">What are your prayer requests?</Label>
                <Textarea
                  id="supplication"
                  placeholder="Lord, I pray for..."
                  value={formData.supplication}
                  onChange={(e) => handleInputChange('supplication', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card className="border-faith-secondary/20">
            <CardHeader>
              <CardTitle className="text-lg text-faith-secondary flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Additional Notes
              </CardTitle>
              <CardDescription>
                Any other thoughts or insights from today's reading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional thoughts</Label>
                <Textarea
                  id="notes"
                  placeholder="Any other insights or thoughts..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="bg-faith-primary hover:bg-faith-primary/90 text-white px-8 py-3 text-lg"
            >
              {isSubmitting ? 'Saving...' : 'Save Journal Entry'}
            </Button>
          </div>
        </form>

        {/* Bible Popup */}
        <BiblePopup 
          isOpen={isBiblePopupOpen}
          onClose={() => setIsBiblePopupOpen(false)}
          readingReference={currentReading?.reference}
        />
      </div>
    </div>
  );
};

export default JournalScreen;