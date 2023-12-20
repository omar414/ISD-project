import React from 'react'
import Companies from "../components/companies/Companies";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import ResidenciesForSale from '../components/ResidenciesForSale/ResidenciesForSale';
// import ContactForm from '../components/ContactForm/ContactForm';


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Companies />
    <Residencies/>
    <ResidenciesForSale/>
    <Value/>
    <Contact/>
    <GetStarted/>
    {/* <ContactForm/> */}
    
  </div>
  )
}

export default Website