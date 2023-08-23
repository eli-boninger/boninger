import { Link, Typography } from "@mui/material";
import React from "react";
import { BasePage } from "../BasePage";
import { css } from "@emotion/react";
import { Resume } from "./Resume";
import imgUrl from "./pro_photo_2.jpg";

const textStyle = css({
  maxWidth: "50rem",
});

export const Bio = () => (
  <BasePage title="About me">
    <div css={textStyle}>
      <Typography color="primary.light">
        <i>
          For a more traditional resume, click{" "}
          <Link color="info.main" href="#resume">
            here
          </Link>
          .
        </i>
      </Typography>
      <img
        src={imgUrl}
        style={{ maxWidth: "20rem", margin: "2rem 0" }}
        alt="professional photo of Eli Boninger"
      />
      <br />
      <Typography component="div" color="primary.light">
        After double-majoring in Computer Science and Music at the Tufts
        University School of Engineering (class of 2017), I joined the tech
        industry as a full stack software engineer.
      </Typography>
      <br />
      <Typography component="div" color="primary.light">
        My first role was with Slalom Build, working as a developer on several
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
      <Typography component="div" color="primary.light">
        Enticed by their mission to help patients receive better healthcare
        around the clock, I joined Wellframe in 2019 to become part of a much
        smaller team of engineers focused on a specific product. My main
        responsibility was the Wellframe Dashboard, a web page where care
        managers manage and communicate with their patients.
        <br />
        <br />I was responsible for the development and deployment of several
        new features while at Wellframe, including:
        <ul>
          <li>
            A new platform for our clinical to upload articles and attach them
            to content bundles viewable by patients and care teams
          </li>
          <li>
            A way for care managers to create custom message templates with
            autofilled shortcuts to send to patients
          </li>
          <li>
            A brand new component library for use throughout all the Wellframe
            frontend applications
          </li>
        </ul>
        Wellframe's stack consisted of a React & Typescript app for the care
        manager dashboard, served by both a Rails API as well as several Spring
        Boot microservices. These service were deployed via GCP, using GitLab
        for CI/CD.
      </Typography>
      <br />
      <Resume />
    </div>
  </BasePage>
);
