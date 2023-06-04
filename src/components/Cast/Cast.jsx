import React, { useEffect, useState } from 'react';
import { getCast } from 'Api/cast-api';
import { useParams } from 'react-router-dom';
import defaultImage from '../../images/actor.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => {
      const actors = data.cast.map(
        ({ cast_id, profile_path, name, character }) => {
          let imgPath = '';

          if (profile_path !== null) {
            imgPath = `${BASE_IMG_URL}${profile_path}`;
          } else {
            imgPath = defaultImage;
          };
          
          return {
            cast_id,
            imgPath,
            name,
            character,
          };
        }
      );

      setCastInfo(actors);
    }).catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <ul>
        {castInfo.map(({ cast_id, imgPath, name, character }) => (
          <li key={cast_id}>
            <img src={imgPath} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
