import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { JobTitles } from "./JobTitles";
import { ResumeSection } from "./ResumeSection";

interface Props {}

const mainText = css({
  fontSize: ".9rem",
});
const unorderedList = css({
  margin: ".3rem 0",
});

export const Resume = (props: Props) => {
  const {} = props;
  return (
    <Typography component="div" color="primary.light" css={mainText}>
      <Typography variant="h4" color="info.main" id="resume">
        Resume
      </Typography>
      <br />
      <ResumeSection title="Experience">
        <>
          <strong>Wellframe</strong>, Boston, MA
          <br />
          <JobTitles
            titles={[
              "Senior Software Engineer II, August 2022 - May 2023",
              "Senior Software Engineer I, August 2021 - August 2022",
              "Software Engineer, September 2019 - July 2021",
            ]}
          />
          <ul css={unorderedList}>
            <li>
              Worked as tech lead, scrum master, and full stack web developer
              for a team focused on the experience of medical patients’ care
              teams
            </li>
            <li>
              Spearheaded and documented organizational transition from
              class-based to functional React components with a new styling
              solution
            </li>
            <li>
              Initiated and oversaw a weekly front end engineering sync meeting
              to triage tech debt and discuss important front end development
              topics across teams, such as unit testing, major package upgrades,
              and coding standards
            </li>
            <li>
              Headed a team of seven in a migration from one email provider to
              another, while also adding functionality for customization of
              email content based on insurance provider
            </li>
          </ul>
          <br />
          <strong>Slalom Build</strong>, Boston, MA
          <br />
          <JobTitles
            titles={[
              "Senior Engineer, March 2019 - September 2019",
              "Engineer, June 2017 - March 2019",
            ]}
          />
          <ul css={unorderedList}>
            <li>
              Collaborated with clients on various projects to develop new
              software features according to clients’ specifications. Projects
              spanned a wide range of topics, from creating a proof-of-concept
              for a voice-activated faucet to modernizing a set of tools for the
              calibration and development of paints and paint colors
            </li>
            <li>
              Quickly understood client codebases to start contributing to their
              velocity right away, picking up new frameworks and programming
              languages as needed
            </li>
          </ul>
          <br />
          <strong>Tufts Computer Science Department</strong>, Medford, MA
          <br />
          <JobTitles
            titles={["Teaching Assistant, September 2015 - May 2017"]}
          />
          <ul css={unorderedList}>
            <li>
              Taught recitations, wrote assignments, and held office hours for
              Tufts’ Programming Languages course and Tufts’ Networks course.
            </li>
          </ul>
        </>
      </ResumeSection>
      <ResumeSection title="Education">
        <>
          <strong>Tufts University</strong>, Medford, MA
          <br />
          Bachelor of Science in Computer Science, May 2017, Summa Cum Laude
        </>
      </ResumeSection>
      <ResumeSection title="Technical Skills">
        Specialties: Javascript, Typescript, HTML/CSS, React, Functional
        Programming
        <br />
        Proficient: Java, Spring Boot, Ruby on Rails, Node, Python, C, SQL, AWS,
        GCP
        <br />
        Other Tools: Git, Gitlab, JIRA, Confluence, Github, Bitbucket
      </ResumeSection>
    </Typography>
  );
};
