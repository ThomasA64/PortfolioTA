import React from "react";

export default function Home() {
  return (
    <>
      <header className="showcase">
        <div className="container showcase-inner">
          <div className="main">
            <div className="main-title">
              <h1 className="load-in-top name">THOMAS G. ARTHUR</h1>
            </div>
          </div>
          <div className="logo-contain load-in-left">
            <h5 className="fullstack">FULL</h5>
          </div>
          <div className="logo-contain load-in-right">
            <h5 className="fullstack">STACK</h5>
          </div>
          <div className="logo-contain load-in-left-delayed">
            <h5 className="fullstack">DEVELOPER</h5>
          </div>
          <div className="logobtns">
            {" "}
            <a
              href="https://github.com/ThomasA64"
              className="btn load-in-bottom"
            >
              github
              <i className="fab fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ta64/"
              className="btn load-in-bottom "
            >
              linkedIn
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a href="#cards_landscape_wrap-2">
            {/* <div class="arrow">
              <div class="arrow-mask"></div>
            </div> */}
          </a>
        </div>
      </header>
    </>
  );
}
