import { AppRoutes } from '../../constants/Routes';
import { getPodcastInfoById, getPodcasts } from '../../state/features/podcast/thunk';
import { setupStore } from '../../state/store';
import { fireEvent, render, screen } from '../../utils/testUtils';
import { Header } from './Header';

describe('<Header />', () => {
  const titleTest = 'test título';

  test('render component', () => {
    render(<Header title={titleTest} />);
    expect(screen.getByText(titleTest)).toBeInTheDocument();
  });

  test('it should go to the root path when click on the header', () => {
    render(<Header title={titleTest} />);
    fireEvent.click(screen.getByText(titleTest));
    expect(location.pathname).toBe(AppRoutes.root);
  });

  test('it should show the loader when there is a dispatch from a service', async () => {
    render(<Header title={titleTest} />);
    expect(screen.queryByAltText('loader')).not.toBeInTheDocument();
    const store = setupStore();
    store.dispatch(getPodcasts());
    store.dispatch(getPodcastInfoById('12345'));
    render(<Header title={titleTest} />, { store });
    expect(screen.getByAltText('loader')).toBeInTheDocument();
  });
});
