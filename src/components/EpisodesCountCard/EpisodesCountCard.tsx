import { ShadowCard } from '../ShadowCard';
import episodesCountCardStyles from './episodesCountCard.module.css';

interface IEpisodesCountCard {
  text: string;
}

export const EpisodesCountCard: React.FC<IEpisodesCountCard> = ({ text: title }: IEpisodesCountCard) => (
  <ShadowCard>
    <h2 className={episodesCountCardStyles.title}>{title}</h2>
  </ShadowCard>
);
