import "../Styles/App.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.log(error)
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="name">Contact Me!</div>
      <form className="form" onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder="Full Name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" required />
        <textarea name="message" cols="30" rows="10" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
