import { useEffect, useState } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
  let isdark: boolean;
  if (typeof window !== 'undefined') {
    isdark = JSON.parse(localStorage.getItem('theme')) === 'dark';
  }
  const [isDarkTheme, setDarkTheme] = useState(isdark);
  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const theme = JSON.stringify(isDarkTheme ? 'dark' : 'light');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [isDarkTheme]);

  return [isDarkTheme, toggleTheme];
};
