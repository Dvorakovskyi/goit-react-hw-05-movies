import React from 'react';
import { useState } from 'react';

const MoviesPage = () => {
    const [request, setRequest] = useState('');

    const handlChangeForm = (event) => {
        const { value } = event.currentTarget;

        setRequest(value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        setRequest('');
    }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={request}
        onChange={handlChangeForm}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesPage;
