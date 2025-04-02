import { Box, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import { NavButton } from "../components/NavButton";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Box sx={{ m: 4 }}>
      <Typography>
        An unexpected error has occurred.
      </Typography>
      <NavButton sx={{ mt: 4 }} onClick={() => navigate('/')}>Go Home</NavButton >
    </Box >

  );
};
