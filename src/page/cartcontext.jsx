import { createContext, useState , useEffect} from "react";

export const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addtocart = (product) => {
    setcart((prevcart) => [...prevcart, product]);
  };

    useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setcart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
   <Cartcontext.Provider value={ {cart,addtocart,setcart}}>
    {children}
   </Cartcontext.Provider>
  );
};


