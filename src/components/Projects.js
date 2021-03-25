import React from "react";

export default function Projects() {
  return (
    <>
      <h5 className="bio knowledge">PROJECTS</h5>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./docs/thumb_TAProfile.jpg" alt="Project" />
                </div>
                <div className="flip-card-back">
                  <h1>Interview Scheduler</h1>
                  <p>
                    React application that allows users to book and cancel
                    interviews. Combine a concise API with a WebSocket server to
                    build a realtime experience. Development focuses on a single
                    page application (SPA) called Interview Scheduler, built
                    using React. Data is persisted by the API server using a
                    PostgreSQL database.
                  </p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./docs/thumb_TAProfile.jpg" alt="Project" />
                </div>
                <div className="flip-card-back">
                  <h1>Thomas Arthur</h1>
                  <p>Full-Stack Developer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="./docs/thumb_TAProfile.jpg" alt="Project" />
                </div>
                <div className="flip-card-back">
                  <h1>Thomas Arthur</h1>
                  <p>Full-Stack Developer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
