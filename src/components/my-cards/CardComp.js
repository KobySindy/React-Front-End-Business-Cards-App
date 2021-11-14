import { Card, Button } from "react-bootstrap";

function CardComp({ card, deleteHandler, editHandler, isBizCardsPage }) {
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
        {!isBizCardsPage && (
          <ButtonsControl
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            card={card}></ButtonsControl>
        )}
      </Card>
    </>
  );
}

function ButtonsControl({ deleteHandler, editHandler, card }) {
  return (
    <>
      <Button
        type='button'
        variant='primary'
        onClick={() => {
          editHandler(card._id);
        }}>
        Edit Card
      </Button>
      <Button
        type='button'
        variant='danger'
        onClick={() => {
          deleteHandler(card._id);
        }}>
        Delete Card
      </Button>
    </>
  );
}
export default CardComp;
