import { Button, ButtonProps } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const NavButton = (props: LinkProps & ButtonProps) => {
  const { role, variant, ...otherProps } = props;
  return (
    <Button component={Link} variant="text" {...otherProps} />
  );
};
