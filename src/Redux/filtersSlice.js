import { createSlice } from "@reduxjs/toolkit";


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
