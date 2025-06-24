import { useEffect, useState } from "react";
import "../styles/product.css";

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
    );
    // to add organise all products according to category in an object 
    const organizedproducts = categoryproducts.reduce((acc , item)=>{
      acc[item.category] = item.productdata
      console.log(acc);
      return acc;
      
    }
  ,{})
  setproductsbycategory(organizedproducts)

  };
// to load the page if tere is any change 
  useEffect(() => {
    allproducts();
  }, []);

  return <>
  <div className="products_cotainer">

  </div>
  </>;
}

export default Products;
