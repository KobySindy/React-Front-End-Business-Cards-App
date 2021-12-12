import { Container } from "react-bootstrap";
import "./pages-css/homePage.css";

function HomePage({ state, setState }) {
  const { user } = state;

  const DISPLAY_MODES = {
    LOGED_IN: 1,
    LOGED_OUT: 2,
  };
  let display = user.name ? DISPLAY_MODES.LOGED_IN : DISPLAY_MODES.LOGED_OUT;

  return (
    <div className='homeBgImage'>
      <Container className='page-wrap'>
        <div className='home-page-content'>
          <LogedOutUser />
        </div>
      </Container>
    </div>
  );
}

function LogedOutUser() {
  return (
    <>
      <h1>Wellcome To The Big Freelancers Bord </h1>
      <h3>Here you can publish your Freelance Services </h3>
      <br />
      <br />
      <h4> So lets jump right in...</h4>
      <p>
        Looking for a Freelance for hire? go to
        <a href='simple-registration'>Simple Registration</a> <br /> Sign up and
        start searching your freelance.
      </p>
      <p>
        if you are a Freelance go to
        <a href='business-registration'>Business Registration</a>, Sign up and
        publish your First business card.
      </p>
    </>
  );
}

function LogedInUser() {}
export default HomePage;
