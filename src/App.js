import { Box, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Routes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
