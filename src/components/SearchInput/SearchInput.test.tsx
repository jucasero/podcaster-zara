import { vi } from 'vitest';
import { fireEvent, render, screen } from '../../utils/testUtils';
import { SearchInput } from './SearchInput';

describe('<SearchInput />', () => {
  test('render component', () => {
    render(<SearchInput value='any value' placeholder='any placeholder' onChange={() => {}} />);
    expect(screen.getByDisplayValue('any value')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('any placeholder')).toBeInTheDocument();
  });

  test('it should execute the onChage function', () => {
    const onChangeMock = vi.fn();
    render(<SearchInput value='any value' placeholder='any placeholder' onChange={onChangeMock} />);
    fireEvent.change(screen.getByPlaceholderText('any placeholder'), { target: { value: 'song' } });
    expect(onChangeMock).toBeCalled();
  });
});
