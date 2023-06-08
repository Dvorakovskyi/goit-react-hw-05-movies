import styled from 'styled-components';
import { StyledTitle } from 'components/TrendingList/MovieList.styled';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;

export const StyledMovieTitle = styled(StyledTitle)`
  margin-bottom: 20px;
`;

export const StyledSecondTitle = styled.h3`
  margin: 20px 0;
`;

export const StyledBackBtn = styled.button`
  text-decoration: none;
  padding: 5px 10px;
  font-weight: 700;
  border-radius: 4px;
  border: 2px solid black;
  color: black;
  background-color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #d12b19;
    color: #d12b19;
  }
`;
