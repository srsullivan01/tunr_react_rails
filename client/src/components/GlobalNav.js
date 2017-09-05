import React from "react";
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Nav = styled.div`
  background-color: #789e4f;
  color: #c17a05;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%
  box-shadow: 0px 1px 6px black;
    a{
      text-decoration: none;
      margin: 0 5px;
      &:visited{
        color: white;
      }
    }
`

const GlobalNav = () => {
return (
  <Nav>
    <Link to="/">
    <h1>Tunr</h1></Link>
    <div>
      <Link to="/artists/1">Artists</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </Nav>
  );
};

export default GlobalNav;
