import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-[65vh]">{children}</div>
      <Footer />
    </>
  );
};

export default PublicLayout;
