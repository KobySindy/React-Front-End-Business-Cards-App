import { Container } from "react-bootstrap";
import CardComp from "./CardComp";

function CardsComp({
  cards,
  editCard,
  removeCard,
  allCards,
  isBizCardsPage,
  setIsBizCardsPage,
}) {
  return (
    <>
      <Container>
        {isBizCardsPage
          ? allCards.map((card, index) => (
              <CardComp
                setIsBizCardsPage={setIsBizCardsPage}
                isBizCardsPage={isBizCardsPage}
                key={card._id}
                card={card}></CardComp>
            ))
          : cards.map((card, index) => (
              <CardComp
                key={card._id}
                deleteHandler={removeCard}
                editHandler={editCard}
                card={card}
                isBizCardsPage={isBizCardsPage}
                setIsBizCardsPage={setIsBizCardsPage}></CardComp>
            ))}
      </Container>
    </>
  );
}
export default CardsComp;
