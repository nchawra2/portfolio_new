import React from "react";
import img from "../assets/profile-full-img.jpg";

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
            <div className="icons">icons</div>
            <a className="btn">
              <span className="download-btn-text">My Resume</span> <i class="fas fa-download"></i>
            </a>
          </div>
          <div className="about-profile-photo">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
