import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { NavButton } from "../components/NavButton";

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ m: 4 }}>
      <Typography>
        An unexpected error has occurred.
      </Typography>
      <NavButton sx={{ mt: 4 }} to="/">Go Home</NavButton >
    </Box >

  );
};
