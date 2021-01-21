import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import clsx from "clsx";
import eventGA from '../../utils/ga'
import "./ContactForm.css";
const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(true);
  const { register, handleSubmit, errors , getValues} = useForm();
  const onSubmit = async (data) => {
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
        setIsEmailSent(true);
        eventGA('Contact Click','Contact','send Message','success')
        document.getElementById("contact_form").reset();
      }).catch(()=>{
        eventGA('Contact Click','Contact','send Message','error')
      });
  };
  function validateForm() {
    const values = getValues()
    const { email , name , subject } = values
    const isError = !(name?.length > 0 &&
    subject?.length > 0 &&
    emailValidator.test(email))
    console.log(isError);
    setIsError (isError);
  }

  return (
    <form id="contact_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-6">
          <input
            name="name"
            className="form-control"
            ref={register({ required: true })}
            placeholder="Your Name*"
            onChange={() =>validateForm()}
          />
          <p className="text-danger">
            {errors.name && "please input your name"}
          </p>
        </div>
        <div className="col-lg-6">
          <input
            name="email"
            className="form-control"
            ref={register({
              required: true,
              pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            })}
            onChange={() =>validateForm()}
            placeholder="Your Email*"
          />
          <p className="text-danger">
            {(errors.email?.type === "required" && "please input your email") ||
              (errors.email?.type === "pattern" && "please input valid email")}
          </p>
        </div>
        <div className="col-lg-12">
          <input
            name="subject"
            className="form-control"
            ref={register({ required: true })}
            onChange={() =>validateForm()}
            placeholder="Subject (Site Project, Fix Bugs,etc)*"
          />
          <p className="text-danger">
            {errors.subject && "please input your subject"}
          </p>
        </div>
      </div>
      <textarea
        ref={register}
        name="message"
        className="form-control"
        rows="6"
        placeholder="Your Message ..."
      />
      <button
        className={clsx(
          "send_button theme_button",
          (Object.keys(errors).length !== 0 || isError) && "button_disabled"
        )}
        type="submit"
      >
        Send Message
      </button>
      {isEmailSent && (
        <Alert variant={"success"}>
          The request has been sent, I will contact you soon
        </Alert>
      )}
    </form>
  );
};

export default ContactForm;
