import "../Styles/App.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nzyv36i",
        "template_cv3s9dj",
        form.current,
        "WazuDMYOC3S72xfhV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="Contact">Contact Me!</div>
      <form className="form" onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder="Full Name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" required />
        <textarea name="message" cols="30" rows="10" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
