import React from "react";
import { personalDetails } from "../../data";
import ContactForm from "../../components/ContactForm/ContactForm";
import ListItem from "../../components/ListItem/ListItem";
import "./Contact.css";
const Contact = () => {
  const renderItems = () => {
    return personalDetails.map((item, index) => {
      return <ListItem item={item} key={index} />;
    });
  };
  return (
    <div className="Contact">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-md-5">
            <div className="contact_info">
              <h4>Contact Info</h4>
              <div className="list">{renderItems()}</div>
            </div>
          </div>
          <div className="col-md-7">
            <h4>Contact Me</h4>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
