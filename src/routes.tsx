import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogContent from "./pages/blog/components/BlogContent";
import MasterPage from "./pages/layouts/MasterPage";
import Resume from "./pages/resume/Resume";

export default function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <MasterPage />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "blog",
          children: [
            {
              index: true,
              element: <Blog />,
            },
            {
              path: ":id",
              element: <BlogContent />,
            },
          ],
        },
        // { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routes;
}
