import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import links from "./Links"

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Link from "./Links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home  name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio}  github={user.links.github} linkedin={user.links.linkedin}/>
      <Link github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
