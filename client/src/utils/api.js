import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'


export const api =axios.create({
    baseURL:"https://isd-project.onrender.com/api"
})

export const getAllProperties = async() => {
    try{
        const response =await api.get("/residency/allresd",{timeout:10*1000,})
        if(response.status === 400 || response.status ===500){
            throw response.data
        }
        return response.data
    }catch (error){
        toast.error("Something went wrong ")
        throw error
    }
}

// export const getAllProperties = async () => {
//   try {
//     const response = await api.get("/residency/allresd");
//     console.log('API response:', response.data); // Debugging line
//     if (response.status === 400 || response.status === 500) {
//       throw response.data;
//     }
//     return response.data;
//   } catch (error) {
//     console.error('API error:', error); // Debugging line
//     toast.error("Something went wrong ");
//     throw error;
//   }
// };

export const getAllPropertiesForSale = async() => {
  try{
      const response =await api.get("/residencyy/allresd",{timeout:10*1000,})
      if(response.status === 400 || response.status ===500){
          throw response.data
      }
      return response.data
  }catch (error){
      toast.error("Something went wrong ")
      throw error
  }
}

export const getPriority = async(id)=>{
    try{
        const response =await api.get(`/residency/${id}`,{timeout:10*1000,})
        if(response.status === 400 || response.status ===500){
            throw response.data
        }
        return response.data
    }catch (error){
        toast.error("Something went wrong ")
        throw error
    }
}
export const getPriorityForSale = async(id)=>{
  try{
      const response =await api.get(`/residencyy/${id}`,{timeout:10*1000,})
      if(response.status === 400 || response.status ===500){
          throw response.data
      }
      return response.data
  }catch (error){
      toast.error("Something went wrong ")
      throw error
  }
}

export const createUser = async (email, token) =>{
    try{
        await api.post('/user/register', {email},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }catch(error){
        toast.error("Something went wrong, Please try again")
        throw error;
    }
}

export const bookVisit = async (date, propertyId, email, token) => {
    try {
      await api.post(
        `/user/bookVisit/${propertyId}`,
        {
          email,
          id: propertyId,
          date: dayjs(date).format("DD/MM/YYYY"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };
  export const bookVisitForSale = async (date, propertyId, email, token) => {
    try {
      await api.post(
        `/user/bookVisit/${propertyId}`,
        {
          email,
          id: propertyId,
          date: dayjs(date).format("DD/MM/YYYY"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

  export const removeBooking = async (id, email, token) => {
    try {
      await api.post(
        `/user/removeBooking/${id}`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
  
      throw error;
    }
  };
  export const removeBookingForSale = async (id, email, token) => {
    try {
      await api.post(
        `/user/removeBooking/${id}`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
  
      throw error;
    }
  };
  
  


  export const toFav = async (id, email, token) => {
    try {
      await api.post(
        `/user/toFav/${id}`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      throw e;
    }
  };
  export const toFavForSale = async (id, email, token) => {
    try {
      await api.post(
        `/user/toFav/${id}`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      throw e;
    }
  };
  
  
  export const getAllFav = async (email, token) => {
    if(!token) return 
    try{
  
      const res = await api.post(
        `/user/allFav`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        
      return res.data["favResidenciesID"]
  
    }catch(e)
    {
      toast.error("Something went wrong while fetching favs");
      throw e
    }
  } 
  export const getAllFavForSale = async (email, token) => {
    if(!token) return 
    try{
  
      const res = await api.post(
        `/user/allFav`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        
      return res.data["favResidenciesID"]
  
    }catch(e)
    {
      toast.error("Something went wrong while fetching favs");
      throw e
    }
  } 
  

  export const getAllBookings = async (email, token) => {
  
    if(!token) return 
    try {
      const res = await api.post(
        `/user/allBookings`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data["bookedVisits"];
  
      
    } catch (error) {
      toast.error("Something went wrong while fetching bookings");
      throw error
    }
  }
  export const getAllBookingsForSale = async (email, token) => {
  
    if(!token) return 
    try {
      const res = await api.post(
        `/user/allBookings`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data["bookedVisits"];
  
      
    } catch (error) {
      toast.error("Something went wrong while fetching bookings");
      throw error
    }
  }


  export const createResidency = async (data, token) => {
    console.log(data)
    try{
      const res = await api.post(
        `/residency/create`,
        {
          data
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    }catch(error)
    {
      throw error
    }
  }
  export const createResidencyForSale = async (data, token) => {
    console.log(data)
    try{
      const res = await api.post(
        `/residencyy/create`,
        {
          data
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    }catch(error)
    {
      throw error
    }
  }
