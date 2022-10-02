import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'Services/API';
import css from '../Reviews/Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.FeatchReviews(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      <ul className={css.list}>
        {reviews &&
          reviews.map(({ author_details, content, id }) => (
            <li key={id} className={css.item}>
              <h3>{`Autor: ${author_details.username}`}</h3>
              <p>
                {author_details.rating
                  ? `Rating: ${author_details.rating}`
                  : 'no rating from this author'}
              </p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
