import { render, screen } from '../../utils/testUtils';
import { GenericMessage } from './GenericMessage';

describe('<GenericMessage />', () => {
  test('render component', () => {
    render(<GenericMessage title='title' subtitle='subtitle' description='description' />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subtitle')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });
});
