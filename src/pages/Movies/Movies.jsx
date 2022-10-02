import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'Services/API';
import { useSearchParams } from 'react-router-dom';
import css from '../Movies/Movies.module.css';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';

export default function Movies() {
  const [query, setQuery] = useState(null);
  const [movies, setMuvies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searching = searchParams.get('query') ?? '';

  if (query === null) {
    setQuery(searching);
  }

  const handlFormSubmit = query => {
    setQuery(query);
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (query === '') return;
    API.FeatchSearchMovies(query).then(res => setMuvies(res.results));
  }, [query]);

  if (query === '') {
    return (
      <>
        <h1 className={css.container}>
          Name search
          <SearchForm onSubmit={handlFormSubmit} searchingValue={searching} />
        </h1>
      </>
    );
  }

  return (
    <>
      <h1 className={css.container}>
        Name search
        <SearchForm onSubmit={handlFormSubmit} />
      </h1>
      <MovieList movies={movies} />
    </>
  );
}
