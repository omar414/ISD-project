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
          <span className="orangeText">New Feature</span>
          <span className="primaryText">Ask A.I any question</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br /> We beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText"> 123456798</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div> */}

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat with A.I</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            {/* <div className="flexStart row"> */}
              {/* theird mode */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText"> 123456798</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div> */}

              {/* forth mode */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText"> 123456798</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
