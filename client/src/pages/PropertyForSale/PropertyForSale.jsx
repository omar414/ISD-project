import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getPriorityForSale, removeBookingForSale } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Property.css";
import useAuthCheck from "../../hooks/useAuthCheck"
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import Map from "../../components/Map/Map";
import BookingModle from "../../components/BookingModal/BookingModle";
import UserDetailContext from "../../Context/UserDetailsContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/Heart/Heart";
import { set } from "lodash";
const PropertyForSale = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getPriorityForSale(id)
  );
  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

const {mutate:cancelBooking,isLoading:cancelling}=useMutation({
  mutationFn:()=>removeBookingForSale(id,user?.email,token ),
  onSuccess: () => {
    setUserDetails((prev)=>({
      ...prev,
      bookings: prev.bookings.filter((bookings)=>bookings?.id !== id)
    }))
    toast.success("Booking cancelled", { position: "bottom-right" });
  }
})
const [content, setContent] = useState('Buy this Property');
const [style, setStyle] = useState({backgroundColor: '#4066ff',fontWeight: 500,padding:  10,color: 'white',border: 'none',borderRadius: 4,width:550});
const changeContentAndStyle = () => {
  setContent('Purchased Successfully');
  setStyle({backgroundColor: 'white',fontWeight: 500,padding:  10,color: 'green',border: '1px solid green',borderRadius: 4,width:550})
};
// const [modalOpenedForSale,setModalOpenedForSale] = useState(false)
const {validateLogin}= useAuthCheck()
const {user} = useAuth0()
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader color="#3498db" loading={true} />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart id={id}/>
        </div>

        {/* image */}
        <img src={data?.images} alt="home image" />

        <div className="flexCenter property-details">
          {/* left side */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="grayText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span> {data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/* parking */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span> {data?.facilities?.parkings} Parking</span>
              </div>
              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span> {data?.facilities?.bedrooms} Room/s</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{" | "}
                {data?.city}{" | "}
                {data?.country}{"."}
              </span>
            </div>
            {/* booking button */}
           {/* { bookings?.map((bookings)=>bookings.id).includes(id)?(
            <>
           <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
              <span>Cancel booking</span>
            </Button>
            <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span> 
            </>
           ):(
           

            <BookingModle
            opened={modalOpenedForSale}
            setOpened={setModalOpenedForSale}
            propertyIdForSale={id}
            email={user?.email}
            /> */}
             <button
              // className="button"
             style={style}
              onClick={changeContentAndStyle}
            ><div >{content}</div></button>
          </div>

          {/* right side */}
          <div className="map ">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForSale;
