import React, { useEffect, useRef, useState } from "react";

export default function Proof() {
  const [isVisible, setIsVisible] = useState({});
  const contentRef = useRef([]);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    contentRef.current.forEach((content) => {
      if (content) observer.observe(content);
    });

    return () => observer.disconnect();
  }, []);

  const splitText = (text) => {
    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += 3) {
      chunks.push(words.slice(i, i + 3).join(" "));
    }

    return chunks;
  };

  // Function to render a single set of elements with dynamic content
  const renderSet = (heading, subheading, point1, point2, point3) => (
    <div className="flex flex-col justify-center items-left mb-4 px-2 md:px-0">
      <div className="w-8 h-8 bg-[#004AAD] mb-2"></div>
      <h2 className="font-semibold text-[#004AAD] text-lg md:text-xl">
        {heading}
      </h2>
      <p className="text-base md:text-xl font-normal text-[#B6B2B2]">
        {splitText(subheading).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < splitText(subheading).length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      <ul className="text-sm md:text-base mt-1 text-black font-normal">
        <li>✔️ {point1}</li>
        <li>✔️ {point3}</li>
        <li>✔️ {point2}</li>
      </ul>
      <button className="my-4 py-2 px-4 w-full md:w-32 border border-[#004AAD] text-[#004AAD] font-semibold text-sm md:text-base rounded-full">
        View Sample
      </button>
    </div>
  );

  const content = [
    {
      heading: "CLAT",
      subheading: "Common Law Admission Test",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
    {
      heading: "CAT",
      subheading: "Common Aptitude Test",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
    {
      heading: "UPSC",
      subheading: "Union Public Service Commission",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
    {
      heading: "AILET",
      subheading: "All India Law Entrance Test",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
    {
      heading: "IPMAT",
      subheading: "Integrated Programme in Management Aptitude Test",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
    {
      heading: "CUET",
      subheading: "Common University Entrance Test",
      point1: "Topic wise test",
      point3: "Sectional mock test",
      point2: "Full lenght test",
    },
  ];

  return (
    <div className="h-auto md:h-screen pt-8 flex flex-col items-center px-4 md:px-0">
      <div className="text-center font-semibold text-2xl md:text-4xl text-black mb-2 px-2">
        <span className="text-[#004AAD]">Need Proof?</span> <br />
        Our Sample Papers Speak for Themselves!
      </div>
      <div className="text-base md:text-lg font-normal text-[#B6B2B2] text-center mb-6">
        Explore our expertly crafted sample papers and witness the exceptional
        quality and insight we bring to every subject across examinations.
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-start max-w-full md:max-w-6xl">
          {content.map((item, index) => (
            <div
              ref={(el) => (contentRef.current[index] = el)}
              data-id={`content-${index}`}
              className={`w-full md:w-1/3 p-2 fade-in ${
                isVisible[`content-${index}`] ? "visible" : ""
              }`}
              key={index}
            >
              {renderSet(
                item.heading,
                item.subheading,
                item.point1,
                item.point3,
                item.point2
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
