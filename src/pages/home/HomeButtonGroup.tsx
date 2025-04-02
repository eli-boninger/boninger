import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { Route, Routes } from "../../components/Routes";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

export const HomeButtonGroup = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ButtonGroup variant="text" aria-label="Navigation options button group">
      {Routes.filter((link) => link.path !== "/").map((link: Route) => (
        <Button
          size={isSmallScreen ? "large" : "medium"}
          key={link.text}
          component={Link}
          role="link"
          to={link.path}
        >
          {link.text}
        </Button>
      ))}
    </ButtonGroup>
  );
};
