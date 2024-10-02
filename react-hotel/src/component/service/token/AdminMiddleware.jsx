import React from 'react'
import { getRole, isUserLogIn } from './TokenSession'
import { Navigate } from 'react-router-dom';

const AdminMiddleware = ({children}) => {
    const isAuth = sessionStorage.getItem("auth");
    const role = getRole();

    if(isAuth && role == '[ROLE_ADMIN]'){
    return children
    }else{
        return <Navigate  to="/"/>
        
    }
}

export default AdminMiddleware