import { Box, Fade, useMediaQuery } from "@mui/material";
import { HamburgerMenu } from "./HamburgerMenu";
import { Routes } from "./Routes";
import { ExpandedMenu } from "./ExpandedMenu";
import { useTheme } from '@mui/material/styles'

export const Nav = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const nonHomeRoutes = Routes.filter((r) => r.path !== '/');
  return (
    <Fade timeout={500} in>
      <Box component='nav' sx={
        {
          position: 'sticky',
          top: 0,
          bgcolor: theme.palette.background.default,
          zIndex: 10,
          padding: '0.5rem 0'
        }}>
        {isSmallScreen ? (
          <HamburgerMenu links={nonHomeRoutes} />
        ) : (
          <ExpandedMenu links={nonHomeRoutes} />
        )}
      </Box>
    </Fade>
  );
};
