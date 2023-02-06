import axios from "axios";
import BuisnessCard from "../interfaces/BuisnessCard";
const api: string = process.env.REACT_APP_API + "/cards" || "";

export function newCard(cardToAdd: BuisnessCard) {
    return axios.post(api, cardToAdd)
}
export function getAllCards() {
    return axios.get(api)
}
export function deleteCard(id: number) {
    return axios.delete(`${api}/${id}`)
}
export function updateCard(cardId: number, cardToEdit: BuisnessCard) {
    return axios.put(`${api}/${cardId}`, cardToEdit)
}
export function getCardById(id: number) {
    return axios.get(`${api}/${id}`)
}
export function getMyCards() {
    let userId: number = JSON.parse(
        sessionStorage.getItem("userData") as string
    ).userId;
    console.log(userId);

    return axios.get(`${api}?userId=${userId}`)
}