import { render, screen, waitFor } from '../../utils/testUtils';
import { EpisodesInfo } from './EpisodesInfo';

describe('<EpisodesInfo />', () => {
  test('render component', () => {
    render(<EpisodesInfo />);
    expect(screen.queryByText('Episodes:')).not.toBeInTheDocument();
  });

  test('it should show the number of podcast episodes', async () => {
    render(<EpisodesInfo />);
    await waitFor(() => expect(screen.getByText('Episodes: 13')).toBeInTheDocument());
  });

  test('it should show the podcast episodes table', async () => {
    render(<EpisodesInfo />);
    await waitFor(() => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Date')).toBeInTheDocument();
      expect(screen.getByText('Duration')).toBeInTheDocument();
      expect(screen.getByText('LeToya Luckett')).toBeInTheDocument();
      expect(screen.getByText('17/8/2022')).toBeInTheDocument();
      expect(screen.getByText('01:25')).toBeInTheDocument();
    });
  });
});
