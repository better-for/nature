import React, { createContext, useContext, useState, Component } from 'react';
import RootStore from '../store/RootStore';
import { useDarkMode } from './useDarkMode';
// import {Provider} from 'mobx-react'

const rootStore = new RootStore();
const rootStoreContext = createContext<RootStore>(null);

export const StoreProvider = ({ children }) => {
  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

const DarkModeContext = createContext<{
  isDarkTheme: boolean;
  toggleTheme: () => void;
}>(null);

export const DarkModeContextProvider = ({ children }) => {
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

// export const StoreProvider = ({ children, ...props }) => {
//   return <Provider {...props}>{children}</Provider>;
// };

export const useStore = () => {
  const store = useContext(rootStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};

// import { useStaticRendering } from 'mobx-react';

// const isServer = typeof window === 'undefined';
// useStaticRendering(isServer);

// let store = null;

// export default function initializeStore() {
//   if (isServer) {
//     return rootStore;
//   }
//   if (store === null) {
//     store = rootStore;
//   }

//   return store;
// }
