import React, { useEffect, useRef, useState } from "react";

export default function Connect() {
  const [imageVisible, setImageVisible] = useState(false);
  const imageRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // 768px is the default Tailwind 'md' breakpoint
    };

    // Set the resize listener
    window.addEventListener("resize", handleResize);

    // Clean up the listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Object to be sent to the backend
    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      // Replace with your API endpoint
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success - clear form, show message, etc.
        alert("Form submitted successfully!");
        // Clearing the form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        // Handle error
        alert("Failed to submit the form.");
      }
    } catch (error) {
      // Handle network errors
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="h-auto pt-6">
      <div className="text-center font-semibold md:text-4xl text-3xl text-black mb-2">
        <span className="text-[#004AAD]">Connect </span>
        with Our Team
      </div>
      <div className="md:text-lg text-base px-4 font-normal text-[#B6B2B2] text-center">
        Let’s chat about how we can help lighten your load and jazz up your
        content!
      </div>

      <div className="flex">
        <div className="flex-1 md:px-48 md:py-10 px-12 py-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Name *</label>
              <input
                type="text"
                className="w-full h-10 border px-2 py-1 border-[rgba(49,48,48,0.31)] rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Email *</label>
              <input
                type="email"
                className="w-full h-10 border  px-2 py-1 border-[rgba(49,48,48,0.31)] rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Phone *</label>
              <input
                type="tel"
                className="w-full h-10 border  px-2 py-1 border-[rgba(49,48,48,0.31)] rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Message </label>
              <textarea
                className="w-full border  px-2 py-1 border-[rgba(49,48,48,0.31)] rounded-lg"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" px-8 py-2 bg-[#004AAD] text-white font-medium text-lg rounded-full"
            >
              Submit
            </button>
          </form>
        </div>

        <div
          className={`flex-1 flex justify-center items-center ${
            isMobileView ? "hidden" : "block"
          }`}
        >
          <div
            className="w-96 mr-16 mb-20 fade-in"
            ref={imageRef}
            style={{ opacity: imageVisible ? 1 : 0 }}
          >
            <img src="/img/connect.png" alt="Connect" />
          </div>
        </div>
      </div>
    </div>
  );
}
