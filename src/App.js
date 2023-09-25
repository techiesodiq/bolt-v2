import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Globalstyle, theme } from "./components/style/theme";
import Root from "./layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Safety from "./pages/Safety";
import Technician from "./pages/Technician";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "service", element: <Service /> },
        { path: "contact", element: <Contact /> },
        { path: "career", element: <Safety /> },
        { path: "/career/requirement", element: <Technician /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
