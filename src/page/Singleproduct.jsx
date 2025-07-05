import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Singleproduct.css";
import { NavLink } from "react-router-dom";
import Buynow from "./buynow";
import { Cartcontext } from "./cartcontext";


function Singleproduct() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const { addtocart } = useContext(Cartcontext);
  const [isAdded, setIsAdded] = useState(false); // ✅ track if product is added

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setproduct(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchproduct();
  }, [id]);

  if (!product) {
    return <div>....loading the product</div>;
  }

  const MAX_LENGTH = 200;

  const handlecart = () => {
    addtocart({
      id: product.id,
      name: product.title,
      price: product.price,
      img: product.image
    });
    setIsAdded(true); // ✅ change button text after click
    console.log("button is clicked");
  };

  return (
    <div className="page_container">
      <div className="img_container">
        <img src={product.image} alt="" />
      </div>
      <div className="product_info">
        <div className="product_description">
          {product.description.length <= MAX_LENGTH
            ? product.description
            : `${product.description.substring(0, MAX_LENGTH)}....`}
        </div>
        <h3>price : ₹{product.price}</h3>
        <h3>ratings : {product.rating.rate}</h3>
        <div className="btns">
          <Buynow amount={product.price}/>
          
          <button onClick={handlecart}>
            {isAdded ? "Added" : "Add to Cart"} {/* ✅ conditional text */}
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
