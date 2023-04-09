import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('dark');

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
