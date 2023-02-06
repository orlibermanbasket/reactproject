import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BuisnessCard from "../interfaces/BuisnessCard";
import { getMyCards } from "../services/CardServices";
import CardComponent from "./CardComponent";
import DeleteModalCard from "./DeleteModalCard";
import UpdateModalCard from "./UpdateModalCard";

interface MyCardsProps {
    cardsChange: boolean;
    setCardsChange: Function;
    refresh: Function;

}

const MyCards: FunctionComponent<MyCardsProps> = ({ cardsChange, setCardsChange, refresh, }) => {
    let navigate = useNavigate()
    let [myCards, setMyCards] = useState<BuisnessCard[]>([])
    let [cardId, setCardId] = useState<number>(0)
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    let [cardRemove, setCardRemove] = useState<boolean>(false);

    useEffect(() => {
        getMyCards().then((res) => setMyCards(res.data)).catch((err) => console.log(err))
    }, [cardsChange]);
    return <>
        <div className="container">
            <div className="row ">
                {myCards.length ? (myCards.map((card: BuisnessCard) => (

                    <CardComponent card={card} cardsChange={cardsChange} setCardsChange={setCardsChange} refresh={refresh} setCardId={setCardId} setOpenDeleteModal={setOpenDeleteModal} setOpenUpdateModal={setOpenUpdateModal} setCardRemove={setCardRemove} cardRemove={cardRemove} />
                ))) :
                    (<p style={{ fontSize: "3rem", position: "absolute", top: "50%", textAlign: "center", fontFamily: "cursive" }}


                    >  there is no cards yet... </p>)}
            </div>
        </div>



        <DeleteModalCard show={openDeleteModal} onHide={() => setOpenDeleteModal(false)} cardId={cardId} refresh={refresh} cardRemove={cardRemove} setCardRemove={setCardRemove} ></DeleteModalCard>
        <UpdateModalCard show={openUpdateModal} onHide={() => setOpenDeleteModal(false)} cardId={cardId} refresh={refresh} />
    </>
}

export default MyCards;