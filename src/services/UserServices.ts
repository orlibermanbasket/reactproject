import axios from "axios";
import BuisnessCard from "../interfaces/BuisnessCard";
import User from "../interfaces/User";
const api: string = process.env.REACT_APP_API + "/users" || "";

export function checkUser(userToCheck: User) {
    return axios.get(`${api}?email=${userToCheck.email}&password=${userToCheck.password}`)
}
export function newUser(userToAdd: User) {
    return axios.post(api, userToAdd)
}
// export function setUserCards(cardId: number){
// return axios.get()
// }