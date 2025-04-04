import { Link, Typography, TypographyProps } from "@mui/material";
import { BasePage } from "../BasePage";
import { css } from "@emotion/react";
import imgUrl from "../../assets/pro_photo_3.jpg";
import styled from "@emotion/styled";
import MuiAccordion, { accordionClasses } from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { events } from "./BioEvents";
import { theme } from "../../theme";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SyntheticEvent, useState } from "react";



const mainStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start'
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row'
  },

})

const imageStyles = css({
  maxWidth: "20rem",
  margin: '1rem 0',
  borderRadius: '0.25rem'
})

const StyledTypography = styled(Typography) <TypographyProps>`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`

const Accordion = styled(MuiAccordion)({

  [`&.${accordionClasses.root}.${accordionClasses.expanded}`]: {
    margin: 0,
    '&::before': {
      opacity: 1
    }
  }
})

export const Bio = () => {
  const [expanded, setExpanded] = useState<string | false>(events[0].name);

  const handleChange = (panel: string) => (_e: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <BasePage title="About me">
      <Typography>
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
        <article>
          {events.map((e) => <Accordion key={e.name} expanded={e.name === expanded} onChange={handleChange(e.name)}>
            <MuiAccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography component="span">{e.name}, {e.startYear} - {e.endYear}</Typography></MuiAccordionSummary>
            <StyledTypography component="div">
              {e.description()}
            </StyledTypography>
          </Accordion>)}
        </article>
      </main>
    </BasePage>
  );
}
