import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetch } from 'cross-fetch';
import '@testing-library/jest-dom';
import { getPodcastsMock, getPodcastByIdMock } from './src/mocks/itunesApi';

global.fetch = fetch;

export const handlers = [
  rest.get('https://api.allorigins.win/get', (req, res, ctx) => {
    const urlQueryParam = req.url.searchParams.get('url');
    const podcastsUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    if (urlQueryParam === podcastsUrl) return res(ctx.json(getPodcastsMock), ctx.delay(100));
    else return res(ctx.json(getPodcastByIdMock), ctx.delay(100));
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
