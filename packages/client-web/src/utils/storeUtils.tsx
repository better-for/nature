import React from 'react';
import RootStore from '../store/RootStore';

const rootStore = new RootStore();
const rootStoreContext = React.createContext<RootStore>(null);

export const StoreProvider = ({ children }) => {
  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(rootStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};
