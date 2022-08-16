import { IPodcast } from '../../state/features/podcast/models';
import podcastSumaryCardStyles from './podcastSummaryCard.module.css';

export const PodcastSumaryCard: React.FC<IPodcast> = ({ imageURL, title, author, description }: IPodcast) => {
  const { container, header, image, body, summaryTitle, summary, footerTitle, footerText } = podcastSumaryCardStyles;

  return (
    <div className={container}>
      <header className={header}>
        <img src={imageURL} alt={title} className={image} />
      </header>
      <section className={body}>
        <h4 className={summaryTitle}>{title}</h4>
        <h5 className={summary}>{`by ${author}`}</h5>
      </section>
      <footer>
        <h5 className={footerTitle}>Description:</h5>
        <p className={footerText}>{description}</p>
      </footer>
    </div>
  );
};
