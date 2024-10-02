import axios from "axios";

const BASE_URL = "http://localhost:4500/room"
const Base = "http://localhost:4500/contact"
export const getAllRoom = () => axios.get(`${BASE_URL}/all`)

export const getOneRoom = (id) => axios.get(`${BASE_URL}/one/${id}`);

export const saveContact  = (contact) => axios.post(`${Base}/add` , contact)