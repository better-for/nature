import React from 'react';
import RootStore from '../store/RootStore';
// import {Provider} from 'mobx-react'

const rootStore = new RootStore();
const rootStoreContext = React.createContext<RootStore>(null);

export const StoreProvider = ({ children }) => {
  return (
    <rootStoreContext.Provider value={rootStore}>
      {children}
    </rootStoreContext.Provider>
  );
};

// export const StoreProvider = ({ children, ...props }) => {
//   return <Provider {...props}>{children}</Provider>;
// };

export const useStore = () => {
  const store = React.useContext(rootStoreContext);
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
