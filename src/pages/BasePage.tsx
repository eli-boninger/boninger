import { Button, Fade, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BasePage = (props: Props) => {
  const { title, children } = props;
  const { pathname } = useLocation();

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
