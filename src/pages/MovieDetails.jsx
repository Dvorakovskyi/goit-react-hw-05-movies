import React, { useState, useEffect, Suspense } from 'react';
import { Notify } from 'notiflix';
import { fetchMovieDetails } from 'Api/movie-details-api';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import {
  StyledSection,
  StyledList,
} from 'components/TrendingList/TrendingList.styled';
import { StyledBackBtn } from 'components/MovieCard/MovieCard.styled';
import {
  StyledItem,
  StyledLink,
} from 'components/TrendingList/TrendingItem/TrendingItem.styled';
import { StyledReviewsWrapper } from 'components/Reviews/Reviews.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);

    fetchMovieDetails(movieId)
      .then(
        ({
          title,
          poster_path,
          vote_average,
          overview,
          genres,
          release_date,
        }) =>
          setMovieInfo({
            title,
            imgPath: `${BASE_IMG_URL}${poster_path}`,
            userScore: Math.round(vote_average * 10),
            overview,
            releaseDate: release_date.slice(0, 4),
            genres: genres.map(genre => genre.name).join(' '),
          })
      )
      .catch(error => setError(error.message))
      .finally(setIsLoader(false));
  }, [movieId]);

  return (
    <StyledSection>
      {error && Notify.failure('Something went wrong, please try again later')}
      {isLoader && <Loader />}
      <StyledBackBtn to={location.state ?? '/movies'}>Go back</StyledBackBtn>
      <MovieCard movieInfo={movieInfo} />
      <StyledReviewsWrapper>
        <h3>Additional information</h3>
        <StyledList>
          <StyledItem>
            <StyledLink to="cast">Cast</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </StyledItem>
        </StyledList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledReviewsWrapper>
    </StyledSection>
  );
};
export default MovieDetails;
