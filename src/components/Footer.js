import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-[#004AAD] flex flex-col sm:flex-row items-center justify-center p-4">
      <div className="flex-1 flex items-left justify-center flex-col p-4 border-r-2 border-white">
        <div className=" font-semibold text-4xl text-white pl-36 px-20 mb-4">
          Prepify
        </div>
        <p className="text-[#B6B2B2] font-normal text-base pl-36 px-20 text-left">
          At Prepify, we are committed to excellence, integrity, and innovation.
          Our foundation is built on ethical practices and transparency,
          ensuring trust in every service we provide. We prioritize quality,
          striving to exceed expectations in content creation and customer
          service. Our collaborative approach fosters continuous innovation,
          driving us to deliver exceptional value and transformative educational
          experiences.{" "}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center flex-col space-y-4">
        {["Security", "Privacy Policy", "About", "Payment", "Home"].map(
          (buttonText, index) => (
            <button key={index} className=" font-normal text-lg text-[#f0efef]">
              {buttonText}
            </button>
          )
        )}
      </div>
    </section>
  );
}
