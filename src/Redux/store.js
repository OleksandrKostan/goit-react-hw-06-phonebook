import { configureStore } from '@reduxjs/toolkit';

import { persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'

import { persistedContactsReducer } from './contactsSlice';
import { persistedFiltersReducer } from './filtersSlice';


export const store = configureStore({
    reducer: { contacts: persistedContactsReducer,
        filters: persistedFiltersReducer
    },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
        
  });
  export const persistor = persistStore(store);
  