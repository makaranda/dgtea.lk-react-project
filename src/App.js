import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlackTea from "./components/pages/BlackTea";
import GreenTea from "./components/pages/GreenTea";
import Outlets from "./components/pages/Outlets";
import TeaFactory from "./components/pages/TeaFactory";
import OutletsTwo from "./components/pages/OutletsTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/blacktea",
    element: <BlackTea />,
  },
  {
    path: "/greentea",
    element: <GreenTea />,
  },
  {
    path: "/outlets/page/1",
    element: <Outlets />,
  },
  {
    path: "/outlets/page/2",
    element: <OutletsTwo />,
  },
  {
    path: "/tea-factory",
    element: <TeaFactory />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
