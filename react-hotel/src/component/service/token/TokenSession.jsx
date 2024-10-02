import { jwtDecode } from "jwt-decode";

 export const storeToken = (token) => localStorage.setItem("token" , token);

 export const getToken = () => localStorage.getItem("token");


 export const logoutSession = () =>  {
    localStorage.clear();
    sessionStorage.clear();
 }


// after all login / register 

export const saveLoginUserInfo = (user) =>sessionStorage.setItem("auth" , user);

export const isUserLogIn = () => {
    const data = sessionStorage.getItem("auth");

    if(data != null){
        return false;
    }else{
        return true;
    }
}


export const getLoggedUserData = () => {
    const user = sessionStorage.getItem("auth");
    return user;
}


//  

export const storeTokenWithOut = (token) => localStorage.setItem("wt" , token);
export const getRole = () => {
     const role = localStorage.getItem("wt");
     return role ;
}