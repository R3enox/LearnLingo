import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesTeachers: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoritesTeachers.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favoritesTeachers = state.favoritesTeachers.filter(
        (car) => car.id !== payload.id
      );
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
