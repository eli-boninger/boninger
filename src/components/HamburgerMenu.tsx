import React from "react";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "./Links";
import { useNavigate } from "react-router-dom";

interface Props {
  links: Link[];
}

export const HamburgerMenu = (props: Props) => {
  const { links } = props;
  const navigate = useNavigate();
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
    <div css={{ display: "flex", justifyContent: "end" }}>
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
          <MenuItem key={link.text} onClick={() => handleCLick(link.route)}>
            {link.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
