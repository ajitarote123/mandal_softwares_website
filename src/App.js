import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <main>
        <header>
          <img src="/content/images/MLogoW.png" alt="Mandal Softwares Icon" />
          <div className="mainheadings">
            <h1>Mandal Softwares</h1>
            <h2>Software Development &amp; IT Services</h2>
            <p>&nbsp;</p>
          </div>
          <nav id="menubar">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li className="">
                <a href="/about">About</a>
              </li>
              <li className="">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="mainbody" className="container">
          <h1 style={{ fontSize: 7 + "rem" }}>Welcome To Mandal Softwares</h1>
        </section>
        <footer>
          <div className="social-media-links">
            <a
              href="//fb.me/mandalsoftwares"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className="fa fa-facebook"></i>
              {/* <FontAwesomeIcon icon={brands("facebook")} /> */}
            </a>{" "}
            |{" "}
            <a
              href="//twitter.com/MandalSoftwares"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <i className="fa fa-twitter"></i>
              {/* <FontAwesomeIcon icon={brands("twitter")} /> */}
            </a>{" "}
            |{" "}
            <a
              href="//linkedin.com/company/Mandal-Softwares"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
              {/* <FontAwesomeIcon icon={brands("linkedin")} /> */}
            </a>
          </div>
          <a href="/">
            <img
              className="footerlogo"
              src="/content/images/mandal_logo_640x320.png"
              alt="Mandal Softwares Logo"
            />
          </a>
          <div className="copyright">&copy; 2023</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
