import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Intro from "./Intro";
import Layout from "../../pages/layout/Layout";
import NotFound from "../../pages/error/NotFound";
import PostContainer from "../../pages/post/_component/PostContainer";
import Detail from "../../pages/post/_component/Detail";
import List from "../../pages/post/_component/List";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/intro",
        element : <Intro />,
      },
    ]
  },
  {
    path : "/main",
    element : <Main />
  },
  {
    path : "/post",
    element : <PostContainer />,
    children : [
      {
        index : true,
        element : <List />,
      },
      {
        path : ":id",
        element : <Detail />,
      }
    ]
  },
  {
    path : "/post/:id",
    element : <Detail />,
  },
  {
    path : "*",
    element : <NotFound />
  }
])

export default router;