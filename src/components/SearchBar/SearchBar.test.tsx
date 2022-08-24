import { vi } from 'vitest';
import { fireEvent, render, screen } from '../../utils/testUtils';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
  test('render component', () => {
    render(<SearchBar value='any value' onChange={() => {}} onClickFilterButton={() => {}} />);
    expect(screen.getByDisplayValue('any value')).toBeInTheDocument();
  });

  test('it should execute the onClick and onChage functions', () => {
    const onClickMock = vi.fn();
    const onChangeMock = vi.fn();
    render(<SearchBar value='any value' onChange={onChangeMock} onClickFilterButton={onClickMock} />);
    fireEvent.click(screen.getByText('100'));
    expect(onClickMock).toBeCalledTimes(1);
    fireEvent.change(screen.getByPlaceholderText('Filter podcasts...'), { target: { value: 'song' } });
    expect(onChangeMock).toBeCalled();
  });
});
