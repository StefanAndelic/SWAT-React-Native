import React, {useState,useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import NetworkError from "./src/components/NetworkError";
import MainNavigator from "./src/navigation/AppNavigator";
import AuthContext from "./src/utilities/context";
import tokenStorage from "./src/utilities/tokenStorage";
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [user,setUser] = useState();
  const [isReady,setIsReady] = useState(false)

  const restoreToken = async () => {
    const token = await tokenStorage.getToken();    
    if(!token) return;
    const t = jwtDecode(token);
    setUser(t);
    
  }

 
  if(!isReady){
    return <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} onError={console.warn} /> 
    
  }

  return (

  <AuthContext.Provider value={{user,setUser}}>
    <NetworkError />
    <NavigationContainer>
      {user  ? <MainNavigator/> : <AuthNavigator /> }
    </NavigationContainer>
  </AuthContext.Provider>
  );
}

