import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'Services/API';
import css from '../Cast/Cast.module.css';
import noImage from '../../images/1200px-No-Image-Placeholder.svg.png';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    API.FeatchCast(movieId).then(res => setCast(res.cast));
  }, []);
  return (
    <>
      <h2>Cast</h2>
      <ul className={css.list}>
        {cast &&
          cast.map(({ id, profile_path, name }) => (
            <li key={id} className={css.item}>
              <img
                className={css.img}
                width="150"
                src={profile_path ? `${BASE_URL}${profile_path}` : noImage}
                alt={name}
              />
              <p>{name}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
