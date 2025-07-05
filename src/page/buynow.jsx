import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "./cartcontext";
const Buynow = ({ amount }) => {

 const navigate = useNavigate();
 const { setcart } = useContext(Cartcontext);

  const handlePayment = () => {
if(amount === 0){
  alert("please add products to the cart")
  return;
}



    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your Razorpay Key ID (NOT SECRET)
      amount: amount * 100, // in paise (100 INR = 10000)
      currency: "INR",
      name: "My React Store",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // optional
      handler: function (response) {    
        setcart([]);
        navigate("/thank-you")
        localStorage.removeItem("cart");
       
      },
      prefill: {
        name: "Satyam",
        email: "satyam@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
      
    };
   

    const rzp = new window.Razorpay(options);
    rzp.open();

  };

  return (
    <button onClick={handlePayment}>
      buy now{amount}
    </button>
  );
};

export default Buynow;
