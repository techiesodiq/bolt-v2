import { Grid, Typography } from "@mui/material";
import React from "react";
import imageData from "../data/images.json";
import data from "../data/text.json";
import { theme } from "../theme";

const {
  title,
  subtitle,
  solutions: { solution1, solution2, solution3, solution4 },
} = data.home.service;
const { solutionImage1 } = imageData.solutionImages;

const HomeService = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ background: "#FFFDF6", padding: "30px 20px 30px 120px" }}
    >
      <Grid item>
        <Typography variant="h3" height="43px">
          {title}
        </Typography>
      </Grid>
      <Grid item mt="15px" mb="15px">
        <Typography variant="body1" width="930px" height="102px">
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item width="850px" mt="15px">
            <Grid container spacing={0} rowSpacing={2}>
              {/* Box 1 */}
              <Grid item xs={6} mt="15px">
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution1.header}
                </Typography>
                <Typography
                  variant="body3"
                  width="294px"
                  height="135px"
                  sx={{ color: theme.palette.body.main }}
                >
                  {solution1.description}
                </Typography>
              </Grid>

              {/* Box 2 */}
              <Grid item xs={6} mt="15px">
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution2.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution2.description}
                </Typography>
              </Grid>

              {/* Box 3 */}
              <Grid item xs={6} mt="15px">
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution3.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution3.description}
                </Typography>
              </Grid>

              {/* Box 4 */}
              <Grid item xs={6} mt="15px">
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution4.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution4.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingRight: "200px",
            }}
          >
            <img src={solutionImage1} alt="Bolt Service" />
          </Grid>
        </Grid>

        {/* <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box sx={{ flex: 1, pr: "30px" }}>
            <Grid container>
              <Grid item>
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution1.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution1.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution2.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution2.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flex: 1, pr: "40px" }}>
            <Grid container>
              <Grid item>
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution3.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution3.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  width="274px"
                  height="33px"
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "33px",
                    color: theme.palette.header.main,
                  }}
                >
                  {solution4.header}
                </Typography>
                <Typography variant="body3" width="294px" height="135px">
                  {solution4.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flex: 2 }}>
            <img src={solutionImage1} alt="Bolt Service" />
          </Box>
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default HomeService;
