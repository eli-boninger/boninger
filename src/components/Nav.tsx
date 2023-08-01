import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button, Fade, useMediaQuery } from "@mui/material";
import { theme } from "../theme";
import { HamburgerMenu } from "./HamburgerMenu";
import { Link, Links } from "./Links";
import { useLocation, useNavigate } from "react-router-dom";
import { useLinks } from "../hooks/useLinks";
import { ExpandedMenu } from "./ExpandedMenu";

export const Nav = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isIn, setIsIn] = useState(pathname !== "/");
  const inactiveLinks = useLinks();

  useEffect(() => {
    if (!isIn && pathname !== "/") {
      setTimeout(() => setIsIn(true), 1000);
    } else {
      setIsIn(pathname !== "/");
    }
  }, [pathname]);

  return (
    <Fade in={isIn} timeout={1000}>
      <div>
        {isSmallScreen ? (
          <HamburgerMenu links={inactiveLinks} />
        ) : (
          <ExpandedMenu links={inactiveLinks} />
        )}
      </div>
    </Fade>
  );
};
