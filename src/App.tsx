import "@mantine/core/styles.css";
import { Group, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import { HeroImageRight } from "./components/HeroImageRight/HeroImageRight";
import { FeaturesCards } from "./components/FeaturesCards/FeaturesCards";
import Carrossel3d from "./components/ui/Carrossel3d/Carrossel3d";
import { HeroText } from "./components/HeroText/HeroText";
import Events from "./components/Events/Events";
import { FooterLinks } from "./components/FooterLinks/FooterLinks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layout/Home/Home";
import SEP from "./layout/SEP/SEP";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import Private from "./components/Private/Private";
import Congres from "./layout/Congres/Congres";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/SEP", element: <SEP /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/private", element: <Private /> },
  { path: "/congres", element: <Congres /> },
]);
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
