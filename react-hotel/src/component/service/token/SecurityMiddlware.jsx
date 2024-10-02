import React from 'react'
import { Navigate } from 'react-router-dom';

const SecurityMiddlware = ({children}) => {
    const isAuth = sessionStorage.getItem("auth");
  
    if(isAuth){
      return  <Navigate to="/" />
    }else{
        return children;
    }
}

export default SecurityMiddlware