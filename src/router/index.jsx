import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Create from '../pages/Create';
import Search from '../pages/Search';
import BookDetails from '../components/BookDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {path: '', element: <Home/>},
        {path: 'home', element: <Home/>},
        {path: 'create', element: <Create/>},
        {path: 'search', element: <Search/>},
        {path: 'books/:id', element: <BookDetails/>}
    ]
  },

  {
    path: "*",
    element: <div>Not Found</div>
  }
]);

export default router;