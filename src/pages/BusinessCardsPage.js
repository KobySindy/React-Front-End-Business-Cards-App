import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { BusinessCards } from "../components/cards/CardsComp";
import { addCardToFavorites, getAllCards } from "../helpers/FetchHelper";
import { updateFavoriteCards } from "../helpers/stateHelper";

function BusinessCardsPage({ state, setState }) {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    getAllCards((cardsData) => {
      setAllCards(cardsData);
      console.log(state.user);
    });
  }, []);

  const addToFavorites = (cardBizNumber, state) => {
    addCardToFavorites(cardBizNumber, (res) => {
      debugger;
      if (res.message) {
        toast(res.message);
      } else {
        updateFavoriteCards(setState, res.favoriteCards);
        toast("Card Added To Favorites Successfuly!");
      }
    });
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
