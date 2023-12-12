import React from "react";
import Home from "./components/Home";
import Delegate from "./components/Delegate";
import WhyUs from "./components/WhyUs";
import Proof from "./components/Proof";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-[#FBF8F8]">
      <Home />
      <Delegate />
      <WhyUs />
      <Proof />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
