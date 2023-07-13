import { motion } from "framer-motion";
import React from "react";
import { MotionLink } from "./MotionLink";
import { css } from "@emotion/react";

interface Props {
  text: string;
  href: string;
}

const linkStyle = css({
  textDecoration: "none",
  fontFamily: "Open Sans, 'sans-serif'",
  width: "max-content",
  marginTop: ".25rem",
  color: "#CDD5D1",
});

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const PageLink = (props: Props) => {
  const { text, href } = props;

  return (
    <MotionLink
      whileHover={{ scale: 1.1 }}
      to={href}
      variants={variants}
      css={linkStyle}
    >
      {text}
    </MotionLink>
  );
};
