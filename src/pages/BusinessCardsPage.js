import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BusinessCards } from "../components/cards/CardsComp";
import { addCardToFavorites, getAllCards } from "../helpers/FetchHelper";

function BusinessCardsPage({ state, setState }) {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    getAllCards((cardsData) => {
      setAllCards(cardsData);
    });
  }, []);

  const addToFavorites = (cardId, state) => {
    let user = state.user;
    let oldFavoriteCardsArr = user.favoriteCards;
    if (oldFavoriteCardsArr.includes(cardId))
      return console.log(`Card Already Favorite`);
    // addCardToFavorites(cardId, (user) => {});
  };

  return (
    <Container>
      <BusinessCards
        state={state}
        cards={allCards}
        addToFavorites={addToFavorites}
      />
    </Container>
  );
}
export default BusinessCardsPage;
