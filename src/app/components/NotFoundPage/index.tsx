import * as React from 'react';
import styled from 'styled-components/macro';

export function NotFoundPage() {
  return (
    <Wrapper>
      <Title>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Title>
      <P>Page not found.</P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: black;
  margin: 0.625rem 0 1.5rem 0;
`;

