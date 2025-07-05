import "../styles/home.css";
import electronics from "../assets/images/electonics.jpg";
import jwellery from "../assets/images/jwellery.jpg"
import mens from "../assets/images/men.jpg"
import womens from "../assets/images/women.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home_container">
      <h1>our category </h1>
      <div className="category_container">
        <div className="card">
          <img src={electronics} alt="" />
          <h2>electonics</h2>
          <button onClick={()=>(navigate("/product"))}  >explore</button>
        </div>

                <div className="card">
          <img src={jwellery} alt="" />
          <h2>jwellery</h2>
          <button onClick={()=>(navigate("/product"))} >explore</button>
        </div>

                <div className="card">
          <img src={mens} alt="" />
          <h2>men's clothing</h2>
          <button onClick={()=>(navigate("/product"))} >explore</button>
        </div>

                <div className="card">
          <img src={womens} alt="" />
          <h2>women's clothing</h2>
          <button onClick={()=>(navigate("/product"))} >explore</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
