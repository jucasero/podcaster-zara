import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { urlify } from '../../helpers/urlify';
import { IPodcastDetail } from '../../state/features/podcast/models';
import { ShadowCard } from '../../components';
import episodeCardStyles from './episodeCard.module.css';

export const EpisodeCard: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as IPodcastDetail;
  const { title: titleText, description: descriptionText, episodeURL } = locationState;
  const { container, title, description, player } = episodeCardStyles;

  const formatEpisodeDescription = () => {
    const urlifyText = urlify(descriptionText);
    const newText = document.getElementById('episodeDescription') as HTMLInputElement;
    if (newText) newText.innerHTML = urlifyText;
  };

  useEffect(() => {
    formatEpisodeDescription();
  }, []);

  return (
    <ShadowCard className={container}>
      <h5 className={title}>{titleText}</h5>
      <p id='episodeDescription' className={description}></p>
      <audio className={player} src={episodeURL} controls />
    </ShadowCard>
  );
};
