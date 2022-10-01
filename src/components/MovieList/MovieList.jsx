import { Link, useLocation } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css';
import noImage from '../../images/1200px-No-Image-Placeholder.svg.png';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
            <img
              className={css.img}
              src={
                movie.poster_path ? `${BASE_URL}${movie.poster_path}` : noImage
              }
              alt={movie.title ?? movie.name}
            />
            <div className={css.wraper}>
              <h3 className={css.title}>{movie.title ?? movie.name}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
