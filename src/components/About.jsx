
import React from "react";
import "../CSS/About.css"

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Why is it important to monitor snow conditions?</h1>
      <div>Learning to read the snowpack can be the difference between life and death in the mountains. </div>
      <div>Let's keep track of what it's trying to tell us! </div>
      <div>Live to ski another day...</div>
      <iframe
        className="movie"
        src="https://player.vimeo.com/video/144545554?color=ffffff"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default About;
