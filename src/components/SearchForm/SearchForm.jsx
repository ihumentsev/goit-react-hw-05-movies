import { MdVideoLibrary } from 'react-icons/md';
import { useEffect, useState } from 'react';
import css from '../SearchForm/SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [searching, setSearching] = useState('');

  const handlerSearchChange = event => {
    setSearching(event.target.value);
  };
  const handlFormSubmit = event => {
    event.preventDefault();
    onSubmit(searching);
    setSearching('');
  };
  return (
    <form onSubmit={handlFormSubmit} className={css.SearchForm}>
      <button type="submit" className={css.button}>
        <MdVideoLibrary className={css.react_icons} />
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Please enter movie name"
        value={searching}
        onChange={handlerSearchChange}
      />
    </form>
  );
};
