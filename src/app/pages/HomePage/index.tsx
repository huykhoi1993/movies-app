import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axios } from "../../../libs/axios";
import MovieList from "./MovieList";

export default function HomePage(props: any) {
  const { language } = props;
  const [mode, setMode] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  function getMovieList() {
    axios
      .get(`/movie/${mode}`, {
        params: {
          page,
        },
      })
      .then((res) => {
        setMovies(
          (prevMovies) => [...prevMovies, ...res.data.results] as never
        );
      });
  }

  function changeMode(mode: string) {
    setMovies([]);
    setPage(1);
    setMode(mode);
  }

  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, page, language]);

  return (
    <Container>
      <Tabs>
        <Tab
          active={mode === "now_playing"}
          onClick={() => {
            changeMode("now_playing");
          }}
        >
          now playing
        </Tab>
        <Tab
          active={mode === "top_rated"}
          onClick={() => {
            changeMode("top_rated");
          }}
        >
          top rated
        </Tab>
      </Tabs>
      <MovieList movies={movies} />
      <LoadMore onClick={() => setPage((page) => page + 1)}>load more</LoadMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`;

const Tabs = styled.ul`
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  list-style-type: none;
  border-bottom-width: 1px;
  padding-inline-start: 0;
  margin-block-start: 0;
`;

const Tab = styled.li<{
  active?: boolean;
}>`
  text-transform: capitalize;
  margin-bottom: -1px;
  display: block;
  font-size: 0.875rem;
  padding-inline-start: 1.25rem;
  padding-inline-end: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    color: #319795;
    border-color: #319795;
  `}
`;

const LoadMore = styled.div`
  margin-top: 30px;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: rgb(1, 180, 228);
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: rgb(0, 0, 0);
  }
`;
