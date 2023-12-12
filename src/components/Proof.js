import React from "react";

export default function Proof() {
  const splitText = (text) => {
    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += 3) {
      chunks.push(words.slice(i, i + 3).join(" "));
    }

    return chunks;
  };

  // Function to render a single set of elements with dynamic content
  const renderSet = (heading, subheading, point1, point2) => (
    <div className="flex flex-col items-left mb-4">
      <div className="w-12 h-12 bg-[#004AAD] mb-2"></div>
      <h2 className="font-semibold text-[#004AAD] text-xl">{heading}</h2>
      <p className="text-xl font-normal text-[#B6B2B2]">
        {splitText(subheading).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < splitText(subheading).length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      <ul className="text-base mt-1 text-black font-normal">
        <li>✔️ {point1}</li>
        <li>✔️ {point2}</li>
      </ul>
      <button className="my-4 py-1 px-2 w-32 border border-[#004AAD] text-[#004AAD] font-semibold text-base rounded-full">
        View Sample
      </button>
    </div>
  );

  const content = [
    {
      heading: "CLAT",
      subheading: "Common Law Admission Test",
      point1: "Tough questions",
      point2: "10+ questions",
    },
    {
      heading: "CAT",
      subheading: "Common Aptitude Test",
      point1: "Tough questions",
      point2: "10+ questions",
    },
    {
      heading: "UPSC",
      subheading: "Union Public Service Commission",
      point1: "Tough questions",
      point2: "10+ questions",
    },
    {
      heading: "AILET",
      subheading: "All India Law Entrance Test",
      point1: "Tough questions",
      point2: "10+ questions",
    },
    {
      heading: "IPMAT",
      subheading: "Integrated Programme in Management Aptitude Test",
      point1: "Tough questions",
      point2: "10+ questions",
    },
    {
      heading: "CUET",
      subheading: "Common University Entrance Test",
      point1: "Tough questions",
      point2: "10+ questions",
    },
  ];

  return (
    <div className="h-screen pt-8 flex flex-col items-center">
      <div className="text-center font-semibold text-4xl text-black mb-2">
        <span className="text-[#004AAD]">Need Proof?</span> <br />
        Our Sample Papers Speak for Themselves!
      </div>
      <div className="text-lg font-normal text-[#B6B2B2] text-center mb-6">
        Explore our expertly crafted sample papers and witness the exceptional
        quality and insight we bring to every
        <br /> subject across examinations.
      </div>
      <div className="flex flex-wrap justify-center">
        {content.map((item, index) => (
          <div key={index} className="w-1/3">
            {renderSet(item.heading, item.subheading, item.point1, item.point2)}
          </div>
        ))}
      </div>
    </div>
  );
}
