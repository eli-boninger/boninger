import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      onClick={() => navigate("/")}
      color="secondary"
      startIcon={<NavigateBeforeIcon color="secondary" />}
    >
      Home
    </Button>
  );
};
