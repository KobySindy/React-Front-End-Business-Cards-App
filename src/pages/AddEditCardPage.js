import { useHistory } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import validateCard from "../helpers/createCardHelper";
import { updateCards } from "../helpers/stateHelper";
import { insertNewCard, updateThisCard } from "../helpers/FetchHelper";
import "./pages-css/mainPagesStyle.css";
import "./pages-css/addEditCardPage.css";
import CreatCardExample from "../images/create-card-example2.png";

const EDIT_MODES = {
  ADD: 1,
  UPDATE: 2,
};

function AddEditCardPage({ setState, state }) {
  const history = useHistory();

  const card_Id_ToEdit = state.cardIdToEdit;
  const user = state.user;
  let cardToEdit;
  if (card_Id_ToEdit) {
    cardToEdit = user.cards.find((c) => c._id === card_Id_ToEdit);
  }

  let mode = cardToEdit ? EDIT_MODES.UPDATE : EDIT_MODES.ADD;

  let title = "Create new Card";
  let btnText = "Add";
  let updatedCard = {
    bizName: "",
    bizDescription: "",
    bizAddress: "",
    bizPhone: "",
    bizImage: "",
  };

  if (mode === EDIT_MODES.UPDATE) {
    title = "Update Card";
    btnText = "Update";
    updatedCard = { ...cardToEdit };
  }

  function handleInputChange(field, value) {
    updatedCard[field] = value;
  }

  function InputColorChange(inputName) {
    let inputField = document.getElementById(inputName);
    inputField.style.backgroundColor = "#cccccc";
  }
  function InputColorReset(inputName) {
    let inputField = document.getElementById(inputName);
    inputField.style.backgroundColor = "#000";
  }

  return (
    <div className='background-wrap'>
      <div
        className={
          mode === EDIT_MODES.UPDATE ? "page-wrap" : "create-cards-page-wrap"
        }>
        <Form className='card-form'>
          <h2>{title}</h2>
          <Form.Group className='mb-3' controlId='formBasicBusinessName'>
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              autoFocus
              type='text'
              defaultValue={updatedCard.bizName}
              placeholder='Bussiness Name'
              onChange={(e) => handleInputChange("bizName", e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicBusinessDescription'>
            <Form.Label>Business Description</Form.Label>
            <Form.Control
              type='text'
              defaultValue={updatedCard.bizDescription}
              placeholder='Bussiness Description'
              onChange={(e) =>
                handleInputChange("bizDescription", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicBusinessAddress'>
            <Form.Label>Business Address</Form.Label>
            <Form.Control
              type='text'
              defaultValue={updatedCard.bizAddress}
              placeholder='Bussiness Address'
              onChange={(e) => handleInputChange("bizAddress", e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicBusinessPhone'>
            <Form.Label>Business Phone</Form.Label>
            <Form.Control
              type='text'
              defaultValue={updatedCard.bizPhone}
              placeholder='Bussiness Phone'
              onChange={(e) => handleInputChange("bizPhone", e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicBusinessImage'>
            <Form.Label>Business Image</Form.Label>
            <Form.Control
              type='text'
              defaultValue={updatedCard.bizImage}
              placeholder='Bussiness Image'
              onChange={(e) => handleInputChange("bizImage", e.target.value)}
            />
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              const errorOrData = validateCard(updatedCard);
              if (typeof errorOrData == "string") {
                toast(errorOrData);
              } else {
                if (mode === EDIT_MODES.UPDATE) {
                  updateCard();
                } else if (mode === EDIT_MODES.ADD) {
                  insertCard();
                }
              }
            }}>
            {btnText}
          </Button>
        </Form>
        {mode === EDIT_MODES.ADD && (
          <div className='example-box'>
            <h1>Example</h1>
            <img
              className='create-card-example'
              src={CreatCardExample}
              alt=''
            />
          </div>
        )}
      </div>
    </div>
  );

  function insertCard() {
    insertNewCard(updatedCard, (newCard) => {
      const newCardsArr = [...user.cards, newCard];
      updateCards(setState, newCardsArr);
    });
    history.push("my-cards");
  }

  function updateCard() {
    updateThisCard(updatedCard, () => {
      const updatedCards = user.cards.map((c) => {
        if (c._id === updatedCard._id) {
          return updatedCard;
        }
        return c;
      });
      updateCards(setState, updatedCards);
    });
    history.push("my-cards");
  }
}
export default AddEditCardPage;
