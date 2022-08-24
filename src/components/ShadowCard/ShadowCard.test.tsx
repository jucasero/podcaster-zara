import { render, screen } from '../../utils/testUtils';
import { ShadowCard } from './ShadowCard';

describe('<ShadowCard />', () => {
  test('render component', () => {
    render(
      <ShadowCard>
        <p>any children</p>
      </ShadowCard>
    );
    expect(screen.getByText('any children')).toBeInTheDocument();
  });
});
