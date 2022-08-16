import { Link } from 'react-router-dom';
import { ShadowCard } from '../ShadowCard';
import episodesTableCardStyles from './episodesTableCard.module.css';

interface IEpisodesTableCardProps {
  episodeList: { id: string; title: string; date: string; duration: string }[];
}

export const EpisodesTableCard: React.FC<IEpisodesTableCardProps> = ({ episodeList }: IEpisodesTableCardProps) => {
  const { container, titleTable, titleHead, dateHead, durationHead, titleField, durationField } =
    episodesTableCardStyles;

  return (
    <ShadowCard className={container}>
      <table>
        <thead>
          <tr className={titleTable}>
            <th className={titleHead}>Title</th>
            <th className={dateHead}>Date</th>
            <th className={durationHead}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodeList.map((episode) => (
            <tr key={episode.title}>
              <td>
                <Link to={`episode/${episode.id}`} className={titleField} state={episode}>
                  {episode.title}
                </Link>
              </td>
              <td>{episode.date}</td>
              <td className={durationField}>{episode.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ShadowCard>
  );
};
