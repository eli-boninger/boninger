import { Route } from "./Routes";
import { ReturnButton } from "./ReturnButton";
import { NavButton } from "./NavButton";
import { Box } from "@mui/material";

interface Props {
  links: Route[];
}

export const ExpandedMenu = (props: Props) => {
  const { links } = props;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ReturnButton />
      <Box>
        {links.map((route: Route) => (
          <NavButton
            key={route.text}
            to={route.path}
          >
            {route.text}
          </NavButton>
        ))}
      </Box>
    </Box>
  );
};
