import { createSlice } from '@reduxjs/toolkit';
import { IPodcastState } from './models';

const podcastsInitialState: IPodcastState = {
  isLoading: false,
  data: [],
  hasError: false,
  error: null
};

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: podcastsInitialState,
  reducers: {
    podcastsLoading: (state) => {
      state.isLoading = true;
    },
    podcastsReceived: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    podcastsError: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
    }
  }
});

export const { podcastsLoading, podcastsReceived, podcastsError } = podcastsSlice.actions;

export const podcastsReducer = podcastsSlice.reducer;
