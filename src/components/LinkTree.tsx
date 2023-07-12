import { css } from "@emotion/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const container = css({
  display: "flex",
  flexDirection: "column",
});

export const LinkTree = (props: Props) => {
  const { children } = props;

  return <div css={container}>{children}</div>;
};
