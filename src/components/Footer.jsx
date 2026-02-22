import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>
      <div className="container mx-auto px-4">
        <p className="text-sm m-0">Copyright &copy; Raj Haldar {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
