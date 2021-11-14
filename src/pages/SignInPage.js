import { signInUser } from "../helpers/FetchHelper";
import { Container } from "react-bootstrap";
import SignInComp from "../components/sign-in/SignInComp";
import { toast } from "react-toastify";
import { getMeData } from "../helpers/FetchHelper";
import { useHistory } from "react-router-dom";
import { updateUser } from "../helpers/stateHelper";

function SignInPage({ setState }) {
  const history = useHistory();

  return (
    <Container>
      <SignInComp clickHandler={signIn}></SignInComp>
    </Container>
  );

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        getMeData((data) => {
          updateUser(setState, data);
          toast("Welcome " + data.name);
          history.push({ pathname: "/home", key: data._id });
        });
      } else {
        toast("Faild to login");
      }
    });
  }
}
export default SignInPage;
