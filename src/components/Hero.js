import { Grid, Typography } from "@mui/material";
import images from "../data/images.json";
import LinkButton from "./LinkButton";

const heroImage = images.heros.hero1;

const Hero = () => {
  return (
    // <Box sx={{ width: "100%" }}>
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //     <Grid item xs={6}>
    //       <Box pl="22px">
    //         <Box>
    //           <Typography variant="h1" color="header">
    //             Transform your business operations with the best fiber solution
    //           </Typography>
    //         </Box>
    //         <Box>
    //           <Typography variant="body2" color="body">
    //             We are proud to be at the forefront of the telecommunications
    //             industry, providing high-quality fiber optic solutions to homes
    //             and businesses across the country.
    //           </Typography>
    //         </Box>
    //         <Box>
    //           <LinkButton to="/contact" text="Contact Us" />
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Box>
    //         <img src={heroImage} alt="hero" />
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Grid
      container
      sx={{
        pl: "80px",
        pt: "80px",
        background: "linear-gradient(to bottom, #EAF1FF, #FFFEFA)",
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
          <Grid item>
            <Typography variant="h1" fontWeight="bold" color="header">
              Transform your business operations with the best <br />
              fiber solution
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="body">
              We are proud to be at the forefront of the telecommunications
              industry, <br />
              providing high-quality fiber optic solutions to homes and
              businesses <br />
              across the country.
            </Typography>
          </Grid>
          <Grid item>
            <LinkButton to="/contact" text="Contact Us" />
          </Grid>
        </Grid>
      </Grid>

      {/* Right Part */}
      <Grid item xs={12} md={6} sx={{ pt: "100px" }}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="flex-end"
          //   sx={{ mt: "50px" }}
        >
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
