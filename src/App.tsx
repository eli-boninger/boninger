import { css } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { Outlet, useMatch } from "react-router-dom";
import { Nav } from "./components/Nav";

const appBox = css({
  minHeight: "100vh",
  width: "100%",
});

const appContainer = css({
  padding: "0 0.5rem 0.5rem 0.5rem",
});

export const App = () => {
  const match = useMatch('/')
  return (
    <Box css={appBox} sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg" css={appContainer}>
        {!match && <Nav />}
        <Outlet />
      </Container>
    </Box>
  );
};
