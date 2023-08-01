import React from "react";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Route } from "./Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { ReturnButton } from "./ReturnButton";

interface Props {
  links: Route[];
}

export const HamburgerMenu = (props: Props) => {
  const { links } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCLick = (route: string) => {
    setAnchorEl(null);
    navigate(route);
  };

  return (
    <div css={{ display: "flex", justifyContent: "space-between" }}>
      <ReturnButton />
      <IconButton
        id="nav-button"
        aria-controls={open ? "nav-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon color="secondary" />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "nav-button",
        }}
        css={css`
          .MuiMenu-list {
            min-width: 7rem;
          }
        `}
      >
        {links.map((link) => (
          <MenuItem
            key={link.text}
            onClick={() => handleCLick(link.path)}
            selected={pathname === link.path}
          >
            {link.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
