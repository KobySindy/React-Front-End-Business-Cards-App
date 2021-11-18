import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../helpers/FetchHelper";
import { MyCards } from "../components/cards/CardsComp";
import { updateCards, updateCardIdToEdit } from "../helpers/stateHelper";

function MyCardsPage({ state, setState }) {
  const history = useHistory();
  const user = state.user;
  let cards = user.cards;

  const setCards = (cards) => {
    user.cards = cards;
    updateCards(setState, cards);
  };

  const removeCard = (id) => {
    deleteCard(id, () => {
      setCards(cards.filter((c) => c._id !== id));
    });
  };

  const editCard = (cardIdToEdit) => {
    let path = `add-edit-card`;
    updateCardIdToEdit(setState, cardIdToEdit);

    history.push(path);
  };

  const addCard = () => {
    let path = `add-edit-card`;
    updateCardIdToEdit(setState, "");
    history.push(path);
  };

  return (
    <>
      <Button className='btn btn-success' onClick={addCard}>
        Create New Card
      </Button>
      <Container>
        <MyCards cards={cards} removeCard={removeCard} editCard={editCard} />
      </Container>
    </>
  );
}
export default MyCardsPage;
