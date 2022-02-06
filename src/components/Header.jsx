import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [job, setJob] = useState("MERN STACK Developer");

  useEffect(() => {
    let a = setInterval(() => {
      setJob("FRONT END DEVELOPER");
    }, 2000);

    let b = setInterval(() => {
      setJob("MERN STACK Developer");
    }, 4000);

    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav className="navigation">
            <div className="logo">NC.</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/">Testimonial</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="intro">
            <div className="profile-img"></div>
            <div className="profile-name">Hi, I'm Naishadh Chawra</div>
            <div className="profile-job">{job}</div>
            <div className="icon-animate">
              <a href="#about">
                <i class="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
