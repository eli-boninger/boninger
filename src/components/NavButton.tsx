import { Button } from "@mui/material";

interface Props {
  path: string;
  text: string;
  handleClick: () => void;
}

export const NavButton = (props: Props) => {
  const { text, handleClick } = props;
  return (
    <Button role="link" key={text} variant="text" onClick={handleClick}>
      {text}
    </Button>
  );
};
