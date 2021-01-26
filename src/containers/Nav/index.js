import React, { useEffect, useState } from "react";
import { tabs } from "../../languages/en";
import "./Nav.css";
import clsx from "clsx";
import logo from "../../resources/logoDark.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState(tabs[0]);
  const [onTop, setOnTop] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onTabClick = (tabName) => {
    setTab(tabName);
    document
      .getElementsByClassName(tabName)[0]
      .scrollIntoView({ behavior: "smooth" });
  };

  const renderTabs = () => {
    return t("tabs", { returnObjects: true }).map((tabName, index) => {
      return (
        <li
          className="nav-item"
          onClick={() => onTabClick(tabs[index])}
          key={index}
        >
          <div className={clsx("nav-ref", tab === tabs[index] && "active")}>
            {tabName}
          </div>
        </li>
      );
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 ? setOnTop(true) : setOnTop(false);
      tabs.forEach((tab) => {
        let element = document.getElementsByClassName(tab)[0];
        element?.getBoundingClientRect?.().top - 60 <= 0 &&
          element?.getBoundingClientRect?.().bottom >= 0 &&
          setTab(tab);
      });
    };
  }, []);
  return (
    <div className={clsx("nav", !onTop && "nav_fixed")}>
      <div className="container nav_container">
        <div className="navbar-brand">
          <img
            src={logo}
            height={60}
            width={60}
            alt="logo"
            onClick={() =>
              document.getElementsByClassName(tabs[0])[0].scrollIntoView()
            }
          />
        </div>
        <div className="collapse">
          <ul className="collapse-nav">{renderTabs()}</ul>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            {i18n.language === "he"
              ? t("languages.hebrew")
              : t("languages.english")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {i18n.language === "he" ? (
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                {t("languages.english")}
              </Dropdown.Item>
            ) : (
              <Dropdown.Item onClick={() => changeLanguage("he")}>
                {t("languages.hebrew")}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
