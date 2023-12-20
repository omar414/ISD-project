import React, { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllFavForSale } from "../utils/api";
import UserDetailContext from "../Context/UserDetailsContext";

const useFavouritesForSale = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllFavForSale(user?.email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favourites: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useFavouritesForSale;
