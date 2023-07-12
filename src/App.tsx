import React from "react";
import { Header } from "./components/Header";
import { css } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const appBox = css({
  backgroundColor: "#393E41",
  height: "100vh",
  width: "100%",
});

const appContainer = css({
  padding: "8px",
});

export const App = () => {
  return (
    <Box css={appBox}>
      <Container maxWidth="lg" css={appContainer}>
        <motion.div
          animate={{ opacity: 1, marginTop: 8 }}
          initial={{ opacity: 0, marginTop: -100 }}
          transition={{ opacity: { delay: 0.75 }, marginTop: { duration: 1 } }}
        >
          <Header />
        </motion.div>
        <Outlet />
      </Container>
    </Box>
  );
};
