import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import { toast } from "react-toastify";

import "./pages-css/mainPagesStyle.css";

function SimpleRegistrationPage() {
  return (
    <div className='background-wrap'>
      <Container className='page-wrap'>
        <SimpleRegistrationComp
          clickHandler={registerUser}
          text='Sign up'
          typeOfUser='Regular'
        />
      </Container>
    </div>
  );

  function registerUser(data) {
    registerNewAccount(data, (response) => {
      toast(response._id ? "Account Created Successfully" : response.message);
    });
  }
}
export default SimpleRegistrationPage;
