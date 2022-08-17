import '@testing-library/jest-dom';
import { render } from '../../utils/testUtils';
import { Header } from './Header';

describe('<Header />', () => {
  test.only('render component', () => {
    const titleTest = 'test título';
    const component = render(<Header title={titleTest} />);
    component.getByText(titleTest);
  });
});
