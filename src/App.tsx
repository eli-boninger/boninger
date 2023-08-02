import React from "react";
import { Home } from "./pages/home/Home";
import { css } from "@emotion/react";
import { Box, Container, useMediaQuery } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { theme } from "./theme";
import { Nav } from "./components/Nav";

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
    <Box css={appBox} bgcolor={"secondary.main"}>
      <Container maxWidth="lg" css={appContainer}>
        <Nav />
        <Home />
        <Outlet />
      </Container>
    </Box>
  );
};
