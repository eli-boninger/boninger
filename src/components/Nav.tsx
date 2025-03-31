import { Fade, useMediaQuery } from "@mui/material";
import { theme } from "../theme";
import { HamburgerMenu } from "./HamburgerMenu";
import { Routes } from "./Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { ExpandedMenu } from "./ExpandedMenu";

export const Nav = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));



  const nonHomeRoutes = Routes.filter((r) => r.path !== '/');
  return (
    <Fade timeout={500} in>
      <nav css={{ position: 'sticky', top: 0 }}>
        <div>
          {isSmallScreen ? (
            <HamburgerMenu links={nonHomeRoutes} />
          ) : (
            <ExpandedMenu links={nonHomeRoutes} />
          )}
        </div>
      </nav>
    </Fade>
  );
};
