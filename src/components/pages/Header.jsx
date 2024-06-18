import React, { useState } from "react";
import { Link, Router, Route, Switch, NavLink } from "react-router-dom";

const Header = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const toggleHighlight2 = () => {
    setIsHighlighted(!isHighlighted);
  };
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };
  return (
    <div>
      <header className="header fixed">
        <div className="header-wrapper">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img
                  style={{ width: "140px !important" }}
                  src="/image/logoweb.png"
                  alt="Damro Tea"
                />
              </Link>
            </div>
            <div className="header-cart">
              <div className="cart-wrapper">
                <Link
                  href="#"
                  className="menu-toggle btn btn-theme-transparent mobile_nav_btn"
                  onClick={toggleHighlight}
                >
                  <i className="fa fa-bars"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-wrapper">
          <div className="container">
            <nav
              className={
                isHighlighted
                  ? "clearfix navigation"
                  : "closed clearfix navigation"
              }
            >
              <Link
                href="#"
                className="menu-toggle-close btn"
                onClick={toggleHighlight2}
              >
                <i className="fa fa-times"></i>
              </Link>
              <ul className="nav sf-menu">
                <li>
                  <Link to="/" className="noNeedBg" activeClassName="active">
                    <img
                      style={{
                        marginLeft: "-182px",
                        marginTop: "0px",
                        width: "140px",
                        marginBottom: "0px",
                      }}
                      src="/image/logoweb.png"
                      alt="Damro Tea"
                      className="logo-pc-size"
                    />
                  </Link>
                </li>
                <li
                  className="active ml-0 ml-sm-0 ml-md-5"
                  style={{ marginTop: "14px" }}
                >
                  <NavLink className="hoo" to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li style={{ marginTop: "14px" }}>
                  <NavLink
                    className="hoo"
                    to="/blacktea"
                    activeClassName="active"
                  >
                    Black Tea
                  </NavLink>
                </li>
                <li style={{ marginTop: "14px" }}>
                  <NavLink
                    className="hoo"
                    to="/greentea"
                    activeClassName="active"
                  >
                    Green Tea
                  </NavLink>
                </li>
                <li style={{ marginTop: "14px" }}>
                  <NavLink
                    to="/outlets/page/1"
                    activeClassName="active"
                    className="hoo"
                  >
                    Outlets
                  </NavLink>
                </li>
                <li style={{ marginTop: "14px" }}>
                  <NavLink
                    className="hoo"
                    to="/tea-factory"
                    activeClassName="active"
                  >
                    Tea Factories
                  </NavLink>
                </li>
                <li style={{ marginTop: "14px" }}>
                  <NavLink
                    className="hoo"
                    to="/about-us"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="navigation-wrapper mobile-menus">
          <div className="container">
            <nav className="navigation closed clearfix">
              <Link href="#" className="menu-toggle-close btn">
                <i className="fa fa-times"></i>
              </Link>
              <ul className="nav sf-menu">
                <li className="logo-li-tag">
                  <Link to="/" className="logohover">
                    <img
                      style={{ marginLeft: "-200px", marginTop: "-8px" }}
                      src="/images/logoweb.png"
                      alt="Damro Tea"
                      className="logo-pc-size"
                    />
                  </Link>
                </li>
                <li className="active" style={{ marginTop: "9px" }}>
                  <NavLink className="hoo" to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li style={{ marginTop: "9px" }}>
                  <NavLink
                    className="hoo"
                    to="/blacktea"
                    activeClassName="active"
                  >
                    Black Tea
                  </NavLink>
                </li>
                <li style={{ marginTop: "9px" }}>
                  <NavLink
                    className="hoo"
                    to="/greentea"
                    activeClassName="active"
                  >
                    Green Tea
                  </NavLink>
                </li>
                <li style={{ marginTop: "9px" }}>
                  <NavLink
                    to="/outlets/page/1"
                    isActive={(match, location) => {
                      return /^\/outlets\/page\/\d+/.test(location.pathname);
                    }}
                    activeClassName="active"
                    className="hoo"
                  >
                    Outlets
                  </NavLink>
                </li>
                <li style={{ marginTop: "9px" }}>
                  <NavLink
                    className="hoo"
                    to="/tea-factory"
                    activeClassName="active"
                  >
                    Tea Factories
                  </NavLink>
                </li>
                <li style={{ marginTop: "9px" }}>
                  <NavLink
                    className="hoo"
                    to="/about-us"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
