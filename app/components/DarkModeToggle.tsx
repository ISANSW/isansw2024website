import { useAppContext } from '../AppContext';

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useAppContext();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};