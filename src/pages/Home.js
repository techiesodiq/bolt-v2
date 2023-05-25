import { Box } from "@mui/system";
import Counter from "../components/Counter";
import Hero from "../components/Hero";
import HomeService from "../components/HomeService";

const Home = () => {
  return (
    <Box>
      <Box sx={{ background: "linear-gradient(to bottom, #EAF1FF, #FFFEFA)" }}>
        <Hero />
        <Counter />
      </Box>
      <HomeService />
    </Box>
  );
};

export default Home;
