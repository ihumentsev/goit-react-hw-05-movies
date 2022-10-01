import { useEffect, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
import css from '../Home/Home.module.css';
import * as API from 'Services/API';
import { MovieList } from 'components/MovieList/MovieList';
export default function Home() {
  const [movies, setMuvies] = useState([]);

  useEffect(() => {
    API.fetchTrendMovies().then(res => {
      setMuvies(res.results);
    });
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
