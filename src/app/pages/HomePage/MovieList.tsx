import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

export default function MovieList({ movies }: any) {

  return (
    <Container>
      {movies.map((movie: any) => (
        <MovieItem key={movie.id} to={`/movie/${movie.id}`} movie={movie} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 1050px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
`;
