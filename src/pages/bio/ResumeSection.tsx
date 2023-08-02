import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  title: string;
}

const sectionHeader = css({
  fontSize: "1rem",
  marginBottom: ".2rem",
  textTransform: "uppercase",
});

export const ResumeSection = (props: Props) => {
  const { children, title } = props;
  return (
    <div css={{ marginBottom: "1rem" }}>
      <div css={sectionHeader}>
        <u>{title}</u>
      </div>
      {children}
    </div>
  );
};
