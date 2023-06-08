import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from 'components/TrendingList/MovieList.styled';
import { StyledFormBtn, StyledInput, StyledForm } from './SearchMoviesForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchMoviesForm = ({ onSubmit }) => {
    const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query');

  const handlChangeForm = event => {
    const { value } = event.currentTarget;

    setSearchParams({query: value})
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    onSubmit(request);
  };

  return (
    <StyledSection>
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        defaultValue={request}
        onChange={handlChangeForm}
      />
      <StyledFormBtn type="submit"></StyledFormBtn>
      </StyledForm>
      </StyledSection>
  );
};

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMoviesForm;
