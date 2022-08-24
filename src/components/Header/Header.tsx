import { Link, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../constants/Routes';
import { useAppSelector } from '../../hooks/useStore';
import { Loader } from '../index';
import headerStyles from './header.module.css';

interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  const { isLoading: isLoadingPodcasts } = useAppSelector((state) => state.podcasts);
  const { isLoading: isLoadingPodcastById } = useAppSelector((state) => state.podcastById);
  const { container, title: titleClass } = headerStyles;

  return (
    <>
      <header className={container}>
        <Link to={AppRoutes.root}>
          <h1 className={titleClass}>{title}</h1>
        </Link>
        {(isLoadingPodcasts || isLoadingPodcastById) && <Loader />}
      </header>
      <Outlet />
    </>
  );
};
