import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import clsx from "clsx";
import eventGA from '../../utils/ga'
import { useTranslation } from "react-i18next";
import validator from 'validator'
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
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
    validator.isEmail(email))
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
            placeholder={t('contact.message.body.name')}
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
            placeholder={t('contact.message.body.email')}
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
            placeholder={t('contact.message.body.subject')}
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
        placeholder={t('contact.message.body.context')}
      />
      <button
        className={clsx(
          "send_button theme_button",
          (Object.keys(errors).length !== 0 || isError) && "button_disabled"
        )}
        type="submit"
      >
       {t('contact.message.body.send')}
      </button>
      {isEmailSent && (
        <Alert variant={"success"}>
         {t('contact.message.body.success')}
        </Alert>
      )}
    </form>
  );
};

export default ContactForm;
