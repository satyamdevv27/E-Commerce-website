

// function Cart() {
//   return (
//     <div>
//       <h1>your products are  </h1>
//     </div>
//   )
// }

// export default Cart;


import  { useContext } from "react";
import { Cartcontext } from "./cartcontext";

function Cart() {
  const { cart } = useContext(Cartcontext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
