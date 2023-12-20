import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import usePropertiesForSale from '../../hooks/usePropertiesForSale'

import { sliderSettings } from "../../utils/common";
import { PuffLoader } from "react-spinners";

import PropertyCardForSale from "../PropertyCardForSale/PropertyCardForSale";


const ResidenciesForSale = () => {
  const {data,isError,isLoading}= usePropertiesForSale()
  if(isError){
    return(
      <div className="wrapper">
        <span>Error while fetching data </span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height:"60vh"}}>
        <PuffLoader
         height="80"
         width="80"
         radius={1}
         color='#4066ff'
         aria-label='puff-loading'
         />
      </div>  
    )
  }
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Recently added</span>
          <span className="primaryText">Popular Residencies for Sale</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons/>
        
           {/* slider */}
           
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
             <PropertyCardForSale card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ResidenciesForSale;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
