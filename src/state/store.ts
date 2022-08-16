import { configureStore } from '@reduxjs/toolkit';
import { podcastsReducer, podcastReducer, podcastByIdSliceReducer } from './features/podcast/podcastSlice';

export const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
    podcast: podcastReducer,
    podcastById: podcastByIdSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
