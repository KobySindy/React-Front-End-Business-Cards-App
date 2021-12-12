import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FavoriteCards } from "../components/cards/CardsComp";
import { getFavoriteCards, deleteFromFavorites } from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";
// import "./pages-css/favoriteCardsPage.css";
import "./pages-css/mainPagesStyle.css";

function FavoriteCardsPage({ state, setState }) {
  const [userFavoriteCards, setuserFavoriteCards] = useState([]);
  let favoriteCardsBizNumbers = state.user.favoriteCards;

  useEffect(() => {
    getFavoriteCards(favoriteCardsBizNumbers, (cards) => {
      setuserFavoriteCards(cards);
    });
  }, [favoriteCardsBizNumbers]);

  const removeFavoriteCard = (cardBizNumber) => {
    deleteFromFavorites(cardBizNumber, (res) => {
      updateFavoriteCards(setState, res.favoriteCards);
    });
  };

  console.log(favoriteCardsBizNumbers);
  console.log(userFavoriteCards);

  return (
    <Container className='page-wrap'>
      {favoriteCardsBizNumbers.length === 0 ? (
        <></>
      ) : (
        <FavoriteCards
          className='cards-wrap'
          cards={userFavoriteCards}
          state={state}
          removeCard={removeFavoriteCard}
        />
      )}
    </Container>
  );
}
export default FavoriteCardsPage;
