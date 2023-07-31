import { Button, ButtonGroup, Fade, Slide, Typography } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

const titleStyle = css({
  paddingTop: "0.5rem",
  marginLeft: "0.5rem",
});

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isRootPath = pathname === "/";

  return (
    <Slide
      appear={false}
      in={isRootPath}
      enter={false}
      unmountOnExit
      timeout={1000}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <Typography css={titleStyle} color="secondary">
          Eli Boninger is a web developer and musician living in Boston.
        </Typography>
        <Fade in timeout={5000}>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="Navigation options button group"
          >
            <Button onClick={() => navigate("/work")}>Bio</Button>
            <Button onClick={() => navigate("/music")}>Music</Button>
            <Button>Miscellaneous</Button>
          </ButtonGroup>
        </Fade>
      </div>
    </Slide>
  );
};
