import { Grid, Typography } from "@mui/material";
import images from "../data/images.json";
import heroText from "../data/text.json";
import LinkButton from "./LinkButton";

const { title, subtitle } = heroText.home.hero;
const titleBreakingPointString = "best";
const subtitleBreakingPointString1 = ",";
const subtitleBreakingPointString2 = "businesses";
const titleTextToArray = title.split(titleBreakingPointString);
const subtitleTextToArray1 = subtitle.split(subtitleBreakingPointString1);
const subtitleTextToArray2 = subtitleTextToArray1[1].split(
  subtitleBreakingPointString2
);
const heroImage = images.heros.hero1;

const Hero = () => {
  const updatedTitle = (
    <Typography variant="h1" fontWeight="bold" color="header">
      {titleTextToArray[0] + " " + titleBreakingPointString}
      <br />
      {titleTextToArray[1]}
    </Typography>
  );

  const updatedSubtitle = (
    <Typography variant="body2" color="body">
      {subtitleTextToArray1[0] + subtitleBreakingPointString1} <br />{" "}
      {subtitleTextToArray2[0] + " " + subtitleBreakingPointString2} <br />{" "}
      {subtitleTextToArray2[1]}
    </Typography>
  );

  return (
    <Grid
      container
      sx={{
        pl: "80px",
        pt: "80px",
      }}
    >
      {/* Left Part */}
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          spacing={3}
          sx={{ height: "100%", pl: "30px" }}
        >
          <Grid item>{updatedTitle}</Grid>
          <Grid item>
            <Typography variant="body2" color="body">
              {updatedSubtitle}
            </Typography>
          </Grid>
          <Grid item>
            <LinkButton to="/contact" text="Contact Us" />
          </Grid>
        </Grid>
      </Grid>

      {/* Right Part */}
      <Grid item xs={12} md={6} sx={{ pt: "100px" }}>
        <Grid container justifyContent="flex-end" alignItems="flex-end">
          <img
            src={heroImage}
            alt="Hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              paddingTop: "60px",
              marginLeft: "20px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
