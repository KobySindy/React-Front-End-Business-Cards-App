import { Card, Button } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { withRouter } from "react-router";

function CardComp({
  state,
  card,
  removeCard,
  editCard,
  addToFavorites,
  isFavorites,
}) {
  const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;

  return (
    <>
      <Card>
        <Card.Img variant='top' style={{ width: 60 }} src={bizImage} />
        <Card.Title>{bizName}</Card.Title>
        <Card.Text>{bizDescription}</Card.Text>
        <Card.Text>{bizAddress}</Card.Text>
        <Card.Text>{bizPhone}</Card.Text>
        <ButtonsControl
          card={card}
          state={state}
          removeCard={removeCard}
          editCard={editCard}
          addToFavorites={addToFavorites}
          isFavorites={isFavorites}
        />
      </Card>
    </>
  );
}

function ButtonsControl({
  state,
  addToFavorites,
  isFavorites,
  removeCard,
  editCard,
  card,
}) {
  const editButtonStyle = {
    border: "none",
    backgroundColor: "transparent",
    display: editCard ? "inherit" : "none",
  };
  const deleteButtonStyle = {
    border: "1px solid white",
    backgroundColor: "red",
    display: removeCard ? "inherit" : "none",
  };
  const addToFavoritesButtonStyle = {
    display: addToFavorites ? "inherit" : "none",
  };
  return (
    <>
      <Button
        type='button'
        style={editButtonStyle}
        onClick={() => {
          editCard(card._id);
        }}>
        <AiOutlineEdit />
      </Button>
      <Button
        type='button'
        style={deleteButtonStyle}
        onClick={() => {
          isFavorites ? removeCard(card.bizNumber) : removeCard(card._id);
        }}>
        <AiOutlineDelete />
      </Button>
      <Button
        style={addToFavoritesButtonStyle}
        onClick={() => {
          addToFavorites(card.bizNumber, state);
        }}>
        Add To Favorite
      </Button>
    </>
  );
}
export default CardComp;
