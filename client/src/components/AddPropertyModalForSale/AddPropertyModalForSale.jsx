import { Container, Modal, Stepper } from '@mantine/core'
import React, { useState,useEffect } from 'react'
import AddLocation from '../AddLocation/AddLocation';
import { useAuth0 } from '@auth0/auth0-react';
import UploadImage from '../UploadImage/UploadImage';
// import BasicDetails from '../BasicDetails/BasicDetails';
import FacilitiesForSale from '../FacilitiesForSale/FacilitiesForSale';
import BasicDetailsForSale from '../BasicDetailsForSale/BasicDetailsForSale';

const AddPropertyModalForSale = ({opened,setOpened}) => {
    const [active, setActive] = useState(0);
    const { user } = useAuth0();


    const [propertyDetails, setPropertyDetailsForSale] = useState({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        images: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      });
      useEffect(() => {
        if (user?.email && user.email !== propertyDetails.userEmail) {
          setPropertyDetailsForSale(prevDetails => ({ ...prevDetails, userEmail: user.email }));
        }
      }, [user]);

      const nextStep = () => {
        setActive((current) => (current < 4 ? current + 1 : current));
      };

      const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current));
      };
  return (
    <Modal
    opened={opened}
    onClose={()=>setOpened(false)}
    closeOnClickOutside
    size={"90rem"}
    >
        <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetailsForSale}
            />
          </Stepper.Step>
          <Stepper.Step label="Images" description="Upload ">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetailsForSale}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Details">
            <BasicDetailsForSale
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetailsForSale}
            />
          </Stepper.Step>

          <Stepper.Step>
            <FacilitiesForSale
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetailsForSale}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        </Container>
    </Modal>
  )
}

export default AddPropertyModalForSale