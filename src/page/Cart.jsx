import { Cartcontext } from "./cartcontext";
import { useContext, useState } from "react";
import "../styles/cart.css";
import PayButton from "./button";

function Cart() {
  const { cart, setcart } = useContext(Cartcontext);


  // State to track quantity for each item, indexed by item index
  const [quantities, setQuantities] = useState(
    cart.map(() => 1) // Initialize quantity for each item as 1
  );

  // Update the quantity for a specific item
  const updateQuantity = (index, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? Math.max(qty + 
        delta, 0) : qty))
    );
  };
  

// Remove item at specific index
const removeItem = (indexToRemove) => {
  const updatedCart = cart.filter((_, index) => index !== indexToRemove);
  const updatedQuantities = quantities.filter((_, index) => index !== indexToRemove);

  setcart(updatedCart);
  setQuantities(updatedQuantities);
};


  // Calculate total based on quantities
  const total = cart.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );

  const max_length = 100;

  return (
    <div className="cart_container">
      <h1>Your cart items</h1>
      {cart.length === 0 ? (
        "Nothing is in your cart"
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <div className="pro_info">
                <div className="pro_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="pro_title">
                  {item.name.length > max_length
                    ? `${item.name.substring(0, max_length)}....`
                    : item.name}
                </div>
              </div>
              <div className="pro_order">
                <p>₹{item.price}</p>
                <button onClick={() => removeItem(index)}>remove</button>

                
                <button className="cmn" onClick={() => updateQuantity(index, 1)}>
                  +
                </button>
                <p>{quantities[index]}</p>
                <button className="cmn" onClick={() => updateQuantity(index, -1)}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
     <div className="checkout">
       <h1>Your total is: ₹{total.toFixed(0)}</h1>
      <PayButton amount={total}/>
     </div>
    </div>
  );
}

export default Cart;
