import { podcastSummaryMock } from '../../mocks/tests';
import { render, screen } from '../../utils/testUtils';
import { PodcastSumaryCard } from './PodcastSummaryCard';

describe('<PodcastSumaryCard />', () => {
  test('render component', () => {
    const { imageURL, title, author, description } = podcastSummaryMock;
    render(<PodcastSumaryCard imageURL={imageURL} title={title} author={author} description={description} />);
    expect(screen.getByAltText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`by ${author}`)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
