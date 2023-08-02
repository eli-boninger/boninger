import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { BasePage } from "./BasePage";
import { Link } from "react-router-dom";
import { theme } from "../theme";

interface Props {}

export const WorkSamples = (props: Props) => {
  return (
    <BasePage title="Work samples">
      <Typography component="div" color="primary.light">
        This website was built from scratch using React, Typescript, and
        Material UI, and deployed with AWS.
        <br />
        <br />
        Unfortunately, all of my professional work thus far has been on private
        platforms. I'm working on building out a public portfolio, but in the
        meantime you can read more about my industry experience{" "}
        <Link css={{ color: theme.palette.info.main }} to="/bio">
          here
        </Link>
        .
      </Typography>
    </BasePage>
  );
};
