import React, { createContext, useContext, useReducer } from 'react';
import authReducer, { initialStateAuth } from '../models/auth/reducer';


const StoreContext = createContext();

const store = {
  auth: initialStateAuth
};

const reducers = (store, action) => ({
  auth: authReducer(store.auth, action)
});

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducers, store)}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);