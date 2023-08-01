import React from "react";
import { useLocation } from "react-router-dom";
import { Links } from "../components/Links";

export const useLinks = () => {
  const { pathname } = useLocation();

  return Links.filter((link) => link.route !== pathname);
};
