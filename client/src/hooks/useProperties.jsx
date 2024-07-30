// import React from "react";
// import { useQuery } from "react-query";
// import { getAllProperties } from "../utils/api";

// const useProperties = () => {
//   const { data, isLoading, isError, refetch } = useQuery(
//     "allProperties",
//     getAllProperties,
//     { refetchOnWindowFocus: false }
//   );

//   return {
//     data,
//     isError,
//     isLoading,
//     refetch,
//   };
// };

// export default useProperties;


import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log('Fetched data in React Query:', data); // Debugging line
      },
      onError: (error) => {
        console.error('Error fetching data in React Query:', error); // Debugging line
      }
    }
  );

  return {
    data: Array.isArray(data) ? data : [],
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
