import React from "react";
import p1 from "../assets/projects/p-1.JPG";
import p2 from "../assets/projects/p-2.JPG";
import p3 from "../assets/projects/p-3.JPG";
import p4 from "../assets/projects/p-4.JPG";
import p6 from "../assets/projects/p-6.JPG";
import p7 from "../assets/projects/p-7.JPG";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="container">
        <h2>Selected Projects</h2>
        <div className="project-categories">
          <button className="p-btn" id="btn-active">
            ALL
          </button>
          <button className="p-btn">HTML CSS JS</button>
          <button className="p-btn">FULL STACK (MERN)</button>
        </div>
        <div className="all-project">
          <a href="https://mern-crud-redux.herokuapp.com/" target="_blank">
            <div className="project">
              <img src={p6} alt="" className="p-1" />
              <h3 className="project-text">MERN</h3>
            </div>
          </a>

          <a href="https://react-kart-js.herokuapp.com/" target="_blank">
            <div className="project">
              <img src={p7} alt="" className="p-1" />
              <h3 className="project-text">MERN</h3>
            </div>
          </a>

          <a href="https://nchawra2.github.io/todo-app-js/" target="_blank">
            <div className="project">
              <img src={p3} alt="" className="p-1" />
              <h3 className="project-text">JAVASCRIPT</h3>
            </div>
          </a>

          <a href="https://nchawra2.github.io/clock-app-js/" target={"_blank"}>
            <div className="project">
              <img src={p2} alt="" className="p-1" />
              <h3 className="project-text">JAVASCRIPT</h3>
            </div>
          </a>

          <a
            href="https://nchawra2.github.io/todo-app-mobile/index.html"
            target="_blank"
          >
            <div className="project">
              <img src={p1} alt="" className="p-1" />
              <h3 className="project-text">HTML CSS</h3>
            </div>
          </a>

          <div className="project">
            <img src={p4} alt="" className="p-1" />
            <h3 className="project-text">HTML CSS</h3>
          </div>
        </div>
      </section>
    </>
  );
}
