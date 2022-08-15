import { AxiosError } from 'axios';
import { itunesApi } from '../../../api/itunes';
import { AppDispatch } from '../../store';
import { IPodcast } from './models';
import { podcastsLoading, podcastsReceived, podcastsError } from './podcastSlice';

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
