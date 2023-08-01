import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button, Fade, useMediaQuery } from "@mui/material";
import { theme } from "../theme";
import { HamburgerMenu } from "./HamburgerMenu";
import { Routes } from "./Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { ExpandedMenu } from "./ExpandedMenu";

export const Nav = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isIn, setIsIn] = useState(pathname !== "/");

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
          <HamburgerMenu links={Routes} />
        ) : (
          <ExpandedMenu links={Routes} />
        )}
      </div>
    </Fade>
  );
};
