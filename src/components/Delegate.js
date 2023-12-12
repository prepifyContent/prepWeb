import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const imageDetails = [
  {
    src: "/img/homePage.png",
    heading: "Expert Content, Every time!",
    subheading:
      "Let the content experts work to ensure top tier content for you.",
  },
  {
    src: "/img/homePage.png",
    heading: "Focus on Course Success",
    subheading: "Get those examplary courses out there and make them a hit!",
  },
  {
    src: "/img/homePage.png",
    heading: "Skip the Hiring Hustle",
    subheading: "Just order top-notch content as and when you need it!",
  },
  {
    src: "/img/homePage.png",
    heading: "Strategize in Peace",
    subheading:
      "Strategy time, here you come! Allow yourself more headspace to plot your next big move.",
  },
  {
    src: "/img/homePage.png",
    heading: "Netflix & Actually Chill!",
    subheading:
      "Everyone deserves a break. Switch on the ‘zen’ mode for yourself now.",
  },
];

const addLineBreaks = (subheading) => {
  return subheading
    .split(" ")
    .reduce((acc, word, index) => {
      if (index % 7 === 0 && index !== 0) {
        return acc + "<br />" + word;
      }
      return acc + " " + word;
    })
    .trim();
};

export default function Delegate() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in").forEach((item) => {
      observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-start items-center h-full">
        <div className="text-center font-semibold text-4xl text-black ">
          <span className="text-[#004AAD]">Five Savvy Shifts:</span>
          <br />
          Why Outsourcing Content is Genius
        </div>
        <div className="text-lg font-normal text-[#B6B2B2] text-center ">
          Maximize impact, minimize effort. Unveil the power of expertly crafted
          content and revolutionize your educational <br /> approach with 5 key
          strategies.
        </div>
        <div className="grid grid-cols-3 gap-28 text-center">
          {imageDetails.slice(0, 3).map((item, index) => (
            <div
              key={index}
              data-id={`item-${index}`}
              className={`fade-in ${
                isVisible[`item-${index}`] ? "visible" : ""
              }`}
            >
              <img
                src={item.src}
                alt={`Description of ${item.heading}`}
                className="w-80 mx-auto"
              />
              <p className="font-semibold text-[#004AAD] text-xl">
                {item.heading}
              </p>
              <p
                className="text-base font-normal text-[#B6B2B2]"
                dangerouslySetInnerHTML={{
                  __html: addLineBreaks(item.subheading),
                }}
              ></p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-28 text-center mt-4">
          {imageDetails.slice(3, 5).map((item, index) => (
            <div
              key={index}
              data-id={`item-${index}`}
              className={`fade-in ${
                isVisible[`item-${index}`] ? "visible" : ""
              }`}
            >
              {" "}
              <img
                src={item.src}
                alt={`Description of ${item.heading}`}
                className="w-80 mx-auto"
              />
              <p className="font-semibold text-[#004AAD] text-xl">
                {item.heading}
              </p>
              <p
                className="text-base font-normal text-[#B6B2B2]"
                dangerouslySetInnerHTML={{
                  __html: addLineBreaks(item.subheading),
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
