import { createContext, useContext, useState, useEffect } from "react"
import Cookie from "js-cookie"

//AppContect bc file is called AppProvider - App can be anything but have them matching
const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext)

export default function AppProvider(props){




  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };
  
  const [ currentUser, setCurrentUser ] = useState()

  async function verifyUser(){
    const foundCookie = Cookie.get("auth-cookie");
    if (foundCookie){
      const response = await fetch("/api/users/verify");
      const foundUser = await response.json();
      console.log(foundUser)
      setCurrentUser(foundUser.results)
    }
  }
  useEffect(() => {
    verifyUser()
  },[])
  return(
    <AppContext.Provider value={{ currentUser }}>
      { props.children }
    </AppContext.Provider>
  )



  
}