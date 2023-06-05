import React, { useEffect, useState } from 'react';
import { getCast } from 'Api/cast-api';
import { useParams } from 'react-router-dom';
import defaultImage from '../../images/actor.jpg';
import Loader from 'components/Loader/Loader';
import {
  StyledImg,
  StyledActorItem,
  StyledActorList,
  StyledActorDescr,
} from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);

    getCast(movieId)
      .then(data => {
        const actors = data.cast.map(
          ({ cast_id, profile_path, name, character }) => {
            let imgPath = '';

            if (profile_path !== null) {
              imgPath = `${BASE_IMG_URL}${profile_path}`;
            } else {
              imgPath = defaultImage;
            }

            return {
              cast_id,
              imgPath,
              name,
              character,
            };
          }
        );

        setCastInfo(actors);
      })
      .catch(error => console.log(error.message))
      .finally(setIsLoader(false));
  }, [movieId]);

  return (
    <div>
      {isLoader && <Loader />}
      <StyledActorList>
        {castInfo.map(({ cast_id, imgPath, name, character }) => (
          <StyledActorItem key={cast_id}>
            <StyledImg src={imgPath} alt={name} />
            <StyledActorDescr>{name}</StyledActorDescr>
            <StyledActorDescr>Character: {character}</StyledActorDescr>
          </StyledActorItem>
        ))}
      </StyledActorList>
    </div>
  );
};

export default Cast;
