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

  const addToFavorites = (cardId) => {
    addCardToFavorites(cardId, () => {
      console.log("Card Added");
    });
  };

  return (
    <Container>
      <BusinessCards cards={allCards} addToFavorites={addToFavorites} />
    </Container>
  );
}
export default BusinessCardsPage;
