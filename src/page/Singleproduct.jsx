import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Singleproduct.css";
function Singleproduct() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);


  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
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


  return (
    <div className="page_container">
      <div className="img_container">
        <img src={product.image} alt="" />
      </div>
      <div className="product_info">
        <div className="product_description">
          {product.description.length <= MAX_LENGTH
            ? `${product.description}`
            : `${product.description.substring(0, MAX_LENGTH)}....`}
        </div>
        <h3>price : ₹{product.price}</h3>
        <h3>ratings : {product.rating.rate}</h3>
        <div className="btns">
          <button>buy now</button>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
