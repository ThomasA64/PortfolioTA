import React from "react";

export default function Menu() {
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger radiant">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="https://github.com/ThomasA64?tab=repositories">
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ThomasA64">GITHUB</a>
                </li>
              </ul>
              <div
                class="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="vertical"
                data-theme="dark"
                data-vanity="tga64"
              >
                <a
                  class="LI-simple-link"
                  href="https://ca.linkedin.com/in/tga64?trk=profile-badge"
                >
                  Thomas G. Arthur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
