import { css } from "@emotion/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const container = css({
  display: "flex",
  flexDirection: "column",
  padding: 0,
});

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const LinkTree = (props: Props) => {
  const { children } = props;

  return (
    <motion.ul variants={variants} css={container}>
      {children}
    </motion.ul>
  );
};
