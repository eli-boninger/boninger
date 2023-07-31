import React from "react";
import { Header } from "./components/Header";
import { css } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const appBox = css({
  height: "100%",
  minHeight: "100vh",
  width: "100%",
});

const appContainer = css({
  padding: "0.5rem",
});

export const App = () => {
  return (
    <Box css={appBox} bgcolor={"primary.main"}>
      <Container maxWidth="lg" css={appContainer}>
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
};
