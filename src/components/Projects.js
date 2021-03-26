import React from "react";

export default function Projects() {
  return (
    <>
      <section className="projectshowcase">
        <div classname="double-proj">
          <a href="https://tweeter-ta.herokuapp.com/">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="img-projects"
                    src="./docs/TweeterInDesktopView.png"
                    alt="Project"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Tweeter</h1>
                  <p>
                    Tweeter is a simple, single-page Twitter clone. This app
                    contains HTML, CSS, JS, jQuery and AJAX for front-end stack.
                    It includes Node, Express and MongoDB on the back-end.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img-projects"
                  src="./docs/SchedulerMainPage.png"
                  alt="Project"
                />
              </div>
              <div className="flip-card-back">
                <h1>Interview Scheduler</h1>
                <p>
                  React application that allows users to book and cancel
                  interviews. Combine a concise API with a WebSocket server to
                  build a realtime experience. Development focuses on a single
                  page application (SPA) called Interview Scheduler, built using
                  React. Data is persisted by the API server using a PostgreSQL
                  database.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div classname="double-proj">
          <a href="https://tiny-app-ta.herokuapp.com/login">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="img-projects"
                    src="./docs/TinyAppUser.png"
                    alt="Project"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>TinyApp</h1>
                  <p>
                    Tiny App is an app built through Node.js and Express.js to
                    showcase Login features and Routing.
                    <br></br>
                    It allows the user to sign in and create custom short URLS.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img-projects"
                  src="./docs/AnimailHome.png"
                  alt="Project"
                />
              </div>
              <div className="flip-card-back">
                <h1>Animail</h1>
                <p>
                  Animail is a React application that allows users to send
                  messages via their favourite animals. Full-Stack
                  Web-Application using React.js, Express/Node.js and
                  PostrgesSQL. Styling is complete with Bootstrap and custom
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
