import { Grid, Typography } from "@mui/material";
import data from "../data/text.json";
import { theme } from "../theme";

const { title, subtitle, details1, details2, details3 } = data.home.safety;

const HomeSafety = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        padding: "40px 120px 40px 120px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Typography
          variant="h3"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "102px",
            width: "930px",
          }}
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          //   spacing={12}
          //   spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "60px",
          }}
        >
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{
              alignItems: "flex-start",
              padding: 0,
              width: "400px",
              height: "235px",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", lineHeight: "30px", fontWeight: "600px" }}
            >
              {details1.header}
            </Typography>
            <Typography variant="body3">{details1.description}</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              width: "400px",
              height: "235px",
              padding: "32px 60px",
              borderRadius: "16px",
              background: theme.palette.primary.main,
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: "600px",
                color: "#fff",
              }}
            >
              {details2.header}
            </Typography>
            <Typography variant="body3" sx={{ color: "#fff" }}>
              {details2.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{
              alignItems: "flex-start",
              padding: 0,
              width: "400px",
              height: "235px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: "600px",
              }}
            >
              {details3.header}
            </Typography>
            <Typography variant="body3">{details3.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeSafety;
