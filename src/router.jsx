
import {
  createBrowserRouter,
} from "react-router-dom";
import  Forms from "./pages/Forms/Forms"
import Home from "./pages/App/Home";
import Polls from "./pages/Polls/Polls";
import Pricing from "./pages/Pricing/Pricing";
import Voting from "./pages/Voting/Voting";
import App from "./pages/App/App";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/forms",
        element: <Forms />,
      },
      {
        path: "/polls",
        element: <Polls />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/voting",
        element: <Voting />,
      },
    ],
  },
  {
    path:"*",
    element: <NotFound/>
  }
]);

export default router;