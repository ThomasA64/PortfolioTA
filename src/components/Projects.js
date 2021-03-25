import React from "react";

export default function Projects() {
  return (
    <>
      <h5 className="bio knowledge">PROJECTS</h5>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="node.png"
              alt="Project"
              style="width:300px;height:300px;"
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  );
}
