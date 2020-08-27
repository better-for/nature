import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export const useDarkMode = (): [boolean, () => void] => {
  let isDark = false;
  if (typeof window !== 'undefined') {
    isDark = JSON.parse(localStorage.getItem('theme')) === 'dark';
  }
  const [isDarkTheme, setDarkTheme] = useState(isDark);
  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };

  useIsomorphicLayoutEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }, [isDarkTheme]);

  return [isDarkTheme, toggleTheme];
};
