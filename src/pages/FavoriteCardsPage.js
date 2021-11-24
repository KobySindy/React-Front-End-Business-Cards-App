import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FavoriteCards } from "../components/cards/CardsComp";
import { getFavoriteCards } from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";

function FavoriteCardsPage({ state, setState }) {
  const [userFavoriteCards, setuserFavoriteCards] = useState([]);
  let favoriteCardsNumbers = state.user.favoriteCards;

  useEffect(() => {
    getFavoriteCards(favoriteCardsNumbers, (cards) => {
      setuserFavoriteCards(cards);
    });
  }, []);

  console.log(userFavoriteCards);
  return (
    <Container>
      <FavoriteCards cards={userFavoriteCards} state={state} />
    </Container>
  );
}
export default FavoriteCardsPage;
