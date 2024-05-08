import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePageLayout = ({ children }) => {
  return (
    <div className="background w-full overflow-y-scroll">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
