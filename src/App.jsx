import Applayout from "./components/applayout";
import Home from "./page/home";
import { Cartprovider } from "./page/cartcontext";
import Product from "./page/product";
import Contact from "./page/contact";
import Singleproduct from "./page/Singleproduct";
import Cart from "./page/Cart";
import Thank from "./page/thank";
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
        path : "/cart",
        element : <Cart/>
      },
      {
        path:"/thank-you",
        element : <Thank/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <Cartprovider>
        <RouterProvider router={router}/>
      </Cartprovider>
    </>
  );
}

export default App;
