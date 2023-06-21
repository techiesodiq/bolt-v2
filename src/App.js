import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Globalstyle, theme } from "./components/style/theme";
import Root from "./layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
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
