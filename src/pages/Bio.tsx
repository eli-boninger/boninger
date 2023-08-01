import {
  Fade,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";
import { BasePage } from "./BasePage";

export const Bio = () => (
  <BasePage title="About me">
    <div style={{ maxWidth: "50rem" }}>
      <Typography component="div" color="secondary.light">
        After double-majoring in Computer Science and Music at the Tufts
        University School of Engineering (class of 2017), I joined the tech
        industry as a full stack software engineer.
      </Typography>
      <br />
      <Typography component="div" color="secondary.light">
        My first role was with Slalom Build as a developer part of several
        different "scrum teams for hire". During my two years with Slalom Build
        I worked on five different teams, each serving a different and unique
        client. Among these projects (company names omitted to avoid privacy
        issues) were:
        <ul>
          <li>Working on a proof of concept for an Alexa-controlled faucet</li>
          <li>Modernizing a set of tools for developing new paints</li>
          <li>
            Developing an API for a web app used by in-store stylists to query
            wedding dress inventory
          </li>
        </ul>
        Each project involved a completely new stack, giving me the opportunity
        to learn several new technologies in a professional setting, including
        React, Angular, AWS Lambda, .NET Framework, MSSQL Server, and many
        others. Over the course of my two years, I was promoted to Senior
        Engineer and began to hone my skills as a full stack web developer.
      </Typography>
      <br />
      <Typography color="secondary">
        Enticed by their mission to help patients receive better healthcare
        around the clock, I joined Wellframe in 2019 to become part of a much
        smaller team of engineers focused on a specific product. My main
        responsibility was the Wellframe Dashboard, a web page where care
        managers can manage and communicate with their patients.
      </Typography>
    </div>
  </BasePage>
);
