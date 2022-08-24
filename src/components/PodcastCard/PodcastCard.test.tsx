import { vi } from 'vitest';
import { fireEvent, render, screen } from '../../utils/testUtils';
import { PodcastCard } from './PodcastCard';

describe('<PodcastCard />', () => {
  test('render component', () => {
    render(<PodcastCard title='title' author='author' imageURL='imageurl' onClick={() => {}} />);
    expect(screen.getByAltText('title')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('Author: author')).toBeInTheDocument();
  });

  test('a function should be executed when the component is clicked', () => {
    const mockFuntion = vi.fn();
    render(<PodcastCard title='title' author='author' imageURL='imageurl' onClick={mockFuntion} />);
    fireEvent.click(screen.getByText('title'));
    expect(mockFuntion).toBeCalledTimes(1);
  });
});
