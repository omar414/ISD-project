import React, { useContext, useEffect } from "react";
import Header from "../header/Header";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../Context/UserDetailsContext";
import { useMutation } from "react-query";

import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";
import useFavouritesForSale from "../../hooks/useFavouritesForSale";
import useBookingsForSale from "../../hooks/useBookingsForSale";

const Layout = () => {
  useFavourites();
  useBookings();
  useFavouritesForSale();
  useBookingsForSale();
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {
      const res = await getAccessTokenSilently({
        authorizationParams: {
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res);
    };

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
