import searchInputStyles from './searchInput.module.css';

interface ISearchInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ placeholder, value, onChange }: ISearchInputProps) => (
  <input
    className={searchInputStyles.searchInput}
    type='search'
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  ></input>
);
