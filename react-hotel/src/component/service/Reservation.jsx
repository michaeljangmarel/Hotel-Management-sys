import axios from "axios";
const BaseUrlWeb = "http://localhost:4500/rev"
const BaseUrl = "http://localhost:4500/room"
export const getAllReservationInfo = () => axios.get(`${BaseUrlWeb}/all`);


export const BookingAsign = (requestDto) => axios.post(`${BaseUrlWeb}/bookRoom`, requestDto);

export const getCurrentReservationData = (name) => axios.get(`${BaseUrlWeb}/currentUser/${name}`)

export const getCheckTrue = (id) =>   axios.patch(`${BaseUrl}/check/${id}`);

export const deleteReservation = (id) => axios.delete(`${BaseUrlWeb}/del/${id}`)

export const getUserHistory =(name) => axios.get(`${BaseUrlWeb}/history/${name}`);

export const getHistoryRecord = () => axios.get(`${BaseUrlWeb}/history`);