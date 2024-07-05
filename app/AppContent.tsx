import React, { createContext, useState, useContext } from 'react';

type AppContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: 'en' | 'id';
  toggleLanguage: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'id' : 'en');

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};