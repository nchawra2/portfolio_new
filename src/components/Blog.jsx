import React from "react";

import b1 from "../assets/blogs/b-1.jpg";
import b2 from "../assets/blogs/b-2.jpg";
import b3 from "../assets/blogs/b-3.jpg";

export default function Blog() {
  return (
    <>
      <section id="blog" className="container">
        <div className="blog-heading">Blog Post</div>
        <div className="blogs">
          <div className="blog">
            <div className="b-img">
              <img src={b1} alt="" className="blog-img" />
            </div>
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-text">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </div>
            <button className="blog-btn">Read More</button>
          </div>
          <div className="blog">
            <div className="b-img">
              <img src={b2} alt="" className="blog-img" />
            </div>
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-text">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </div>
            <button className="blog-btn">Read More</button>
          </div>
          <div className="blog">
            <div className="b-img">
              <img src={b3} alt="" className="blog-img" />
            </div>
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-text">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </div>
            <button className="blog-btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
}
