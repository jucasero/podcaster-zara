import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetch } from 'cross-fetch';
import '@testing-library/jest-dom';
import { getItunesApiMock } from './src/mocks/api';

global.fetch = fetch;

export const handlers = [
  rest.get('https://api.allorigins.win/get', (req, res, ctx) => {
    return res(ctx.json(getItunesApiMock), ctx.delay(150));
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
