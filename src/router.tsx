import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/defaults/ErrorPage";
import BlogPageLayout from "./components/layout/BlogPageLayout";
import HowLlmWorks from "./pages/blogs/how-llm-works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogPageLayout />,
    children: [
      {
        index: true,
        element: <HowLlmWorks />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
