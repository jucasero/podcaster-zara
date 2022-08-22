import { render, screen } from '../../utils/testUtils';
import { Loader } from './Loader';

describe('<Loader />', () => {
  test('render component', () => {
    render(<Loader />);
    expect(screen.getByAltText('loader')).toBeInTheDocument();
  });
});
