import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({user,logout}) => {
    const navigate = useNavigate()
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item  onClick={()=>navigate("./Favourites",{replace:true})}>
                Favourites For Rent
            </Menu.Item>
            <Menu.Item onClick={()=>navigate("./Bookings",{replace:true})}>
                Bookings
            </Menu.Item>
            <Menu.Item onClick={()=>navigate("./Sale",{replace:true})}>
                Bought Properties
            </Menu.Item>
            <Menu.Item onClick={()=>navigate("./FSale",{replace:true})}>
                Favorites For Sale
            </Menu.Item>
            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout();
            }}>
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu