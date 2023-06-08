import React, { useState, useEffect, Suspense } from 'react';
import { Notify } from 'notiflix';
import { fetchMovieDetails } from 'Api/movie-details-api';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import {
  StyledSection,
  StyledList,
} from 'components/TrendingList/MovieList.styled';
import { StyledBackBtn } from 'components/MovieCard/MovieCard.styled';
import {
  StyledItem,
  StyledLink,
} from 'components/TrendingList/MovieItem/MovieItem.styled';
import { StyledReviewsWrapper } from 'components/Reviews/Reviews.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <StyledBackBtn type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </StyledBackBtn>
      <MovieCard movieInfo={movieInfo} />
      <StyledReviewsWrapper>
        <h3>Additional information</h3>
        <StyledList>
          <StyledItem>
            <StyledLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledLink>
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
