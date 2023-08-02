import React from "react";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  handleClick: () => void;
}

export const NavButton = (props: Props) => {
  const { path, text, handleClick } = props;
  const { pathname } = useLocation();
  return (
    <Button key={text} variant="text" onClick={handleClick}>
      {text}
    </Button>
  );
};
