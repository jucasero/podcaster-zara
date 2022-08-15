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
