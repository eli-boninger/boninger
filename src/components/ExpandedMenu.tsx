import React from "react";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "./Links";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

interface Props {
  links: Link[];
}

export const ExpandedMenu = (props: Props) => {
  const { links } = props;
  const navigate = useNavigate();

  return (
    <div css={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="text"
        onClick={() => navigate("/")}
        color="secondary"
        startIcon={<NavigateBeforeIcon color="secondary" />}
      >
        Return
      </Button>
      <div>
        {links.map((link: Link) => (
          <Button
            key={link.text}
            color="secondary"
            variant="text"
            onClick={() => navigate(link.route)}
          >
            {link.text}
          </Button>
        ))}
      </div>
    </div>
  );
};
