import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const Layout = ({ children }) => {

  const location = useLocation();
  const showNavFooter =
    location.pathname !== '/login/' &&
    location.pathname !== '/login'

  return (
    <Container>
      {showNavFooter && <Sidebar />}
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Layout;