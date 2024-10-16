import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "../pages/Search";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
