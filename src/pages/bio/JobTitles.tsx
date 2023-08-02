import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

interface Props {
  titles: string[];
}

const smallText = css({
  fontSize: ".75rem",
});

export const JobTitles = (props: Props) => {
  const { titles } = props;
  return (
    <Typography css={smallText}>
      {titles.map((title) => (
        <span key={title}>
          {title}
          <br />
        </span>
      ))}
    </Typography>
  );
};
