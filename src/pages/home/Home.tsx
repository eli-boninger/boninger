import { Fade, Typography } from "@mui/material";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { HomeButtonGroup } from "./HomeButtonGroup";

const titleStyle = css({
  paddingTop: "0.5rem",
  marginLeft: "0.5rem",
});

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
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        <Typography css={titleStyle} color="primary">
          Eli Boninger is a web developer and musician living in New Rochelle.
        </Typography>
        <HomeButtonGroup />
      </div>
    </Fade>
  );
};
