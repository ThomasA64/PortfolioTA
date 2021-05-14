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
                    src="./docs/TweeterHomeNew.png"
                    alt="Project"
                  />
                </div>
                <div className="flip-card-back">
                  <h1 className="h1desc">Tweeter</h1>
                  <p className="description">
                    Tweeter is a simple, single-page Twitter clone. This app
                    contains HTML, CSS, JS, jQuery and AJAX for front-end stack.
                    It includes Node, Express and MongoDB on the back-end.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/ThomasA64/scheduler">
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
                  <h1 className="h1desc">Interview Scheduler</h1>
                  <p className="description">
                    React application that allows users to book and cancel
                    interviews. Combine a concise API with a WebSocket server to
                    build a realtime experience. Data is persisted by the API
                    server using a PostgreSQL database.
                  </p>
                </div>
              </div>
            </div>
          </a>
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
                  <h1 className="h1desc">TinyApp</h1>
                  <p className="description">
                    Tiny App is an app built through Node.js and Express.js to
                    showcase Login features and Routing.
                    <br></br>
                    It allows the user to sign in and create custom short URLS.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/Samicap/AniMail">
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
                  <h1 className="h1desc">Animail</h1>
                  <p className="description">
                    Animail is a React application that allows users to send
                    messages via their favourite animals. Full-Stack
                    Web-Application using React.js, Express/Node.js and
                    PostrgesSQL. Styling is complete with Bootstrap and custom
                    CSS.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
