import React from "react";

export default function Home() {
  return (
    <header className="showcase">
      <div className="container showcase-inner">
        <div className="main">
          <div className="main-title">
            <h1 className="load-in-top">THOMAS G. ARTHUR</h1>
            <h2 className="load-in-top">
              Full-Stack Developer <i className="fas fa-laptop-code"></i>
            </h2>
          </div>
        </div>
        <div className="logo-contain load-in-left">
          <img
            className="logo-img"
            src="https://mayankgroverconsultant.files.wordpress.com/2014/08/web-logos.png"
            alt="web logo"
          />
          <img
            className="logo-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="web logo"
          />
        </div>
        <div className="logo-contain load-in-right">
          <img
            className="logo-img"
            src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
            alt="web logo"
          />
          <img
            className="logo-img"
            src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/express-routing-logo.png"
            alt="web logo"
          />
        </div>
        <div className="logobtns">
          {" "}
          <a href="https://github.com/ThomasA64" className="btn load-in-bottom">
            github
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ta64/"
            className="btn load-in-bottom "
          >
            linkedIn
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
