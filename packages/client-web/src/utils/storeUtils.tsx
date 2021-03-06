import React, { createContext, useContext, ReactNode } from 'react';
import RootStore from 'src/store/RootStore';
import { useDarkMode } from '@nature/design';

const rootStore = new RootStore();
const rootStoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

const DarkModeContext = createContext<{
  isDarkTheme: boolean;
  toggleTheme: () => void;
} | null>(null);

export const DarkModeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeTheme = () => {
  const theme = useContext(DarkModeContext);
  if (!theme) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return theme;
};

export const useStore = () => {
  const store = useContext(rootStoreContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};
