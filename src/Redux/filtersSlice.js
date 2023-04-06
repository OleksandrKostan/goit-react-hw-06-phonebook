import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filtersInitialState = {
    filters: '',
  };

  const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
      contactFilter(state, action) {
        return {
          ...state,
          filters: action.payload,
        };
      },
    },
  });
  
  export const { contactFilter } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;

  const persistConfig = {
    key: 'root',
    storage,
  };
  
  export const persistedFiltersReducer = persistReducer(
    persistConfig,
    filtersReducer
  );
  