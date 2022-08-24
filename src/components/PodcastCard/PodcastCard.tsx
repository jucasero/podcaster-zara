import { ShadowCard } from '../index';
import podcastCardStyles from './podcastCard.module.css';

interface IPodcastCardProps {
  imageURL: string;
  title: string;
  author: string;
  onClick: () => void;
}

export const PodcastCard: React.FC<IPodcastCardProps> = ({ imageURL, title, author, onClick }: IPodcastCardProps) => {
  const { container, image, card, podcastTitle, podcastAuthor } = podcastCardStyles;
  return (
    <div className={container} onClick={onClick}>
      <img src={imageURL} alt={title} className={image} />
      <ShadowCard className={card}>
        <h4 className={podcastTitle}>{title}</h4>
        <h5 className={podcastAuthor}>{`Author: ${author}`}</h5>
      </ShadowCard>
    </div>
  );
};
