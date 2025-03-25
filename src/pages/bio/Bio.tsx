import { Link, Typography } from "@mui/material";
import { BasePage } from "../BasePage";
import { css } from "@emotion/react";
import imgUrl from "../../assets/pro_photo_3.jpg";
import styled from "@emotion/styled";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { events } from "./BioEvents";
import { theme } from "../../theme";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const mainStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row'
  }
})

const imageStyles = css({
  maxWidth: "20rem",
  margin: "0",
  borderRadius: '0.25rem'
})

const StyledTypography = styled(Typography)`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`

export const Bio = () => (
  <BasePage title="About me">
    <div>
      <Typography color="primary.light">
        <i>
          To view a more traditional resume, click{" "}
          <Link color="info.main" target="_blank" href="https://boninger.s3.us-east-1.amazonaws.com/Resume+Eli+Boninger.pdf">
            here
          </Link>
          .
        </i>
      </Typography>
      <main css={mainStyle}>
        <img
          src={imgUrl}
          css={imageStyles}
          alt="professional photo of Eli Boninger"
        />
        <br />
        <article>
          {events.map((e, index) => <MuiAccordion key={e.name} defaultExpanded={index === 0}>
            <MuiAccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography>{e.name}, {e.startYear} - {e.endYear}</Typography></MuiAccordionSummary>
            <StyledTypography>
              {e.description()}
            </StyledTypography>
          </MuiAccordion>)}
        </article>
      </main>

    </div>
  </BasePage>
);
