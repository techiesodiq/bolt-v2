import { Grid, Typography } from "@mui/material";
import data from "../data/text.json";
import LinkButton from "./LinkButton";

const { title, header, subtitle, button, address, email, phone } =
  data.home.contact;

const HomeContact = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: "100px 120px 40px 140px",
      }}
    >
      <Grid item>
        <Typography variant="body3" color="primary" sx={{ lineHeight: "72px" }}>
          {title}
        </Typography>
        <Typography variant="h2" sx={{ lineHeight: "72px" }}>
          {header}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "34px" }}>
          {subtitle}
        </Typography>
        <LinkButton
          to="/contact"
          text={button}
          sx={{
            width: "188px",
            height: "45px",
            borderRadius: "4px",
            padding: "12px 10px",
            marginTop: "15px",
          }}
        />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeContact;
