import React from "react";
import p1 from "../assets/projects/p-1.JPG";

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
          <div className="project">
            <img src={p1} alt="" className="p-1" />
            <h3 className="project-text">HTML CSS</h3>
          </div>
          <div className="project p-2"></div>
          <div className="project p-3"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </section>
    </>
  );
}
