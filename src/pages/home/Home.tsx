import { Box, Fade, Typography } from "@mui/material";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { HomeButtonGroup } from "./HomeButtonGroup";
import { theme } from "../../theme";

const titleStyle = css({
  paddingTop: "0.5rem",
  marginLeft: "0.5rem",
  marginBottom: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    marginBottom: 0
  }
});

const buttonGroup = css({
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left'
  }
})

export const Home = () => {
  useEffect(() => {
    document.title = "Eli Boninger | Site Home";
  }, []);

  return (
    <Fade timeout={{ enter: 750, exit: 0 }} in>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          paddingTop: "6rem",
          gap: "1rem",
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left'
          }
        })}
      >
        <Typography css={titleStyle}>
          Eli Boninger is a web developer and musician living in New Rochelle, New York.
        </Typography>
        <div css={buttonGroup}>
          <HomeButtonGroup />
        </div>
      </Box>
    </Fade>
  );
};
