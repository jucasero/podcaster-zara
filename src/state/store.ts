import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { podcastsReducer, podcastReducer, podcastByIdSliceReducer } from './features/podcast/podcastSlice';

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  podcast: podcastReducer,
  podcastById: podcastByIdSliceReducer
});

export const store = setupStore();

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
