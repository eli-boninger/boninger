import { Typography } from "@mui/material";
import React from "react";
import { PageLink } from "./PageLink";
import { LinkTree } from "./LinkTree";

export const Header = () => (
  <div>
    <Typography color="white">Eli Boninger</Typography>
    <LinkTree>
      <PageLink text="MUSIC" href="/music" />
      <PageLink text="HOME" href="/" />
    </LinkTree>
  </div>
);
