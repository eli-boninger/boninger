import { Fade, Typography } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeButtonGroup } from "./HomeButtonGroup";

const titleStyle = css({
  paddingTop: "0.5rem",
  marginLeft: "0.5rem",
});

export const Home = () => {
  const { pathname } = useLocation();
  const isRootPath = pathname === "/";

  return (
    <Fade timeout={1000} unmountOnExit in={isRootPath}>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        <Typography css={titleStyle} color="primary">
          Eli Boninger is a web developer and musician living in Boston.
        </Typography>
        <HomeButtonGroup />
      </div>
    </Fade>
  );
};
