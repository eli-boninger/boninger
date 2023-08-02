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
              Tech lead, scrum master, and full stack web developer for a team
              focused on the experience of patients’ care teams
            </li>
            <li>
              Management of cross-team front end engineering initiatives — among
              them:
              <ul css={unorderedList}>
                <li>
                  Oversaw transition from class-based to hook-based React
                  components with a new styling solution
                </li>
                <li>
                  Creation and continued support of a shared front end component
                  library
                </li>
              </ul>
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
              Worked as a full stack developer on agile development teams to
              deliver high quality software to a broad spectrum of clients (five
              clients in two years).
            </li>
            <li>
              Projects included a full scale rebuild of a customer portal
              website to use modern web technology (React and Node), as well as
              the modernization of a set of internal tools for a home
              improvement company using Angular 4 and .NET Framework.
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
