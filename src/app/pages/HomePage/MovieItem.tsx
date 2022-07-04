import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie, ...props }: any) {
  const [loadedImage, setLoadedImage] = useState(false);

  return (
    <Container {...props}>
      <MovieImage
        src={
          loadedImage
            ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
            : "https://critics.io/img/movies/poster-placeholder.png"
        }
        onLoad={() => setLoadedImage(true)}
      />
      <MovieContent>
        <h4 className="title">{movie.title}</h4>
        <p className="date-time">
          {new Date(movie.release_date).toLocaleDateString()}
        </p>
      </MovieContent>
    </Container>
  );
}

const Container = styled(Link)`
  background-color: #fff;
  border-radius: 0.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  text-decoration: none;
  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 320px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const MovieContent = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  h4.title {
    margin: 0;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: #000;
  }
  p.date-time {
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;
