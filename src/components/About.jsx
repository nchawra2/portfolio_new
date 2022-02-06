import React from "react";
import img from "../assets/profile-full-img-2.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="container">
        <div className="about-profile">
          <div className="about-info">
            <h2>Hello, I am Naishadh</h2>
            <h3>Web Developer from India</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh felis, rutrum id eleifend nec, viverra ac nunc. Fusce sit
              amet interdum metus, a interdum massa. Nullam gravida, elit sed
              mattis semper, libero leo convallis mi, et elementum magna tortor
              sed tortor. Aliquam hendrerit metus non enim fringilla, eu
              molestie ante bibendum.
            </p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/nchawra/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/nchawra2"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>

              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </div>
            <button className="btn">
              <span className="download-btn-text">My Resume</span>{" "}
              <i class="fas fa-download"></i>
            </button>
          </div>
          <div className="about-profile-photo">
            <div className="profile-img-2">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skill-set">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3"></i>
            <i class="fab fa-js"></i>
            <i class="fab fa-react"></i>
            <i class="fab fa-node"></i>
            <i class="fas fa-database"></i>
            <i class="fab fa-github"></i>
          </div>
        </div>
      </section>
    </>
  );
}
