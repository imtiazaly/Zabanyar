import { createBrowserRouter } from "react-router-dom";
import ReaderPage from "../../features/reader/components/ReaderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReaderPage />,
  },
]);

export default router;
