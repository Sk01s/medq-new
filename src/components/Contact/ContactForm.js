import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      //   console.log(payload, url);
      //   const response = await axios.post(url, payload);
      const res = await emailjs.send(
        "service_bsqfpq5",
        "template_a5sr9eu",
        payload,
        "9i3mr3h7qfOQgnvua"
      );
      
      setContact(INITIAL_STATE);
      toast.success("your message had been sent!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="contact-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="contact-form">
              <span className="sub-title">Get In Touch</span>
              <h2>We want to provide you with a great experience</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Mobile No.</label>
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="default-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-image text-center">
              <img src="/img/contact.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
