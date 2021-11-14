import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import validateCard from "../../helpers/createCardHelper";
function CreateCardComp({
  btnText,
  clickHandler,
  cardToEdit,
  editClickHandler,
  setEditMode,
}) {
  console.log(cardToEdit);
  return (
    <>
      {cardToEdit ? (
        <>
          <Form>
            <h2>Update This Card</h2>
            <Form.Group className='mb-3' controlId='formBasicBusinessName'>
              <Form.Label>Business Name</Form.Label>
              <Form.Control type='text' defaultValue={cardToEdit.bizName} />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formBasicBusinessDescription'>
              <Form.Label>Business Description</Form.Label>
              <Form.Control
                type='text'
                defaultValue={cardToEdit.bizDescription}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessAddress'>
              <Form.Label>Business Address</Form.Label>
              <Form.Control type='text' defaultValue={cardToEdit.bizAddress} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessPhone'>
              <Form.Label>Business Phone</Form.Label>
              <Form.Control type='text' defaultValue={cardToEdit.bizPhone} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessImage'>
              <Form.Label>Business Image</Form.Label>
              <Form.Control type='text' />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                const errorOrData = validateCard(
                  "formBasicBusinessName",
                  "formBasicBusinessDescription",
                  "formBasicBusinessAddress",
                  "formBasicBusinessPhone"
                );
                if (typeof errorOrData == "string") {
                  toast(errorOrData);
                } else if (clickHandler) {
                  debugger;
                  clickHandler(errorOrData);
                } else {
                  let cardId = cardToEdit._id;
                  editClickHandler(cardId, errorOrData);
                  setEditMode(false);
                }
              }}>
              {btnText}
            </Button>
          </Form>
        </>
      ) : (
        <>
          <Form>
            <h2>Create a New Card</h2>
            <Form.Group className='mb-3' controlId='formBasicBusinessName'>
              <Form.Label>Business Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formBasicBusinessDescription'>
              <Form.Label>Business Description</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessAddress'>
              <Form.Label>Business Address</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessPhone'>
              <Form.Label>Business Phone</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicBusinessImage'>
              <Form.Label>Business Image</Form.Label>
              <Form.Control type='text' />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                const errorOrData = validateCard(
                  "formBasicBusinessName",
                  "formBasicBusinessDescription",
                  "formBasicBusinessAddress",
                  "formBasicBusinessPhone"
                );
                if (typeof errorOrData == "string") {
                  toast(errorOrData);
                } else if (clickHandler) {
                  debugger;
                  clickHandler(errorOrData);
                } else {
                  let cardId = cardToEdit._id;
                  editClickHandler(cardId, errorOrData);
                  setEditMode(false);
                }
              }}>
              {btnText}
            </Button>
          </Form>
        </>
      )}
    </>
  );
}
export default CreateCardComp;
