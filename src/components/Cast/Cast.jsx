import React, { useEffect, useState } from 'react';
import { getCast } from 'Api/cast-api';
import { useParams } from 'react-router-dom';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => {
        setCastInfo(data.cast);

        console.log(data)

        console.log(castInfo);
    });
  }, [movieId]);

  return <div>cast</div>;
};

export default Cast;
