import { deleteCard } from "../helpers/FetchHelper";
import { Container, Button } from "react-bootstrap";
import CardsComp from "../components/my-cards/CardsComp";
import { useHistory } from "react-router-dom";
import { updateCards, updateCardIdToEdit } from "../helpers/stateHelper";

function MyCardsPage({ state, setState }) {
  const user = state.user;
  let cards = user.cards;

  const history = useHistory();

  const setCards = (cards) => {
    user.cards = cards;
    updateCards(setState, cards);
  };

  const removeCard = (id) => {
    deleteCard(id, (card) => {
      setCards(cards.filter((c) => c._id !== id));
    });
  };

  const editCard = (cardIdToEdit) => {
    let path = `upset-card`;
    updateCardIdToEdit(setState, cardIdToEdit);

    history.push(path);
  };

  const addCard = () => {
    let path = `upset-card`;
    updateCardIdToEdit(setState, "");
    history.push(path);
  };

  return (
    <>
      <Button className='btn btn-success' onClick={addCard}>
        Create New Card
      </Button>
      <Container>
        <CardsComp
          cards={cards}
          removeCard={removeCard}
          editCard={editCard}></CardsComp>
      </Container>
    </>
  );
}
export default MyCardsPage;
