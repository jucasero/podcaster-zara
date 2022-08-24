import { render, screen } from '../../utils/testUtils';
import { EpisodesCountCard } from './EpisodesCountCard';

describe('<EpisodesCountCard />', () => {
  test('render component', () => {
    render(<EpisodesCountCard text='any text' />);
    expect(screen.getByText('any text')).toBeInTheDocument();
  });
});
