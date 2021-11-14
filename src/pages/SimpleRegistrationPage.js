import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import { toast } from "react-toastify";

function SimpleRegistrationPage() {
  return (
    <Container>
      <SimpleRegistrationComp
        clickHandler={registerUser}
        text='Sign up'
        typeOfUser='Regular'></SimpleRegistrationComp>
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (response) => {
      if (response._id) {
        toast("Account Created Successfully");
      } else {
        toast(response.message);
      }
    });
  }
}
export default SimpleRegistrationPage;
