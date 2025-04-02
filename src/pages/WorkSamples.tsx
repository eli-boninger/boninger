import { Typography, useTheme } from "@mui/material";
import { BasePage } from "./BasePage";
import { Link } from "react-router-dom";

export const WorkSamples = () => {
  const theme = useTheme()
  return (
    <BasePage title="Work samples">
      <Typography component="div">
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
