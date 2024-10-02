import React from 'react'
import { Navigate } from 'react-router-dom';

const Middleware = ({children}) => {
   const isAuth =  sessionStorage.getItem("auth");

   if(isAuth){
    return children;
   }else{
    return <Navigate to="/login-page" />
   }
}

export default Middleware