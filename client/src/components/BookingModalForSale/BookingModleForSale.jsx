import React, { useContext, useState } from 'react'
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from 'react-query';
import UserDetailContext from '../../Context/UserDetailsContext';
import { bookVisitForSale } from '../../utils/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
const BookingModleForSale = ({openedForSale,setOpenedForSale,email,propertyIdForSale}) => {

    const [value, setValue] = useState(null);
    const {
        userDetails: { token },
        setUserDetails,
      } = useContext(UserDetailContext);
    

      const handleBookingSuccessForSale = () => {
        toast.success("You have booked your visit", {
          position: "bottom-right",
        });
        setUserDetails((prev) => ({
          ...prev,
          bookings: [
            ...prev.bookings,
            {
              id: propertyIdForSale,
              date: dayjs(value).format("DD/MM/YYYY"),
            },
          ],
        }));
    }
    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisitForSale(value, propertyIdForSale,email,token),
        onSuccess: () => handleBookingSuccessForSale(),
        onError: ({ response }) => toast.error(response.data.message),
        onSettled: () => setOpened(false),
      });
  return (
    <Modal
    opened={openedForSale}
    setOpened={setOpenedForSale}
    onClose={()=>setOpened(false)}
    title="select your date of visit"
    centered
    >
      <div className="flexColCenter" style={{gap: "1rem"}}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Buy Property
        </Button>
      </div>
    </Modal>
    )
}

export default BookingModleForSale