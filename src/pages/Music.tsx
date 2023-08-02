import { Divider, Typography } from "@mui/material";
import React from "react";
import { BasePage } from "./BasePage";
import { css } from "@emotion/react";

const iframeStyles = css({
  border: 0,
  width: "100%",
  height: "120px",
  marginTop: ".5rem",
  marginBottom: "2rem",
});

export const Music = () => (
  <BasePage title="Music">
    <Typography color="primary.light">
      Wae Mel | <i>solo project</i>
    </Typography>
    <Typography color="#B48291">
      All music written, played, recorded, and mixed by me.
    </Typography>
    <iframe
      css={iframeStyles}
      src="https://bandcamp.com/EmbeddedPlayer/album=304322865/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://waemel.bandcamp.com/album/wae-mels-pop-hits">
        Wae Mel&#39;s Pop Hits! by Wae Mel
      </a>
    </iframe>
    <Divider color="#B48291" />
    <Typography color="primary.light" style={{ marginTop: "2rem" }}>
      The Womb Bats | <i>my college rock band</i>
    </Typography>
    <Typography color="#B48291">That's me on the keys.</Typography>
    <iframe
      css={iframeStyles}
      src="https://bandcamp.com/EmbeddedPlayer/track=2118083282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://thewombbats.bandcamp.com/track/shapeshifter">
        Shapeshifter by The Womb Bats
      </a>
    </iframe>
  </BasePage>
);
