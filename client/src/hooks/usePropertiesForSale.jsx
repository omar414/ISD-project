import React from "react";
import { useQuery } from "react-query";
import { getAllPropertiesForSale } from "../utils/api";

const usePropertiesForSale = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allPropertiesForSale",
    getAllPropertiesForSale,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default usePropertiesForSale;
