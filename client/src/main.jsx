import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-eprrp07s0pro520d.us.auth0.com"
    clientId="N47pv30dsTIy4P1YWdpo0CpW6owcTFed"
    authorizationParams={{ redirect_uri:"https://isd-real-estate.netlify.app"}}
    audience="http://localhost:3000"  
    scope="openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
