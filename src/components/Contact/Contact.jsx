import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';  // Import toast
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lcspjik', 'template_y4sct3f', form.current, '_LonOr8utTFmgOAoz')
      .then((result) => {
        console.log(result.text);
        form.current.reset();  // Clear the form fields after successful submission
        toast.success("Message sent successfully!", {
          position: "top-right",  // Set position to top-right
          autoClose: 5000,  // Auto-close after 5 seconds
          className: 'custom-toast-success',  // Custom class for styling
        });
      }, (error) => {
        console.log(error.text);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",  // Set position to top-right
          autoClose: 5000,  // Auto-close after 5 seconds
          className: 'custom-toast-error',  // Custom class for styling
        });
      });
  };

  return (
    <div id="contact">
      <div className="headings">
        <div className="contact-heading">
          <h1>Contact</h1>
        </div>
        <div className="contact-description">
          Feel free to reach out to me for any questions or opportunities!
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Email Me <MdOutlineEmail /></h3>
        <input type="text" placeholder='Your Name' name="from_name" required />
        <input type="email" placeholder='Your Email' name="user_email" required />
        <textarea placeholder='Message' name="message" className='message' required></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
