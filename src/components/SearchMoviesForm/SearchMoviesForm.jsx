import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledSection } from 'components/TrendingList/TrendingList.styled';
import { StyledFormBtn, StyledInput, StyledForm } from './SearchMoviesForm.styled';

const SearchMoviesForm = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handlChangeForm = event => {
    const { value } = event.currentTarget;

    setRequest(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    onSubmit(request);

    setRequest('');
  };

  return (
    <StyledSection>
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={request}
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
