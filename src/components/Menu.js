import React from "react";

export default function Menu() {
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger">
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
                  <a href="/">BIO</a>
                </li>
                <li>
                  <a href="/">PROJECTS</a>
                </li>
                <li>
                  <a href="/">GITHUB</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
