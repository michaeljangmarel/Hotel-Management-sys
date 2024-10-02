import React from 'react'
import { getRole } from './TokenSession';
import { Navigate } from 'react-router-dom';

const UserMiddleware = ({children}) => {
    const isAuth = sessionStorage.getItem("auth");
    const role = getRole();

    if(isAuth && role == '[ROLE_USER]'){
         children;
        }else{
            return <Navigate to="/"/>
        }
}

export default UserMiddleware