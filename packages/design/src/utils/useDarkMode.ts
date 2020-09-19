import { useState, useLayoutEffect } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const swichTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', swichTheme);
    setTheme(swichTheme);
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme === 'dark', toggleTheme];
};
