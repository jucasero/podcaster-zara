import '@testing-library/jest-dom';
import { podcastSummaryMock } from '../../mocks/tests';
import { render } from '../../utils/testUtils';
import { PodcastSumaryCard } from './PodcastSummaryCard';

describe('<PodcastSumaryCard />', () => {
  test('render component', () => {
    const { imageURL, title, author, description } = podcastSummaryMock;
    const component = render(
      <PodcastSumaryCard imageURL={imageURL} title={title} author={author} description={description} />
    );
    component.getByAltText(title);
    component.getByText(title);
    component.getByText(`by ${author}`);
    component.getByText(description);
  });
});
