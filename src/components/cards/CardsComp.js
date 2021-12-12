import { Container } from "react-bootstrap";
import CardComp from "./CardComp";

export function BusinessCards({ state, cards, addToFavorites }) {
  return <Cards state={state} addToFavorites={addToFavorites} cards={cards} />;
}

export function MyCards({ cards, editCard, removeCard }) {
  return <Cards cards={cards} editCard={editCard} removeCard={removeCard} />;
}
export function FavoriteCards({ cards, removeCard }) {
  return <Cards cards={cards} isFavorites={true} removeCard={removeCard} />;
}

function Cards({
  cards = [],
  state = {},
  addToFavorites = null,
  editCard = null,
  removeCard = null,
  isFavorites = false,
}) {
  return (
    <>
      <div className='cards-wrap'>
        {cards.map((card, index) => (
          <CardComp
            key={card._id}
            state={state}
            card={card}
            isFavorites={isFavorites}
            addToFavorites={addToFavorites}
            editCard={editCard}
            removeCard={removeCard}></CardComp>
        ))}
      </div>
    </>
  );
}
