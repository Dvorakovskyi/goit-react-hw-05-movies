import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from 'components/TrendingList/MovieList.styled';
import {
  StyledFormBtn,
  StyledInput,
  StyledForm,
} from './SearchMoviesForm.styled';

const SearchMoviesForm = ({ onSubmit, request }) => {
  const handleSubmitForm = event => {
    event.preventDefault();

    const searchString = event.currentTarget.elements.search.value;

    onSubmit(searchString);
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={request}
        />
        <StyledFormBtn type="submit"></StyledFormBtn>
      </StyledForm>
    </StyledSection>
  );
};

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  request: PropTypes.string,
};

export default SearchMoviesForm;
