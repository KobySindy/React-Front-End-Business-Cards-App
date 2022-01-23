import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          {display === DISPLAY_MODES.LOGED_IN && <LogedInUser user={user} />}
          {display === DISPLAY_MODES.LOGED_OUT && <LogedOutUser />}
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
        Looking for a Freelance for hire? go to{" "}
        <Link to='/simple-registration' as={Link}>
          Simple Registration
        </Link>
        {/* <a href='simple-registration'>Simple Registration</a> */}
        <br /> Sign up and start searching your freelance.
      </p>
      <p>
        if you are a Freelance go to
        <Link to='/business-registration' as={Link}>
          Business Registration
        </Link>
        , Sign up and publish your First business card.
      </p>
    </>
  );
}

function LogedInUser({ user }) {
  return (
    <>
      <h1>Wellcome Back {user.name}</h1>
      <p>
        Go To Business Cards Page And Check Out The
        <Link to='/business-cards' as={Link}>
          BIG BORD!!
        </Link>{" "}
      </p>
    </>
  );
}
export default HomePage;
