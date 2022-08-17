import '@testing-library/jest-dom';
import { podcastListMock } from '../../mocks/tests';
import { render } from '../../utils/testUtils';
import { PodcastList } from './PodcastList';

describe('<PodcastList />', () => {
  test('render component', () => {
    const component = render(<PodcastList list={podcastListMock} />);
    component.getByText(podcastListMock[0].title);
    component.getByText(`Author: ${podcastListMock[0].author}`);
  });
});
