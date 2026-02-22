import React from "react";
import EmailSender from "./EmailSender";

const Contact = () => {
  return (
    <section className="contact-section py-5" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} id="contact">
      <div className="container">

        {/* Social Icons matching screenshot 2 */}
        <div className="social-icons">
          <a href="https://github.com/Rajhalder123" target="_blank" rel="noopener noreferrer" className="social-circle icon-github" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-circle icon-twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-circle icon-facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-circle icon-instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <h2 className="section-title text-center mb-5 mt-5">Let's Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="text-center text-muted mb-5">
              Whether you have a question, an opportunity, or just want to connect — feel free to send me a message below. I'll get back to you as soon as I can!
            </p>
            <EmailSender />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
