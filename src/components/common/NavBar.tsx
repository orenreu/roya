import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUl = styled.ul`
  li {
    display: inline;
    margin-right: 20px;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <StyledUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </StyledUl>
    </Nav>
  );
};

export default NavBar;
