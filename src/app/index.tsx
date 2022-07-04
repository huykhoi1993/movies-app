import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { axios } from "../libs/axios";
import { GlobalStyle } from "../styles/global-styles";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [language, setLanguage] = useState(axios.defaults.params.language);

  function changeLanguage(language: string) {
    setLanguage(language);
    axios.defaults.params.language = language;
  }

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <Content>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <HomePage language={language} />}
            />
            <Route path="/movie/:id" component={DetailPage} />
            <Route component={() => <p>NotFoundPage</p>} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: pink;
  margin-top: 64px;
`;
