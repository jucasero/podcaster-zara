import { AxiosError } from 'axios';
import { itunesApi } from '../../../api/itunes';
import { convertMsToHM } from '../../../helpers/milisecondsToHours';
import { AppDispatch } from '../../store';
import { IPodcast, IPodcastDetail } from './models';
import {
  podcastsLoading,
  podcastsReceived,
  podcastsError,
  podcastsByIdLoading,
  podcastsByIdError,
  podcastsByIdReceived
} from './podcastSlice';

export const getPodcasts = () => async (dispatch: AppDispatch) => {
  dispatch(podcastsLoading());
  try {
    const response = await itunesApi.get('/us/rss/toppodcasts/limit=100/genre=1310/json');
    const podcastListData = response.data.feed.entry;
    const podcastListFormated: IPodcast[] = podcastListData.map((podcast: any) => ({
      id: podcast.id.attributes['im:id'],
      imageURL: podcast['im:image'][2].label,
      title: podcast.title.label,
      author: podcast['im:artist'].label,
      description: podcast.summary.label
    }));
    dispatch(podcastsReceived(podcastListFormated));
  } catch (err) {
    const error = err as AxiosError;
    const errorObject = {
      code: error.code,
      stack: error.stack,
      message: error.message
    };
    console.error(errorObject.message, errorObject);
    dispatch(podcastsError(errorObject));
  }
};

export const getPodcastInfoById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(podcastsByIdLoading());
  try {
    const itunesUrl = `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`;
    const allOriginsResponse: any = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(itunesUrl)}`);
    const allOriginsResponseObject = await allOriginsResponse.json();
    const response = JSON.parse(allOriginsResponseObject.contents);
    const podcastData = response.results;
    const podcastListFormated: IPodcastDetail[] = podcastData.map((episode: any) => ({
      id: episode.trackId,
      title: episode.trackName,
      date: new Date(episode.releaseDate).toLocaleDateString('es'),
      duration: convertMsToHM(episode.trackTimeMillis!),
      description: episode.description,
      episodeURL: episode.episodeUrl
    }));
    const podcastListFormatedWithoutFirstElement = podcastListFormated.splice(1);
    dispatch(podcastsByIdReceived(podcastListFormatedWithoutFirstElement));
  } catch (err) {
    const error = err as AxiosError;
    const errorObject = {
      code: error.code,
      stack: error.stack,
      message: error.message
    };
    console.error(errorObject.message, errorObject);
    dispatch(podcastsByIdError(errorObject));
  }
};
