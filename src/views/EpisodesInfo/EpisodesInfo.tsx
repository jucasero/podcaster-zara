import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EpisodesCountCard, EpisodesTableCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { getPodcastInfoById } from '../../state/features/podcast/thunk';

export const EpisodesInfo: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { data: podcastDetailData, isLoading } = useAppSelector((state) => state.podcastById);
  const [podcastDetail, setPodcastDetail] = useState<any>({ episodes: 0, episodesList: [] });

  useEffect(() => {
    if (podcastDetailData.length) {
      setPodcastDetail({ episodes: podcastDetailData.length, episodesList: podcastDetailData });
    }
  }, [podcastDetailData]);

  useEffect(() => {
    const podcastId = location.pathname.split('/')[2];
    dispatch(getPodcastInfoById(podcastId));
  }, []);

  return (
    <>
      {!isLoading && podcastDetailData.length && (
        <>
          <EpisodesCountCard text={`Episodes: ${podcastDetail.episodes}`} />
          <EpisodesTableCard episodeList={podcastDetail.episodesList} />
        </>
      )}
    </>
  );
};
