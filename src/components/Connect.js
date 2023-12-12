import React, { useState } from "react";

export default function Connect() {
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
    <div className="h-screen pt-8">
      <div className="text-center font-semibold text-4xl text-black mb-2">
        <span className="text-[#004AAD]">Connect </span>
        with Our Team
      </div>
      <div className="text-lg font-normal text-[#B6B2B2] text-center mb-6">
        Let’s chat about how we can help lighten your load and jazz up your
        content!
      </div>

      <div className="flex">
        <div className="flex-1 px-48 py-10">
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

        <div className="flex-1 flex justify-center items-center">
          <div className=" w-96">
            <img src="/img/homePage.png" alt="Connect" />
          </div>
        </div>
      </div>
    </div>
  );
}
