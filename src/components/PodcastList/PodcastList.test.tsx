import { podcastListMock } from '../../mocks/tests';
import { render, screen } from '../../utils/testUtils';
import { PodcastList } from './PodcastList';

describe('<PodcastList />', () => {
  test('render component', () => {
    render(<PodcastList list={podcastListMock} />);
    expect(screen.getByText(podcastListMock[0].title)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${podcastListMock[0].author}`)).toBeInTheDocument();
  });
});
