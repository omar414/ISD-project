import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import useHeaderColor from "../../hooks/useHeaderColor";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { getMenuStyles } from "../../utils/common";
import { Tilt } from "react-tilt";
import { Text, Menu } from '@mantine/core'
import AddPropertyModalForSale from "../AddPropertyModalForSale/AddPropertyModalForSale.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const [modalOpenedForSale, setModalOpenedForSale] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  const handleAddPropertyClickForSale = () => {
    if (validateLogin()) {
      setModalOpenedForSale(true);
    }
  };
  
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter paddings innerWidth h-container">
        <NavLink to="/">
          <Tilt>
            <img className="logo1" src="./logoo2.jpg" alt="logo" width={100} />
          </Tilt>
        </NavLink>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/Properties">Rent</NavLink>


            <NavLink to="/PropertiesForSale">Buy</NavLink>


            {/* <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link> */}
            <a href="mailto:marealestaste40@gmail.com">Contact</a>
            {/* add property */}

            <Menu>
              <Menu.Target>

                <Text>Add Property</Text>

              </Menu.Target>
              <Menu.Dropdown className='dropdown-menue'>
                <Menu.Item onClick={handleAddPropertyClick} >
                  Add property to Rent
                </Menu.Item>
                <Menu.Item onClick={handleAddPropertyClickForSale}>
                  Add property to Sell
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
            <AddPropertyModalForSale opened={modalOpenedForSale} setOpened={setModalOpenedForSale}/>
            {/* login button */}
            {
              !isAuthenticated ?
                <button className="button" onClick={loginWithRedirect}>
                  Login
                </button> : (
                  <ProfileMenu user={user} logout={logout} />
                )
            }
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
