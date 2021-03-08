import React from "react";

export default function Home() {
  return (
    <header className="showcase">
      <div className="container showcase-inner">
        <h1 className="load-in-top">THOMAS G. ARTHUR</h1>
        <h2 className="load-in-top">
          Junior Full-Stack Developer <i className="fas fa-laptop-code"></i>
        </h2>

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
        <a href="/" className="btn load-in-left">
          Read More
        </a>
      </div>
    </header>
  );
}
