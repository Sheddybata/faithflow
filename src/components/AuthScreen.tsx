import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/ui/icons';

const AuthScreen: React.FC = () => {
  const { login, signup, theme, toggleTheme } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;

    setIsLoading(true);
    try {
      await login(loginEmail, loginPassword);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword || signupPassword !== confirmPassword) return;

    setIsLoading(true);
    try {
      await signup(signupName, signupEmail, signupPassword);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would integrate with OAuth providers
    console.log(`Logging in with ${provider}`);
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
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="text-center space-y-3 mb-6 sm:mb-8">
          {/* FaithFlow Logo */}
          <div className="flex justify-center mb-2">
            <img 
              src="/New FaithFlow logo.png" 
              alt="FaithFlow Logo" 
              className="w-40 h-40 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Hello!</h1>
          <p className="text-lg text-white/90">Welcome to FaithFlow</p>
        </div>

        {/* Plant Illustration Placeholder */}
        <div className="flex justify-end mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-t-3xl p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Navigation */}
        {isSignUp && (
          <div className="flex items-center space-x-2 text-faith-primary">
            <button 
              onClick={() => setIsSignUp(false)}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to login</span>
            </button>
          </div>
        )}

        {/* Form Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-faith-primary">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>
        </div>

        {/* Form */}
        {!isSignUp ? (
          // Login Form
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Demo Credentials Info */}
            <div className="p-3 bg-faith-primary/10 border border-faith-primary/20 rounded-lg">
              <p className="text-xs text-faith-primary text-center">
                <strong>Demo Credentials:</strong><br />
                Email: demo@faithflow.com<br />
                Password: demo123
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                  />
                </div>
              </div>

              <div className="text-right">
                <button type="button" className="text-sm text-gray-500 hover:text-faith-primary transition-colors">
                  Forgot Password?
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-faith-primary hover:bg-faith-primary/90 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </div>
          </form>
        ) : (
          // Sign Up Form
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                  className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                  className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                  className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-10 h-12 rounded-xl border-gray-300 focus:border-faith-primary focus:ring-faith-primary/20"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-faith-primary hover:bg-faith-primary/90 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Social Login Section */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-100 dark:bg-gray-800 px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              onClick={() => handleSocialLogin('Facebook')}
              disabled={isLoading}
              className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading}
              className="h-12 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialLogin('Apple')}
              disabled={isLoading}
              className="h-12 rounded-xl bg-black hover:bg-gray-900 text-white border-black"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Sign Up/Login Toggle */}
        <div className="text-center">
          {!isSignUp ? (
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-faith-primary font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="text-faith-primary font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-start items-center pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-gray-500 hover:text-faith-primary"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;