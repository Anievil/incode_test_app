import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {favoritesSliceType} from '../../types/reduxTypes';

const initialState: favoritesSliceType = {
  favoritesList: [],
  favoritesMaleCount: 0,
  favoritesFemaleCount: 0,
  favoritesOtherCount: 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavoriteInList: (state, action: PayloadAction<string>) => {
      if (state.favoritesList.includes(action.payload)) {
        state.favoritesList = state.favoritesList.filter(
          character => character !== action.payload,
        );
      } else {
        state.favoritesList = [...state.favoritesList, action.payload];
      }
    },
    incrementGenderCount: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'male':
          state.favoritesMaleCount += 1;
          break;
        case 'female':
          state.favoritesFemaleCount += 1;
          break;

        default:
          state.favoritesOtherCount += 1;
          break;
      }
    },
    decrementGenderCount: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'male':
          state.favoritesMaleCount -= 1;
          break;
        case 'female':
          state.favoritesFemaleCount -= 1;
          break;

        default:
          state.favoritesOtherCount -= 1;
          break;
      }
    },
    resetFavorites: state => {
      state.favoritesList = [];
      state.favoritesMaleCount = 0;
      state.favoritesFemaleCount = 0;
      state.favoritesOtherCount = 0;
    },
  },
});

export const {
  toggleFavoriteInList,
  incrementGenderCount,
  decrementGenderCount,
  resetFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
