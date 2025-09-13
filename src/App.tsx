
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { ThemeProvider } from './components/theme-provider';
import AppLayout from './components/AppLayout';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="faithflow-theme">
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
