import { IApiError } from '../../../models';

export interface IPodcast {
  id?: string;
  imageURL: string;
  title: string;
  author: string;
  description: string;
}

export interface IPodcastState {
  isLoading: boolean;
  data: IPodcast[];
  hasError: boolean;
  error: IApiError | null;
}

export interface IPodcastDetail {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  episodeURL: string;
}

export interface IPodcastDetailState {
  isLoading: boolean;
  data: IPodcastDetail[];
  hasError: boolean;
  error: IApiError | null;
}
