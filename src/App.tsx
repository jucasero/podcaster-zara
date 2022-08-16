import { Route, Routes } from 'react-router-dom';
import { EpisodeCard, EpisodesInfo, Home, PodcastDetail } from './views';
import { AppRoutes } from './constants/Routes';
import { GenericMessage, Header } from './components';
import './app.css';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path={AppRoutes.root} element={<Header title='Podcaster' />}>
          <Route path='' element={<Home />} />
          <Route path={AppRoutes.podcastDetail} element={<PodcastDetail />}>
            <Route path='' element={<EpisodesInfo />} />
            <Route path={AppRoutes.episodeDetail} element={<EpisodeCard />} />
          </Route>
          <Route path={AppRoutes.notFound} element={<GenericMessage title='404' subtitle='Página no encontrada' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
