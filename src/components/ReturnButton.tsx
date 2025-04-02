import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ReturnButton = () => {
  return (
    <Button
      variant="text"
      color="primary"
      component={Link}
      to="/"
      startIcon={<NavigateBeforeIcon />}
    >
      Home
    </Button>
  );
};
