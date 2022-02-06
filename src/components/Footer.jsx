import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-icons">
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
        </div>
        <div className="copyright">
          {" "}
          &copy;2022 All Rights Reserved. Made By <br /> Naishadh Chawra
        </div>
      </footer>
    </>
  );
}
