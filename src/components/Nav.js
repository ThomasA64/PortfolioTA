import React from "react";

export default function Nav() {
  return (
    <nav>
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
    </nav>
  );
}
