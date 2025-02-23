import { createBrowserRouter } from "react-router-dom";
import { ApplicationLayout } from "./pages/_layout/application";
import { HomePage } from "./pages/pages/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
