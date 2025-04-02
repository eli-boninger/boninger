import { Divider, Link, Typography } from "@mui/material";
import { BasePage } from "./BasePage";
import { css } from "@emotion/react";

const iframeStyles = (short = false) => css({
  border: 0,
  width: "100%",
  maxWidth: "700px",
  height: "120px",
  marginTop: ".5rem",
  marginBottom: short ? 0 : "2rem",
});

const musicContents = [
  {
    Title: () => <>Infants | <i>boston indie rock quartet</i></>,
    Subtitle: () => <>That's me on the drums.</>,
    Iframe: () => <iframe
      css={iframeStyles(true)}
      src="https://open.spotify.com/embed/artist/64xK0wJW0iMyfFpeeQ9MpC?utm_source=generator"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  },
  {
    Title: () => <>Wae Mel | <i>solo project</i></>,
    Subtitle: () => <>All music written, played, recorded, and mixed by me.</>,
    Iframe: () => <iframe
      css={iframeStyles()}
      src="https://bandcamp.com/EmbeddedPlayer/album=304322865/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
      loading="lazy"
    >
      <a href="https://waemel.bandcamp.com/album/wae-mels-pop-hits">
        Wae Mel&#39;s Pop Hits! by Wae Mel
      </a>
    </iframe>
  }, {
    Title: () => <> The Womb Bats | <i>my college rock band</i></>,
    Subtitle: () => <>That's me on the keys.</>,
    Iframe: () => <iframe
      css={iframeStyles()}
      src="https://bandcamp.com/EmbeddedPlayer/track=2118083282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
      loading="lazy"
    >
      <a href="https://thewombbats.bandcamp.com/track/shapeshifter">
        Shapeshifter by The Womb Bats
      </a>
    </iframe>
  },
  {
    Title: () => <>This is a string quartet I composed in college. You can find other
      recordings at the same SoundCloud page.</>,
    Subtitle: () => <>Performed by the{" "}
      <Link href="https://www.semiosisquartet.com/">Semiosis Quartet</Link></>,
    Iframe: () => <iframe
      css={iframeStyles()}
      height="166"
      allow="autoplay"
      loading="lazy"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311824266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  }
]

export const Music = () => (
  <BasePage title="Music">
    {musicContents.map((content, i) => <>
      <Typography sx={{ pt: '1rem' }} ><content.Title /></Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", pb: '0.5rem' }}><content.Subtitle /></Typography>
      <content.Iframe />
      {i !== musicContents.length - 1 && <Divider sx={{ borderColor: "text.primary", opacity: 0.4 }} />}
    </>)}
  </BasePage>
);
