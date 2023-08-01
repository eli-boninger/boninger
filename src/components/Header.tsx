import {
  Button,
  ButtonGroup,
  Fade,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, Links } from "./Links";
import { useLinks } from "../hooks/useLinks";
import { theme } from "../theme";

const titleStyle = css({
  paddingTop: "0.5rem",
  marginLeft: "0.5rem",
});

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isRootPath = pathname === "/";
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Slide
      appear={false}
      in={isRootPath}
      enter={false}
      unmountOnExit
      timeout={1000}
    >
      <Fade in timeout={3000}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <Typography css={titleStyle} color="secondary">
            Eli Boninger is a web developer and musician living in Boston.
          </Typography>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="Navigation options button group"
          >
            {Links.filter((link) => link.route !== "/").map((link: Link) => (
              <Button
                size={isSmallScreen ? "large" : "medium"}
                key={link.text}
                onClick={() => navigate(link.route)}
              >
                {link.text}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Fade>
    </Slide>
  );
};
