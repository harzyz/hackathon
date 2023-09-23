import { useState } from "react";

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
    <div className='reg'>
      <div className="registeration">
        <div className="contactInfo">
          <span className="contactInfoSub">
          <h1 className="subTitle2 linked">Get in touch</h1>
          <p>Contact Information</p>
          <p>27,Alara Street Yaba 100012 Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          <p>Share on</p>
          <span>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </span>
          </span>
        </div>
        <div className="regForm">
          <div className="contactFormWrapper">
            <span className="">
              <h3 className="linked">Questions or need assistance?</h3>
              <h3 className="linked">Let us know about it!</h3>
            </span>
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
