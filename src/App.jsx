import Applayout from "./components/applayout";
import Home from "./page/home";
import { createBrowserRouter, RouterProvider ,  } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path :"/",
    element : <Applayout/>,
    children : [
      {
        path: "/",
        element : <Home/>
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
