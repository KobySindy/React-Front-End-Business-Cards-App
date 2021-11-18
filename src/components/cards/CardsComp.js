import { Container } from "react-bootstrap";
import CardComp from "./CardComp";

export function BusinessCards({ cards, addToFavorites }) {
  return <Cards addToFavorites={addToFavorites} cards={cards} />;
}

export function MyCards({ cards, editCard, removeCard }) {
  return <Cards cards={cards} editCard={editCard} removeCard={removeCard} />;
}

function Cards({
  cards = [],
  addToFavorites = null,
  editCard = null,
  removeCard = null,
}) {
  return (
    <Container>
      {cards.map((card, index) => (
        <CardComp
          key={card._id}
          card={card}
          addToFavorites={addToFavorites}
          editCard={editCard}
          removeCard={removeCard}></CardComp>
      ))}
    </Container>
  );
}

// function CardsComp({
//   cards,
//   editCard,
//   removeCard,
//   allCards,
//   isBizCardsPage,
//   addToFavorites,
// }) {
//   return (
//     <Container>
//       {isBizCardsPage
//         ? allCards.map((card, index) => (
//             <CardComp
//               key={card._id}
//               card={card}
//               isBizCardsPage={isBizCardsPage}
//               addToFavorites={addToFavorites}></CardComp>
//           ))
//         : cards.map((card, index) => (
//             <CardComp
//               key={card._id}
//               card={card}
//               deleteHandler={removeCard}
//               editHandler={editCard}
//               isBizCardsPage={isBizCardsPage}></CardComp>
//           ))}
//     </Container>
//   );
// }

// export default CardsComp;
