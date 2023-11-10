"use clinet";

import "@/src/styles/hamburger.modules.css";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(!open);

  const onClickStart = () => {
    alert("You Click On Started 😉");
  };
  return (
    <>
      {/* hamburger Menu */}
      <div>
        {open ? (
          <nav className={open ? "nav-menu active" : "nav-menu"}>
            <div>
              {/*Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x close-icon"
                viewBox="0 0 16 16"
                onClick={showMenu}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            {/* start Menu Item  code*/}
            {/*validation part */}
            <div className="validation-section-hamburger">
              <p>
                <Link className="hamburger-sing-in" href="/">
                  Sing in
                </Link>
              </p>
              <button className="hamburger-start-btn" onClick={onClickStart}>
                Get Started
              </button>
            </div>
            {/* Menu Items */}
            <ul className="hamburger-menu-container">
              <li className="hamburger-menu-item">
                <Link className="hamburger-menu-item-link" href="/">
                  Business
                </Link>
              </li>
              <li className="hamburger-menu-item">
                <Link className="hamburger-menu-item-link" href="/">
                  Hakers
                </Link>
              </li>
              <li className="hamburger-menu-item">
                <Link className="hamburger-menu-item-link" href="/">
                  Industires
                </Link>
              </li>
              <li className="hamburger-menu-item">
                <Link className="hamburger-menu-item-link" href="/">
                  Resources
                </Link>
              </li>
              <li className="hamburger-menu-item">
                <Link className="hamburger-menu-item-link" href="/">
                  Company
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list hamburger-icon"
              viewBox="0 0 16 16"
              onClick={showMenu}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerMenu;
