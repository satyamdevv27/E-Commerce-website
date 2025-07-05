import "../styles/tx.css"
import order from "../assets/images/order.jpg"
function Thank() {
  return (
    <div className="thx_container">
      <div className="img">
        <img src={order} alt="order confirmation loo" />
      </div>
      <div className="msg"><h1>thank you you order has been confirmed</h1></div>
    </div>
  )
}

export default Thank
