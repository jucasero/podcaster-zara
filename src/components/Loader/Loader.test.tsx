import '@testing-library/jest-dom';
import { render } from '../../utils/testUtils';
import { Loader } from './Loader';

describe('<Loader />', () => {
  test('render component', () => {
    const component = render(<Loader />);
    component.getByAltText('loader');
  });
});
