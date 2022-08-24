import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useStore';
import { IPodcast } from '../../state/features/podcast/models';
import { select } from '../../state/features/podcast/podcastSlice';
import { PodcastCard } from '../index';
import podcastListStiles from './podcastList.module.css';

interface IPodcastListProps {
  list: IPodcast[];
}

export const PodcastList: React.FC<IPodcastListProps> = ({ list }: IPodcastListProps) => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnClickCard = (podcast: IPodcast) => {
    dispatch(select(podcast));
    navigator(`podcast/${podcast.id}`);
  };

  return (
    <section className={podcastListStiles.container}>
      {list.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          imageURL={podcast.imageURL}
          title={podcast.title}
          author={podcast.author}
          onClick={() => handleOnClickCard(podcast)}
        />
      ))}
    </section>
  );
};
