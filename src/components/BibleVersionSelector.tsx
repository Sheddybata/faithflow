import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BibleVersionSelector: React.FC = () => {
  const { availableBibleVersions, selectBibleVersion, user } = useAppContext();

  if (!user) return null;

  return (
    <Card className="border-faith-primary/20">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Bible Version</CardTitle>
        <CardDescription>Choose your preferred Bible translation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {availableBibleVersions.map((version) => (
            <div
              key={version.id}
              className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                user.preferredBibleVersion === version.id
                  ? 'border-faith-primary bg-faith-primary/5'
                  : 'border-border hover:border-faith-primary/30'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-foreground">{version.name}</h3>
                    <p className="text-sm text-muted-foreground">{version.description}</p>
                  </div>
                  <Badge 
                    variant={user.preferredBibleVersion === version.id ? 'default' : 'secondary'}
                    className="ml-2"
                  >
                    {version.abbreviation}
                  </Badge>
                </div>
                {user.preferredBibleVersion === version.id && (
                  <p className="text-xs text-faith-primary mt-1">✓ Currently selected</p>
                )}
              </div>
              <Button
                variant={user.preferredBibleVersion === version.id ? 'outline' : 'default'}
                size="sm"
                onClick={() => selectBibleVersion(version.id)}
                disabled={user.preferredBibleVersion === version.id}
              >
                {user.preferredBibleVersion === version.id ? 'Selected' : 'Select'}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-xs text-muted-foreground text-center">
          <p>Your selected version will be used for all Bible readings and references.</p>
          <p>You can change this preference anytime from your profile.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BibleVersionSelector;
