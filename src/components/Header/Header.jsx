import React from 'react';
import { StyledNavLink, StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
