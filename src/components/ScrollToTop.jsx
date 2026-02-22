import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[999]">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="flex justify-center items-center w-12 h-12 text-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-xl border-0 outline-none cursor-pointer"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
