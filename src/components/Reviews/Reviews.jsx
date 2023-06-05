import React, { useEffect, useState } from 'react';
import { getReviews } from 'Api/reviews-api';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledReviewItem, StyledAuthor } from './Reviews.styled';

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
            <StyledReviewItem key={id}>
              <StyledAuthor>Author: {author}</StyledAuthor>
              <p>{content}</p>
            </StyledReviewItem>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
