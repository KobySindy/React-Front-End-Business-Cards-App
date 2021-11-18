import { Card, Button } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function CardComp({ card, removeCard, editCard, addToFavorites }) {
  const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;

  return (
    <>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          padding: 20,
          margin: 10,
        }}>
        <Card.Img variant='top' style={{ width: 60 }} src={bizImage} />
        <Card.Title>{bizName}</Card.Title>
        <Card.Text>{bizDescription}</Card.Text>
        <Card.Text>{bizAddress}</Card.Text>
        <Card.Text>{bizPhone}</Card.Text>
        <ButtonsControl
          removeCard={removeCard}
          editCard={editCard}
          card={card}
          addToFavorites={addToFavorites}
        />
      </Card>
    </>
  );
}

function ButtonsControl({ addToFavorites, removeCard, editCard, card }) {
  const editButtonStyle = { display: editCard ? "inherit" : "none" };
  const deleteButtonStyle = { display: removeCard ? "inherit" : "none" };
  const addToFavoritesButtonStyle = {
    display: addToFavorites ? "inherit" : "none",
  };
  return (
    <>
      <Button
        type='button'
        variant='primary'
        style={editButtonStyle}
        onClick={() => {
          editCard(card._id);
        }}>
        <AiOutlineEdit />
      </Button>
      <Button
        type='button'
        variant='danger'
        style={deleteButtonStyle}
        onClick={() => {
          removeCard(card._id);
        }}>
        <AiOutlineDelete />
      </Button>
      <Button
        style={addToFavoritesButtonStyle}
        onClick={() => {
          addToFavorites(card._id);
        }}>
        Add To Favorite
      </Button>
    </>
  );
}
export default CardComp;
