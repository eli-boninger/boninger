import { IconButton, Typography } from "@mui/material";
import React from "react";
import { PageLink } from "./PageLink";
import { LinkTree } from "./LinkTree";
import { motion, useCycle } from "framer-motion";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";

const menu = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const titleStyle = css({
  paddingTop: "0.469rem",
  marginLeft: "0.5rem",
});

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      variants={menu}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div css={{ display: "flex" }}>
        <IconButton onClick={() => toggleOpen()} color="secondary">
          <MenuIcon />
        </IconButton>
        <Typography css={titleStyle} color="secondary">
          Eli Boninger
        </Typography>
      </div>
      <div css={{ marginLeft: ".5rem" }}>
        <LinkTree>
          <PageLink text="MUSIC" href="/music" />
          <PageLink text="WORK" href="/work" />
        </LinkTree>
      </div>
    </motion.div>
  );
};
