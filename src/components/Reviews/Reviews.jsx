import React, { useEffect, useState } from 'react';
import { getReviews } from 'Api/reviews-api';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);

    getReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => console.log(error.message))
      .finally(setIsLoader(false));
  }, [movieId]);

  return (
    <div>
      {isLoader && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              Author: {author}
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
