import { Box, Fade, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BasePage = (props: Props) => {
  const { title, children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `Eli Boninger | ${title}`;
  }, [title]);

  return (
    <Fade
      in={pathname !== "/"}
      timeout={750}
      unmountOnExit
      onExit={() => console.log("exiting")}
    >
      <Box component="section" sx={{ m: 1 }}>
        <Typography
          variant="h1"
          sx={{ m: "1rem 0" }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Fade>
  );
};
