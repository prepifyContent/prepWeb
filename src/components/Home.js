import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 p-8 flex justify-between bg-B6B2B2 z-10">
        <div className="text-3xl font-semibold text-[#004AAD]">prepify</div>
        <div className="text-base font-semibold text-[#004AAD]">ICONS</div>
      </div>

      <div className="h-10"></div>

      <div className="flex flex-col justify-start items-center h-screen">
        <div
          ref={textRef}
          className={`text-center font-semibold text-6xl text-black mt-2 mb-4 fade-in ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Stop{" "}
          <span className="text-[#004AAD]">
            Creating
            <br />
          </span>
          <span className="text-[#004AAD]">Start </span> Delegating
        </div>
        <div
          className={`text-lg font-normal text-[#B6B2B2] text-center fade-in ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          Dive into the world where content woes vanish, and perfect, engaging
          educational materials appear as if by <br />
          magic. Delegate, relax, and watch your courses shine!
        </div>
        <div
          ref={imageRef}
          className={`fade-in ${isVisible ? "visible" : ""}`}
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            transitionDelay: "0.6s",
          }}
        >
          <img
            src="/img/homePage.png"
            alt="landing image"
            style={{ width: "auto", height: "auto" }}
          />
        </div>{" "}
      </div>
    </div>
  );
}
