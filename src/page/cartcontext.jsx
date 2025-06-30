import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addtocart = (product) => {
    setcart((prevcart) => [...prevcart, product]);
  };

  return (
   <Cartcontext.Provider value={ {cart,addtocart}}>
    {children}
   </Cartcontext.Provider>
  );
};
