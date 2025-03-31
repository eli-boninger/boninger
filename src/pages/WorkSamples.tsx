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
      <Typography component="div" sx={{
        color: "primary.light"
      }}>
        This website was built from scratch using React, Typescript, and
        Material UI, and deployed with AWS.
        <br />
        <br />
        Unfortunately, all of my professional work thus far has been on private
        platforms. Code for this website and other small projects lives at{" "}
        <Link
          css={{ color: theme.palette.info.main }}
          to="https://github.com/eli-boninger"
        >
          {" "}
          my GitHub page
        </Link>
        . You can read more about my industry experience{" "}
        <Link css={{ color: theme.palette.info.main }} to="/bio">
          here
        </Link>
        .
      </Typography>
    </BasePage>
  );
};
