import { render, screen, waitFor } from '../../utils/testUtils';
import { Home } from './Home';

describe('<Home />', () => {
  test('render component', () => {
    render(<Home />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('it should show that no results were found and after the change in the store show them', async () => {
    render(<Home />);
    expect(screen.getByText('No se encontraron resultados para la búsqueda')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText('R&B Money - The Black Effect and iHeartPodcasts')).toBeInTheDocument()
    );
  });
});
