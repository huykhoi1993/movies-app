import React from "react";
import styled from "styled-components";

export default function Header(props: any) {
  return (
    <Container>
      <div className="content">
        <Title>tmdb app</Title>
        <select
          name="language"
          onChange={(e) => props.changeLanguage(e.target.value)}
        >
          <option value="vi-VN">Tiếng Việt</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(3, 37, 65, 1);
  height: 64px;
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;
  .content {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    max-width: var(--maxPrimaryPageWidth);
    width: 100%;
    padding: 0 40px;
  }
`;

const Title = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;
