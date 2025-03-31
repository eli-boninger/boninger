import { Divider, Link, Typography } from "@mui/material";
import React from "react";
import { BasePage } from "./BasePage";
import { css } from "@emotion/react";

const iframeStyles = css({
  border: 0,
  width: "100%",
  maxWidth: "700px",
  height: "120px",
  marginTop: ".5rem",
  marginBottom: "2rem",
});

export const Music = () => (
  <BasePage title="Music">
    <Typography sx={{
      color: "primary.light"
    }}>
      Infants | <i>boston indie rock quartet</i>
    </Typography>
    <Typography sx={{
      color: "#B48291"
    }}>That's me on the drums.</Typography>
    <iframe
      css={iframeStyles}
      src="https://open.spotify.com/embed/artist/64xK0wJW0iMyfFpeeQ9MpC?utm_source=generator"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
    <Divider color="#B48291" />
    <Typography style={{ marginTop: "2rem" }} sx={{
      color: "primary.light"
    }}>
      Wae Mel | <i>solo project</i>
    </Typography>
    <Typography sx={{
      color: "#B48291"
    }}>
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
    <Typography style={{ marginTop: "2rem" }} sx={{
      color: "primary.light"
    }}>
      The Womb Bats | <i>my college rock band</i>
    </Typography>
    <Typography sx={{
      color: "#B48291"
    }}>That's me on the keys.</Typography>
    <iframe
      css={iframeStyles}
      src="https://bandcamp.com/EmbeddedPlayer/track=2118083282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://thewombbats.bandcamp.com/track/shapeshifter">
        Shapeshifter by The Womb Bats
      </a>
    </iframe>
    <Divider color="#B48291" />
    <Typography style={{ marginTop: "2rem" }} sx={{
      color: "primary.light"
    }}>
      This is a string quartet I composed in college. You can find other
      recordings at the same SoundCloud page.
    </Typography>
    <Typography sx={{
      color: "#B48291"
    }}>
      Performed by the{" "}
      <Link href="https://www.semiosisquartet.com/">Semiosis Quartet</Link>
    </Typography>
    <iframe
      css={iframeStyles}
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311824266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  </BasePage>
);
