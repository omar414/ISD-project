import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* right side */}
      <div className=" c-right">
        <div className="image-container">
          <img src="./c.png" alt="" />
        </div>
      </div>
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText">Ask us any question</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br /> We beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">luxury real-estate Support</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="https://wa.me/+96176119216">Chat with us</a></div>
                
              </div>
            </div>
            
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
