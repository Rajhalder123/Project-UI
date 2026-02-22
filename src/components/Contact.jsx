import React from "react";
import EmailSender from "./EmailSender";

const Contact = () => {
  return (
    <section className="py-20 transition-colors duration-300" id="contact" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      <div className="container mx-auto px-4">

        {/* Social Icons matching screenshot 2 */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-8">
          <a href="https://github.com/Rajhalder123" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-14 h-14 rounded-full text-white text-2xl bg-[#333333] hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 shadow-md no-underline" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-14 h-14 rounded-full text-white text-2xl bg-[#29a0f0] hover:bg-[#1da1f2] transition-all duration-300 hover:-translate-y-1 shadow-md no-underline" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-14 h-14 rounded-full text-white text-2xl bg-[#3b5998] hover:bg-[#2d4373] transition-all duration-300 hover:-translate-y-1 shadow-md no-underline" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-14 h-14 rounded-full text-white text-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 transition-all duration-300 hover:-translate-y-1 shadow-md no-underline" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="text-center mb-12 mt-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase inline-block relative pb-2 m-0" style={{ color: 'var(--text-main)' }}>
            Let's Get in Touch
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </h2>
        </div>

        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <p className="text-center mb-10 text-lg leading-relaxed opacity-90" style={{ color: 'var(--text-muted)' }}>
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
