import React from "react";
import { Header } from "./components/Header";
import { css } from "@emotion/react";
import { Box, Container } from "@mui/material";

const appContainer = css({
  backgroundColor: "#393E41",
  height: "100vh",
  width: "100%",
  padding: "8px",
});

export const App = () => {
  return (
    <Box css={appContainer}>
      <Header />
    </Box>
  );
};
