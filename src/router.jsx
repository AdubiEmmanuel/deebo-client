
import {
  Form,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Polls from "./pages/Polls/Polls";
import Pricing from "./pages/Pricing/Pricing";
import Voting from "./pages/Voting/Voting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/forms",
    element: <Form />
  },
  {
    path: "/polls",
    element: <Polls />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/voting",
    element: <Voting />
  },
  
]);

export default router;