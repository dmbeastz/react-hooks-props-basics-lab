import React from "react";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio ? <p>{props.bio}</p> : null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
    </div>
  );
}

export default About;
