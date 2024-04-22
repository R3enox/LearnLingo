import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

const authConfig = {
  key: 'auth',
  storage,
  withelist: ['token'],
};

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesTeachers'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    favorites: persistReducer(favoritesConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
