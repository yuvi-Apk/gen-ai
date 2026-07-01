import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/defaults/ErrorPage";
import BlogPageLayout from "./pages/defaults/BlogPageLayout";
import HowLlmWorks from "./pages/blogs/HowLlmWorks";

const router = createBrowserRouter([
  {
    path: "/blogs",
    element: <BlogPageLayout />,
    children: [
        {
            path:"how-llm-works",
            element:<HowLlmWorks/>
        }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
