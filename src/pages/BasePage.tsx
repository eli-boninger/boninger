import { Button, Fade, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BasePage = (props: Props) => {
  const { title, children } = props;
  const navigate = useNavigate();
  return (
    <Fade in timeout={1000} style={{ transitionDelay: "1000ms" }}>
      <div>
        <Button
          variant="text"
          onClick={() => navigate("/")}
          color="secondary"
          startIcon={<NavigateBeforeIcon color="secondary" />}
        >
          Return
        </Button>
        <Typography
          variant="h4"
          color="secondary.light"
          style={{ marginBottom: "1rem" }}
        >
          {title}
        </Typography>
        {children}
      </div>
    </Fade>
  );
};
