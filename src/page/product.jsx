import { useEffect, useState } from "react";
import "../styles/product.css";
import "../styles/product.css"
function Products() {
  const [categories, setcategories] = useState([]);
  const [productsbycategory, setproductsbycategory] = useState({});

  //to fetch all the categories
  const allproducts = async () => {
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
console.log(acc);

      return acc;
    }, {});

    setproductsbycategory(organizedproducts);
    
   
    
  };
  // to load the page if tere is any change
  useEffect(() => {
    allproducts();
  }, []);

  return (
    <>
      <div className="products_cotainer">
        {Object.entries(productsbycategory).map(([category, products]) => (
          <div className="product_category" key={category}>
            <h2>{category.toLocaleUpperCase()}</h2>
            <div className="product_list">
              {
                products.map((product)=>(
                  <div className="product_card" key={product.id}>
                     <img src={product.image} alt="" />
                     <h3>{product.title}</h3>
                     <p>price : ₹{product.price}</p>
                     <button>buy now</button>
                  </div>
                ))
              }
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
