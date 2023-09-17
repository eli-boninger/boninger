import { Button, Fade, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BasePage = (props: Props) => {
  const { title, children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `Eli Boninger | ${title}`;
  }, []);

  return (
    <Fade
      in={pathname !== "/"}
      timeout={1000}
      style={{ transitionDelay: "1000ms" }}
      unmountOnExit
      onExit={() => console.log("exiting")}
    >
      <div>
        <Typography
          variant="h4"
          color="info.main"
          style={{ marginBottom: "1rem" }}
        >
          {title}
        </Typography>
        {children}
      </div>
    </Fade>
  );
};
