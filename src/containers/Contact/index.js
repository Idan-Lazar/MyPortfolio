import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ListItem from "../../components/ListItem/ListItem";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import "./Contact.css";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const renderItems = () => {
    return t("contact.info.details", { returnObjects: true }).map(
      (item, index) => {
        return <ListItem item={item} key={index} />;
      }
    );
  };
  return (
    <div className="Contact">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-md-5">
            <div className="contact_info">
              <h4>{t("contact.info.title")}</h4>
              <div className={clsx("list", i18n.language === "he" && "he")}>
                {renderItems()}
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h4>{t("contact.message.title")}</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
