import Applayout from "./components/applayout";
import Home from "./page/home";
import Complaint from "./page/complaint";
import Product from "./page/product";
import Contact from "./page/contact";
import Singleproduct from "./page/Singleproduct";
import { createBrowserRouter, RouterProvider ,  } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path :"/",
    element : <Applayout/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path :"/contact",
        element:<Contact/>
      },
      {
        path:"/product",
        element: <Product/>
      },
      {
        path: "/product/:id",
        element : <Singleproduct/>
      },
      {
        path : "/Complaint",
        element : <Complaint/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
