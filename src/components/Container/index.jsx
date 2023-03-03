import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
  }
`;

export const Container = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
