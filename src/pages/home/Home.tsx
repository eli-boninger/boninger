import { Fade, Typography } from "@mui/material";
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
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: "6rem",
          gap: "1rem",
        }}
      >
        <Typography css={titleStyle} color="primary">
          Eli Boninger is a web developer and musician living in New Rochelle, New York.
        </Typography>
        <div css={buttonGroup}>
          <HomeButtonGroup />
        </div>

      </div>
    </Fade>
  );
};
