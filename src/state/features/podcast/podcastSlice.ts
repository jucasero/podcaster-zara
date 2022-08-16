import { createSlice } from '@reduxjs/toolkit';
import { IPodcast, IPodcastDetailState, IPodcastState } from './models';

const podcastsInitialState: IPodcastState = {
  isLoading: false,
  data: [],
  hasError: false,
  error: null
};

const podcastInitialState: IPodcast = {
  id: '',
  imageURL: '',
  title: '',
  author: '',
  description: ''
};

const podcastByIdInitialState: IPodcastDetailState = {
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

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: podcastInitialState,
  reducers: {
    select: (state, action) => {
      state.id = action.payload.id;
      state.imageURL = action.payload.imageURL;
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.description = action.payload.description;
    }
  }
});

export const podcastByIdSlice = createSlice({
  name: 'podcastById',
  initialState: podcastByIdInitialState,
  reducers: {
    podcastsByIdLoading: (state) => {
      state.isLoading = true;
    },
    podcastsByIdReceived: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    podcastsByIdError: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
    }
  }
});

export const { podcastsLoading, podcastsReceived, podcastsError } = podcastsSlice.actions;
export const { select } = podcastSlice.actions;
export const { podcastsByIdLoading, podcastsByIdReceived, podcastsByIdError } = podcastByIdSlice.actions;

export const podcastsReducer = podcastsSlice.reducer;
export const podcastReducer = podcastSlice.reducer;
export const podcastByIdSliceReducer = podcastByIdSlice.reducer;
