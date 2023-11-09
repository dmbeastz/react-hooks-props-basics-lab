import React from "react";

function Link (props) {
  return (
    <div id="links">
      <h2>Links</h2>
      <ul>
        <li>
          <a href={props.github}>{props.github}</a>
        </li>
        <li>
          <a href={props.linkedin}>{props.linkedin}</a>
        </li>
      </ul>
    </div>
  );
}

export default  Link;