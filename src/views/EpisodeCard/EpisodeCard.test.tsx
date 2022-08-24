import { render, screen } from '../../utils/testUtils';
import { EpisodeCard } from './EpisodeCard';

describe('<EpisodeCard />', () => {
  test('render component', () => {
    const locationState = { title: 'titleText', description: 'descriptionText', episodeURL: 'episodeURL' };
    render(<EpisodeCard />, { routerProps: { initialEntries: [{ state: locationState }] } });
    expect(screen.getByText('titleText')).toBeInTheDocument();
    expect(screen.getByText('descriptionText')).toBeInTheDocument();
  });
});
