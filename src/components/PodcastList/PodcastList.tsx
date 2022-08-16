import { IPodcast } from '../../state/features/podcast/models';
import { PodcastCard } from '../PodcastCard';
import podcastListStiles from './podcastList.module.css';

interface IPodcastListProps {
  list: IPodcast[];
}

export const PodcastList: React.FC<IPodcastListProps> = ({ list }: IPodcastListProps) => {
  const handleOnClickCard = (podcast: IPodcast) => {};

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
