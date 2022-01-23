import { Card, Button } from "react-bootstrap";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

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
        <div className='card-image-box'>
          <Card.Img variant='top' className='card-image' src={bizImage} />
        </div>
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
        variant='danger'
        style={addToFavoritesButtonStyle}
        onClick={() => {
          addToFavorites(card.bizNumber, state);
        }}>
        Add To Favorite
        <AiOutlineAppstoreAdd />
      </Button>
    </>
  );
}
export default CardComp;
