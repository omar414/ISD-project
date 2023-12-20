import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";
import { Tilt } from "react-tilt";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
         {/* left side */}
         <div className="flexColCenter hero-right">
          
          
          <motion.div 
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
            transition={{
              duration:3,
              type:"spring"
            }}
          className="image-container">
            
            <img src="./a.png" alt="" />
          </motion.div>
          
        </div>
        {/* right side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"2rem" ,opacity: 0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:3,
              type:"spring"
            }}
            >
              Welcome <br /> To The<br /> RealEstate <br/>World
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>


            {/* <SearchBar/> */}
          <div className="SB"></div>


          <div className="flexCenter stats">
          <div className="flexColCenter stat">
              <span>
                <CountUp className="numbers" start={8750} end={11000} duration={4} />
              <span className="plus">+</span>
              </span>
              <span className="secondaryText">Premium <br/>Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp className="numbers" start={1950} end={4252} duration={4} />
              <span className="plus">+</span>
              </span>
              <span className="secondaryText">Happy <br/> Customers</span>
            </div>
            <div className="flexColCenter stat">

             <span>
                <CountUp className="numbers" end={69}  />
              <span className="plus">+</span>
              </span>
              <span className="secondaryText">Awards <br/> Winning</span>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
