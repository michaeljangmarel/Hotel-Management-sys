import axios from "axios";
import { getToken } from "./token/TokenSession";

axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 const BaseUrl = "http://localhost:4500/api/auth";

 export const registerService = (registerDto) => axios.post(`${BaseUrl}/register`, registerDto);

 export const loginService = (logintDto) => axios.post(`${BaseUrl}/login` ,  logintDto);

// not null input register & login & contact 
// account band
// show user info     
// get user id from jwt 
// paginate 
// contact submit function 