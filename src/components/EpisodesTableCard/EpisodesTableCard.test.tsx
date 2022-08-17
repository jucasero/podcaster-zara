import '@testing-library/jest-dom';
import { episodeListTableMock } from '../../mocks/tests';
import { render } from '../../utils/testUtils';
import { EpisodesTableCard } from './EpisodesTableCard';

describe('<EpisodesTableCard />', () => {
  test('render component', () => {
    const component = render(<EpisodesTableCard episodeList={episodeListTableMock} />);
    component.getByText(episodeListTableMock[0].title);
    component.getByText(episodeListTableMock[0].date);
    component.getByText(episodeListTableMock[0].duration);
  });
});
