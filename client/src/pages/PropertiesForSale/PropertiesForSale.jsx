import React, { useState } from "react";
import "./Properties.css";
import { PuffLoader } from "react-spinners";
import SearchBar from "../../components/search bar/SearchBar";
import PropertyCardForSale from "../../components/PropertyCardForSale/PropertyCardForSale";
import usePropertiesForSale from "../../hooks/usePropertiesForSale";
const propertiesForSale = () => {
  const { data, isError, isLoading } = usePropertiesForSale();
  const [filter, setFilter] = useState("");
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching dataaaaaaaaa</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            data
              .filter(
                (property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <PropertyCardForSale card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default propertiesForSale;
