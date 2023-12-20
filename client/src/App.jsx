import "./App.css";
import { Element } from "react-scroll";
import Website from "./pages/website.jsx";
import { BsBrowserChrome } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import PropertyForSale from "./pages/PropertyForSale/PropertyForSale.jsx";
import UserDetailContext from "./Context/UserDetailsContext";
import Bookings from "./pages/Bookings/Bookings";
import BookingsForSale from "./pages/BookingsForSale/BookingsForSale.jsx";
import Favourites from "./pages/Favourites/Favourites";
import PropertiesForSale from "./pages/PropertiesForSale/PropertiesForSale.jsx"
import FavouritesForSale from "./pages/FavouritesForSale/FavouritesForSale.jsx";
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  // Inside main.jsx or App.jsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
              console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
          });
  });
}

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/Properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/PropertiesForSale">
                  <Route index element={<PropertiesForSale />} />
                  <Route path=":propertyId" element={<PropertyForSale />} />
                </Route>
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/Sale" element={<BookingsForSale />} />
                <Route path="/Favourites" element={<Favourites />} />
                <Route path="/FSale" element={<FavouritesForSale />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
