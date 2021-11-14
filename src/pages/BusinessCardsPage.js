import { Container } from "react-bootstrap";
import CardsComp from "../components/my-cards/CardsComp";
import { getAllCards } from "../helpers/FetchHelper";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

function BusinessCardsPage({ state, setState }) {
  const [isBizCardsPage, setIsBizCardsPage] = useState(true);
  const user = state.user;
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    getAllCards((cardsData) => {
      setAllCards(cardsData);
    });
  }, []);
  console.log(allCards);
  // const history = useHistory();

  return (
    <>
      <Container>
        <CardsComp
          user={user}
          isBizCardsPage={isBizCardsPage}
          setIsBizCardsPage={setIsBizCardsPage}
          allCards={allCards}></CardsComp>
      </Container>
    </>
  );
}
export default BusinessCardsPage;
