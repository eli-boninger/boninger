import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  href: string;
}

export const PageLink = (props: Props) => {
  const { text, href } = props;

  return <Link to={href}>{text}</Link>;
};
