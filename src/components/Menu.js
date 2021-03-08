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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Bio</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
