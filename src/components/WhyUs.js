import React from "react";
import { useEffect, useState, useRef } from "react";

function Box({ image, heading, subheading }) {
  return (
    <div className="flex flex-row justify-start items-start border-2 border-black p-4 w-full h-48 overflow-hidden">
      <img src={image} alt={heading} className="w-[30%]" />{" "}
      <div className="flex flex-col justify-between m-4">
        <h3 className="font-semibold text-[#004AAD] text-xl">{heading}</h3>
        <p className="text-base font-normal text-[#B6B2B2]">{subheading}</p>
      </div>
    </div>
  );
}
export default function WhyUs() {
  const boxesRef = useRef([]);
  const [isVisible, setIsVisible] = useState({});

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

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  const boxes = [
    {
      image: "/img/show.png",
      heading: "Ninja-Level Content Developers",
      subheading:
        "Our team? They’re like the secret agents of content – skilled, stealthy, and super good at what they do.",
    },
    {
      image: "/img/show.png",
      heading: "Custom Content, Your Style!",
      subheading:
        "Crafting unique, tailor-made pieces that perfectly align with your vision. Distinctively yours, always on point.",
    },
    {
      image: "/img/show.png",
      heading: "Transparent as a Crystal Ball",
      subheading:
        "Our clear, straightforward tracking lets you peek into the future of your content’s progress.",
    },
    {
      image: "/img/show.png",
      heading: "IPR Rights? All Yours, Buddy",
      subheading:
        "Once we hand over the content, it's all yours to use, tweak, and flaunt as you please.",
    },
    {
      image: "/img/show.png",
      heading: "Deadline Superheroes",
      subheading:
        "We take your timelines as seriously as a cat takes napping – very, very seriously.",
    },
    {
      image: "/img/show.png",
      heading: "Pocket-Friendly Excellence",
      subheading:
        "High-quality content, without the high costs. Get stellar content that respects your budget – it's like premium service at a bargain!",
    },
  ];

  return (
    <div className="h-screen pt-8 flex flex-col items-center">
      <div className="text-center font-semibold text-4xl text-black mb-2">
        <span className="text-[#004AAD]">Why </span>
        Team Up with Prepify?
      </div>
      <div className="text-lg font-normal text-[#B6B2B2] text-center mb-6">
        Teaming up with Prepify is like finding a treasure trove in the content
        world.
        <br /> Ready for a fun ride through our top 6 reasons? Here we go!
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2">
        {boxes.map((box, index) => (
          <div
            ref={(el) => (boxesRef.current[index] = el)}
            data-id={`box-${index}`}
            className={`fade-in ${isVisible[`box-${index}`] ? "visible" : ""}`}
            key={index}
          >
            <Box
              image={box.image}
              heading={box.heading}
              subheading={box.subheading}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
