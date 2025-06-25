import contact from "../assets/images/contact.webp"
import "../styles/Contact.css"
function Contact() {
  return (
    <div className="contact_sec">
      <div className="img">
        <img src={contact} alt="" />
      </div>
      <form action="">
      <input type="text" placeholder="full name" />
      <input type="email" placeholder="Email" />
      <textarea name="" placeholder="enter messege"></textarea>
      <button>send</button>
      </form>
    </div>
  )
}

export default Contact
