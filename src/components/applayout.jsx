import Header from "./header"
import Footer from "./footer"
import { Outlet } from "react-router"

function Applayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout
