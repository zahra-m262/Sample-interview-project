"use client";

import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";

import "@/src/styles/header.modules.css";

const Header = () => {
  const onClickStart = () => {
    alert("You Click On Started 😉");
  };

  return (
    <section>
      <div className="header-container">
        {/* about logo and Name of site*/}
        <div>
          <Link className="logo-link" href="/">
            <div className="logo-container">
              <Image className="logo" src={Logo} alt="logo" />
              <p id="res" style={{ fontWeight: "900", letterSpacing: ".2rem" }}>
                HACK
                <span style={{ fontWeight: "100", color: "#e2dfdf" }}>THE</span>
                BOX
              </p>
            </div>
          </Link>
        </div>
        {/*about Menu */}
        <div className="list-menu">
          <ul className="menu-section">
            <li className="menu-item">
              <Link className="menu-item-link" href="/">
                Business
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" href="/">
                Hakers
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" href="/">
                Industires
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" href="/">
                Resources
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" href="/">
                Company
              </Link>
            </li>
          </ul>
        </div>
        {/*about Validation */}
        <div className="validation-section">
          <p>
            <Link className="sing-in" href="/">
              Sing in
            </Link>
          </p>
          <button className="start-btn" onClick={onClickStart}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
