import { Grid, Typography } from "@mui/material";
import images from "../data/images.json";
import heroText from "../data/text.json";
import { theme } from "../theme";
import LinkButton from "./LinkButton";

const { title, subtitle } = heroText.home.hero;
const heroImage = images.heros.hero1;

const Hero = () => {
  return (
    <Grid
      container
      sx={{
        pl: "120px",
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
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Typography variant="h1" width="694px" height="204px">
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" width="578px" height="81px">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item>
            <LinkButton
              to="/contact"
              text="Contact Us"
              sx={{
                width: "188px",
                height: "45px",
                borderRadius: "4px",
                fontSize: theme.typography.button.fontSize,
                fontWeight: theme.typography.button.fontWeight,
                textTransform: "capitalize",
                padding: "12px 10px",
              }}
            />
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
