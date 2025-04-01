import { Fade, Typography } from "@mui/material";
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
      <section>
        <Typography
          variant="h1"
          style={{ margin: "1rem 0" }}
          sx={{
            color: "info.main"
          }}
        >
          {title}
        </Typography>
        {children}
      </section>
    </Fade>
  );
};
