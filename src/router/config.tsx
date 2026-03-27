import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Process from "../pages/process/page";
import Documents from "../pages/documents/page";
import FAQ from "../pages/faq/page";
import Contact from "../pages/contact/page";
import ServicesPage from "../pages/services/page";
import GHMCPage from "../pages/services/ghmc-building-permission/page";
import HMDAPage from "../pages/services/hmda-layout-permission/page";
import LandUsePage from "../pages/services/land-use-master-plan/page";
import OccupancyPage from "../pages/services/occupancy-certificate/page";
import TDRPage from "../pages/services/tdr-services/page";
import RoadWideningPage from "../pages/services/road-widening-check/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/process", element: <Process /> },
  { path: "/documents", element: <Documents /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/services/ghmc-building-permission", element: <GHMCPage /> },
  { path: "/services/hmda-layout-permission", element: <HMDAPage /> },
  { path: "/services/land-use-master-plan", element: <LandUsePage /> },
  { path: "/services/occupancy-certificate", element: <OccupancyPage /> },
  { path: "/services/tdr-services", element: <TDRPage /> },
  { path: "/services/road-widening-check", element: <RoadWideningPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
