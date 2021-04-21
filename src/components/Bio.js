import React from "react";

export default function Bio() {
  return (
    <section className="bio-section">
      <div className="bio-image">
        <img src="./docs/thumb_TAProfile.jpg" alt="headshot" />
      </div>
      <div>
        <p className="bio-description">
          Hi, my name is Thomas and I am a recent graduate of Lighthouse Labs,
          the leading development bootcamp in Canada and have received my
          certification as a Full-Stack developer. This was an extremely
          fulfilling experience as I was able to explore my passion for the web
          industry and demonstrate my ability and willingness to learn in a
          fast-paced, collaborative team environment.
        </p>
      </div>
    </section>
  );
}
