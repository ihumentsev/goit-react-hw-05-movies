import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'Services/API';
import {
  Link,
  Outlet,
  useParams,
  NavLink,
  useLocation,
} from 'react-router-dom';
import css from '../MovieDetails/MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  console.log(location.state);
  console.log(movieId);

  const setActiveLink = ({ isActive }) => {
    return !isActive ? css.navLink : `${css.navLink} ${css.active}`;
  };

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const genrs = movie.genres && movie.genres.map(genr => genr.name).join(', ');

  useEffect(() => {
    API.FeatchMovieDetails(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={css.container}>
          <Link to={location.state?.from ?? '/movies'} className={css.link}>
            &#8634; Back
          </Link>
          <div className={css.wraper}>
            <div className={css.deteils}>
              <img
                width="400"
                className={css.img}
                src={`${BASE_URL}${movie.poster_path}`}
                alt={movie.title ?? movie.name}
              ></img>
            </div>

            <div className={css.textContent}>
              <h2>{movie.title ?? movie.name}</h2>
              <h3>Overview:</h3>
              <p className={css.text}>{movie.overview}</p>
              <h3>Genres:</h3>
              <p>{genrs}</p>
            </div>
          </div>
          <div>
            <NavLink to="cast" className={setActiveLink}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={setActiveLink}>
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
