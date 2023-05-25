import { Box, Typography } from "@mui/material";
import data from "../data/text.json";
import NumberDisplay from "./NumberDisplay";

const { title, count } = data.home.count;

const Counter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body3" sx={{ mb: "20px" }}>
          {title}
        </Typography>
        <Box width="100%">
          <NumberDisplay number={count} />
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
