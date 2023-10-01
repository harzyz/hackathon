import { useState } from "react";
import './contact.css'
import img01 from '../../public/Images/insta.png'
import img02 from '../../public/Images/twitterX.png'
import img03 from '../../public/Images/meta.png'
import img04 from '../../public/Images/linkedin.png'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      // Check if the email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailPattern.test(value));
    } else if (name === 'message') {
      // Check if the message is at least 10 characters long
      setIsMessageValid(value.length >= 10);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and message are valid
    if (isEmailValid && isMessageValid) {
      // Create a JSON object to send to the backend
      const dataToSend = {
        email: formData.email,
        phone_number: '0903322445533', // Replace with your phone number
        first_name: formData.firstName,
        message: formData.message,
      };

      fetch('https://example.com/api/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          console.log(data);

          // Reset the form and validation state
          setFormData({
            firstName: '',
            email: '',
            message: '',
          });
          setIsEmailValid(false);
          setIsMessageValid(false);
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    }
  };

  return (
    <div className='regC'>
      <div className="registerationC">
        <div className="contactInfo">
          <span className="contactInfoSub">
            <h1 className="subTitle3 linked">Get in touch</h1>
            <p>Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
            <span>
              <p>Share on</p>
              <span className="socialsIcon">
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
                <img src={img04} alt="" />
              </span>
            </span>
          </span>
        </div>
        <div className="regFormC">
          <div className="glareC"></div>
          <span className="backIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)"/>
            <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white"/>
            <defs>
            <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#903AFF"/>
            <stop offset="1" stopColor="#FF26B9"/>
            </linearGradient>
            </defs>
            </svg>
          </span>
          <div className="contactFormWrapper">
            <div className="contactHead">
              <h3 className="formTopic linked">Questions or need assistance?</h3>
              <h3 className="linked">Let us know about it!</h3>
            </div>
            <form className="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleChange}
              />
              {!isEmailValid && <p className="error">Please enter a valid email.</p>}
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {!isMessageValid && (
                <p className="error">Message should be at least 10 characters long.</p>
             )}
              <button type="submit" className="registerBtn mb1" disabled={!isEmailValid || !isMessageValid}>Submit</button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ContactPage
