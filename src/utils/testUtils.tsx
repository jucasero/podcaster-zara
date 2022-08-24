import React, { PropsWithChildren } from 'react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';

import { AppStore, RootState, setupStore } from '../state/store';
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  routerProps?: MemoryRouterProps;
}

function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(), routerProps = {}, ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter {...routerProps}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
export { renderWithProviders as render };
