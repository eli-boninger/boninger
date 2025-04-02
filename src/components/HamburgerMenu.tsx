import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Route } from "./Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { ReturnButton } from "./ReturnButton";
import { useState } from "react";

interface Props {
  links: Route[];
}

export const HamburgerMenu = (props: Props) => {
  const { links } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAnchorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (route: string) => {
    setAnchorEl(null);
    navigate(route);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ReturnButton />
      <IconButton
        id="nav-button"
        aria-controls={open ? "nav-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleAnchorClick}
      >
        <MenuIcon sx={{ color: 'primary.main' }} />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ list: { "aria-labelledby": "nav-button" } }}
        sx={{
          ['& .MuiMenu-list']: {
            minWidth: '7rem'
          }
        }}
      >
        {links.map((link) => (
          <MenuItem
            key={link.text}
            onClick={() => handleItemClick(link.path)}
            selected={pathname === link.path}
          >
            {link.text}
          </MenuItem>
        ))}
      </Menu>
    </Box >
  );
};
