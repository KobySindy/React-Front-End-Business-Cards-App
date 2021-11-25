import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FavoriteCards } from "../components/cards/CardsComp";
import { getFavoriteCards, deleteFromFavorites } from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";

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
    <Container>
      {favoriteCardsBizNumbers.length === 0 ? (
        <></>
      ) : (
        <FavoriteCards
          cards={userFavoriteCards}
          state={state}
          removeCard={removeFavoriteCard}
        />
      )}
      {/* <FavoriteCards
        cards={userFavoriteCards}
        state={state}
        removeCard={removeFavoriteCard}
      /> */}
    </Container>
  );
}
export default FavoriteCardsPage;
