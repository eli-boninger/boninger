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
      timeout={750}
      unmountOnExit
      onExit={() => console.log("exiting")}
    >
      <section>
        <Typography
          variant="h1"
          color="info.main"
          style={{ margin: "1rem 0" }}
        >
          {title}
        </Typography>
        {children}
      </section>
    </Fade>
  );
};
