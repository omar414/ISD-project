// import React from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import "./Residencies.css";
// import useProperties from '../../hooks/useProperties'

// import { sliderSettings } from "../../utils/common";
// import PropertyCard from "../PropertyCard/PropertyCard";
// import { PuffLoader } from "react-spinners";
// const Residencies = () => {
//   const {data,isError,isLoading}= useProperties()
//   if(isError){
//     return(
//       <div className="wrapper">
//         <span>Error while fetching data </span>
//       </div>
//     )
//   }

//   if(isLoading){
//     return(
//       <div className="wrapper flexCenter" style={{height:"60vh"}}>
//         <PuffLoader
//          height="80"
//          width="80"
//          radius={1}
//          color='#4066ff'
//          aria-label='puff-loading'
//          />
//       </div>  
//     )
//   }
//   return (
//     <section className="r-wrapper">
//       <div className="paddings innerWidth r-container">
//         <div className="r-head flexColStart">
//           <span className="grayText">Recently added</span>
//           <span className="primaryText">Popular Residencies for Rent</span>
//         </div>

//         <Swiper {...sliderSettings}>
//           <SliderButtons/>
     
//           {data.slice(0,8).map((card, i) => (
//             <SwiperSlide key={i}>
//              <PropertyCard card={card}/>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Residencies;

// const SliderButtons = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter r-buttons">
//       <button onClick={() => swiper.slidePrev()} className="r-prevButton">
//         &lt;
//       </button>
//       <button onClick={() => swiper.slideNext()} className="r-nextButton">
//         &gt;
//       </button>
//     </div>
//   );
// };

// import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import useProperties from '../../hooks/useProperties';
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import { PuffLoader } from "react-spinners";

const Residencies = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader color='#4066ff' aria-label='puff-loading' />
      </div>
    );
  }

  console.log('Rendered data:', data); // Debugging line

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="grayText">Recently added</span>
          <span className="primaryText">Popular Residencies for Rent</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

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

