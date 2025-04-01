import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      color="primary"
      onClick={() => navigate("/")}
      startIcon={<NavigateBeforeIcon />}
    >
      Home
    </Button>
  );
};
