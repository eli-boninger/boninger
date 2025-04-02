import { Button, ButtonProps } from "@mui/material";

export const NavButton = (props: ButtonProps) => {
  const { role, variant, ...otherProps } = props;
  return (
    <Button role="link" variant="text" {...otherProps} />
  );
};
