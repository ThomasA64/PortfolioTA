import React from "react";

export default function Projects() {
  return (
    <>
      <section className="projectshowcase">
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
                messages via their favourite animals. Full-Stack Web-Application
                using React.js, Express/Node.js and PostrgesSQL. Styling is
                complete with Bootstrap and custom CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="img-projects"
                src="./docs/JungleHome.png"
                alt="Project"
              />
            </div>
            <div className="flip-card-back">
              <h1>Jungle on Rails</h1>
              <p>
                Jungle is a mini e-commerce application built with Ruby on
                Rails.
                <br></br>
                Choose from many wacky inventions including the Electric Chair,
                Human Feet Shoes and Modern Skateboards! Who needs plain boring
                common items found on Amazon when you have access to the world's
                most interesting items?!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
