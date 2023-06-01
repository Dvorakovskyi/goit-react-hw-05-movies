import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to="/">{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
