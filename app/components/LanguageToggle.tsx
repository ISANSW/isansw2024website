import { useAppContext } from '../AppContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useAppContext();
  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Bahasa Indonesia' : 'English'}
    </button>
  );
};