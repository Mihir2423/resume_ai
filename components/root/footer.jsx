import React from "react";
import "./footer.css";

export default function App() {
  return (
    <div className="outer-container">
      <div className="footer-container">
        <div className="news-letter">
          <div className="letter-title">resume.io</div>
          <div className="letter-description">
            Empowering individuals and businesses to achieve greatness through
            innovative solutions.
          </div>
          <div className="form-group">
            <input type="mail" placeholder="Enter your Email" />
            <button className="subscribe">Send</button>
          </div>

          <div className="social-block">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-skype"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-end">
          <span>
            <i className="far fa-copyright"></i> Copyright Resume.io. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
