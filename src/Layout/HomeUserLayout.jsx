import React from "react";
import NavbarCust from "../components/customerComp/NavbarCust";
import FooterCust from "../components/customerComp/FooterCust";

const HomeUserLayout = ({ children }) => {
  return (
    <div className="background w-full overflow-y-scroll">
      <NavbarCust />
      {children}
      <FooterCust />
    </div>
  );
};

export default HomeUserLayout;
