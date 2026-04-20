import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  }
]);

const root = createRoot(document.getElementById('root')!);

root.render(
    <RouterProvider router={router} />
);
