import { useEffect, useState } from 'react';
import { GenericMessage, PodcastList, SearchBar } from '../../components';
import { getPodcasts } from '../../state/features/podcast/thunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import homeStyles from './home.module.css';
import { IMessagePrps } from '../../components/GenericMessage';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: podcastList, isLoading, hasError, error } = useAppSelector((state) => state.podcasts);
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const [genericMessage, setGenericMessage] = useState<IMessagePrps>({ title: '' });

  const podcastListFiltered = podcastList.filter((podcast) => {
    if (inputSearchValue === '') return podcast;
    else
      return (
        podcast.author.toLowerCase().includes(inputSearchValue) ||
        podcast.title.toLowerCase().includes(inputSearchValue)
      );
  });

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleOnClickFilterButton = () => {
    setInputSearchValue('');
  };

  useEffect(() => {
    if (hasError) setGenericMessage({ title: error?.code, subtitle: error?.message, description: error?.stack });
    if (!podcastListFiltered.length) setGenericMessage({ title: 'No se encontraron resultados para la búsqueda' });
  }, [hasError]);

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  return (
    <div className={homeStyles.container}>
      <SearchBar value={inputSearchValue} onChange={handleOnChange} onClickFilterButton={handleOnClickFilterButton} />
      {!isLoading && Boolean(podcastListFiltered.length) && !hasError && <PodcastList list={podcastListFiltered} />}
      {(Boolean(!podcastListFiltered.length) || hasError) && (
        <GenericMessage
          title={genericMessage.title}
          subtitle={genericMessage.subtitle}
          description={genericMessage.description}
        />
      )}
    </div>
  );
};
