import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img className="logo2" src="./logoo2.jpg" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColCenter f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Beirut,Down Town 23 St, Lebanon</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
