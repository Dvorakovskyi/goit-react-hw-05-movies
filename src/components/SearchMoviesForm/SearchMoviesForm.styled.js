import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
`;

export const StyledFormBtn = styled.button`
  display: inline-block;
  padding: 0;
  width: 60px;
  height: 34px;
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid black;
  color: black;
  background-color: #fff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://img.icons8.com/?size=512&id=59878&format=png');
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    border: 2px solid #d12b19;
    color: #d12b19;
  }
`;

export const StyledInput = styled.input`
  margin-right: 10px;
  display: inline-block;
  width: 300px;
  height: 30px;
  font: inherit;
  font-size: 18px;
  border: 2px solid #d12b19;
  border-radius: 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;