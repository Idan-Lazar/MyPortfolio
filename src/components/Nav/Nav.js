import React, { useEffect, useState } from "react";
import "./Nav.css";
import clsx from "clsx";
const tabs = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "testimonial",
  "Contact",
];

const Nav = () => {
  const [tab, setTab] = useState("Home");
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
          <a className={clsx("nav-ref", tab === tabName && "active")}>
            {tabName}
          </a>
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHTmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTEyVDExOjIyOjIzKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0xM1QxMjo1NjowOSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0xM1QxMjo1NjowOSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkOGU3NDFlMy02YjEwLWVmNDktOTk2Ni05OTA3MmM2YmU5NTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MjM0NzM0MC0wZGFkLTdiNDgtYTg0OC02MGU0MDAwMjE4ZjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNzU5MGRlYi0xMzgxLWQ2NDQtYWUxYS04MWFmM2Y4N2MyMDEiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT4zODM2Qzc4NzA4RUY5ODU2QzREMjQ2OTE1QzRDQTBCODwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3NTkwZGViLTEzODEtZDY0NC1hZTFhLTgxYWYzZjg3YzIwMSIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0xMlQxMToyMjoyMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjZhMWIyNy04N2Q3LWFmNDYtYTM2Yy01ZWYyMDNiMzdmOWMiIHN0RXZ0OndoZW49IjIwMjAtMTEtMTJUMTE6MzU6MDQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDhlNzQxZTMtNmIxMC1lZjQ5LTk5NjYtOTkwNzJjNmJlOTUyIiBzdEV2dDp3aGVuPSIyMDIwLTExLTEzVDEyOjU2OjA5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3No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"
            height={50}
            width={50}
            alt="logo"
            onClick={() => document.getElementsByClassName("Home")[0].scrollIntoView()}
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
