import React, { useEffect, useState } from "react";
import { tabs } from '../../data'
import "./Nav.css";
import clsx from "clsx";
import logo from '../../resources/logoDark.png'
const Nav = () => {
  const [tab, setTab] = useState(tabs[0]);
  const [onTop, setOnTop] = useState(true);

  const onTabClick = (tabName) => {
    setTab(tabName);
    document
      .getElementsByClassName(tabName)[0]
      .scrollIntoView({ behavior: "smooth"});
  };
  const renderTabs = () => {
    return tabs.map((tabName, index) => {
      return (
        <li
          className="nav-item"
          onClick={() => onTabClick(tabName)}
          key={index}
        >
          <div className={clsx("nav-ref", tab === tabName && "active")}>
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
            onClick={() => document.getElementsByClassName(tabs[0])[0].scrollIntoView()}
          />
        </div>
        <div className="collapse">
          <ul className="collapse-nav">{renderTabs()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
