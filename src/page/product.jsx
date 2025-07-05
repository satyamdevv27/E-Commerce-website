import { useEffect, useState } from "react";
import "../styles/product.css";
import "../styles/product.css";
import { Link } from "react-router-dom";
function Products() {
  const [categories, setcategories] = useState([]);
  const [productsbycategory, setproductsbycategory] = useState({});

  //to fetch all the categories
  const allproducts = async () => {

try {
  
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categorycata = await response.json();
    setcategories(categorycata);

    //to fetch all products of the category
    const categoryproducts = await Promise.all(
      categorycata.map(async (category) => {
        const productsresponse = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const productdata = await productsresponse.json();
        return { category, productdata };
      })
      // to add organise all products according to category in an object
    );
    const organizedproducts = categoryproducts.reduce((acc, item) => {
      acc[item.category] = item.productdata;

      return acc;
    }, {});

    setproductsbycategory(organizedproducts);

} catch (err) {
  alert(err,"error in fetching the products")
}

if(!productsbycategory){
  return(
  <div>please wait .....</div>
  )
}


  };
  // to load the page if tere is any change
  useEffect(() => {
    allproducts();
  }, []);



  return (
    <>
      <div className="products_cotainer">
 {Object.keys(productsbycategory).length === 0 ? (
      <div className="loading"><h1>Please wait...</h1></div>
    ) : (
      <div className="products_cotainer">
        {Object.entries(productsbycategory).map(([category, products]) => (
          <div className="product_category" key={category}>
            <h2>{category.toUpperCase()}</h2>
            <div className="product_list">
              {products.map((product) => (
                <div className="product_card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>Price: ₹{product.price}</p>
                  <Link to={`/product/${product.id}`}>
                    <button>Buy Now</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
      </div>
    </>
  );
}

export default Products;
