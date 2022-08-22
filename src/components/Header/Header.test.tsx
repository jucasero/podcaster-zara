import { getPodcastInfoById, getPodcasts } from '../../state/features/podcast/thunk';
import { setupStore } from '../../state/store';
import { render, screen } from '../../utils/testUtils';
import { Header } from './Header';

describe('<Header />', () => {
  test('render component', () => {
    const titleTest = 'test título';
    render(<Header title={titleTest} />);
    expect(screen.getByText(titleTest)).toBeInTheDocument();
  });

  test('it should show the loader', async () => {
    const store = setupStore();
    store.dispatch(getPodcasts());
    store.dispatch(getPodcastInfoById('12345'));
    render(<Header title='titulo' />, { store });
    expect(screen.getByAltText('loader')).toBeInTheDocument();
  });
});
