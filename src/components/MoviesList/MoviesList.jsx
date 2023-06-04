import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={location}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
