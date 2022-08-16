import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useStore';
import { ShadowCard, PodcastSumaryCard } from '../../components';
import podcastDetailStyles from './podcastDetail.module.css';

export const PodcastDetail: React.FC = () => {
  const podcast = useAppSelector((state) => state.podcast);
  const { imageURL, title, author, description } = podcast;
  const { container, summaryCard, episodes } = podcastDetailStyles;

  return (
    <div className={container}>
      <ShadowCard className={summaryCard}>
        <PodcastSumaryCard imageURL={imageURL} title={title} author={author} description={description} />
      </ShadowCard>
      <section className={episodes}>
        <Outlet />
      </section>
    </div>
  );
};
