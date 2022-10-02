import { MdVideoLibrary } from 'react-icons/md';
import { useState } from 'react';
import css from '../SearchForm/SearchForm.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, searchingValue }) => {
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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
