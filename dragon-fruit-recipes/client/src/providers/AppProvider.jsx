import { createContext, useContext, useState, useEffect } from "react"
import Cookie from "js-cookie"

//AppContect bc file is called AppProvider - App can be anything but have them matching
const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext)

export default function AppProvider(props){
  const [ currentUser, setCurrentUser ] = useState()

  async function verifyUser(){
    const foundCookie = Cookie.get("auth-cookie");
    if (foundCookie){
      const response = await fetch("/api/user/verify");
      const foundUser = await response.json();
      console.log(foundUser)

    }
  }
  // useEffect(() => {
  //   verifyUser()
  // },[])
  // return(
  //   <AppContext.Provider value={{ storeName, setStoreName }}>
  //     { props.children }
  //   </AppContext.Provider>
  // )
}