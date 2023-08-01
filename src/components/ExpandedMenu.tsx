import React from "react";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Route } from "./Routes";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "./ReturnButton";
import { NavButton } from "./NavButton";

interface Props {
  links: Route[];
}

export const ExpandedMenu = (props: Props) => {
  const { links } = props;
  const navigate = useNavigate();

  return (
    <div css={{ display: "flex", justifyContent: "space-between" }}>
      <ReturnButton />
      <div>
        {links.map((route: Route) => (
          <NavButton
            key={route.text}
            handleClick={() => navigate(route.path)}
            path={route.path}
            text={route.text}
          />
        ))}
      </div>
    </div>
  );
};
