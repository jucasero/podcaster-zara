import { SearchInput } from '../SearchInput';
import searchBarStyles from './searchBar.module.css';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onClickFilterButton: () => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, onClickFilterButton }: ISearchBarProps) => {
  const { container, resetButton } = searchBarStyles;
  return (
    <section className={container}>
      <button className={resetButton} type='button' onClick={onClickFilterButton}>
        100
      </button>
      <SearchInput placeholder={'Filter podcasts...'} value={value} onChange={onChange} />
    </section>
  );
};
