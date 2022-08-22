import { render, screen } from '../../utils/testUtils';
import { episodeListTableMock } from '../../mocks/tests';
import { EpisodesTableCard } from './EpisodesTableCard';

describe('<EpisodesTableCard />', () => {
  test('render component', () => {
    render(<EpisodesTableCard episodeList={episodeListTableMock} />);
    expect(screen.getByText(episodeListTableMock[0].title)).toBeInTheDocument();
    expect(screen.getByText(episodeListTableMock[0].date)).toBeInTheDocument();
    expect(screen.getByText(episodeListTableMock[0].duration)).toBeInTheDocument();
  });
});
