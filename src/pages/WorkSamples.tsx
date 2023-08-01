import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { BasePage } from "./BasePage";

interface Props {}

export const WorkSamples = (props: Props) => {
  return (
    <BasePage title="Work samples">
      <Typography component="div" color="secondary.light">
        This website was built from scratch using React, Typescript, and
        Material UI, and deployed with AWS.
      </Typography>
    </BasePage>
  );
};
