import { Bio } from "../pages/bio/Bio";
import { Music } from "../pages/Music";
import { WorkSamples } from "../pages/WorkSamples";

export interface Route {
  text: string;
  path: string;
  element: React.ReactElement;
}

export const Routes: Route[] = [
  {
    text: "Bio",
    path: "/bio",
    element: <Bio />,
  },
  {
    text: "Music",
    path: "/music",
    element: <Music />,
  },
  {
    text: "Work",
    path: "/work",
    element: <WorkSamples />,
  },
];
