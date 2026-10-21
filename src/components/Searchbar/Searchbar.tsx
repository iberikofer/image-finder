import { useState } from 'react';
import type { FC, FormEvent, ChangeEvent } from 'react';
import css from './Searchbar.module.css';

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

export const Searchbar: FC<SearchbarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <h1 className={css.srOnly}>React Image Finder</h1>
      <form className={css.searchForm} onSubmit={handleSubmit} role="search">
        <button
          type="submit"
          className={css.searchFormButton}
          aria-label="Search images"
        >
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          name="queryInput"
          className={css.searchFormInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          aria-label="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
