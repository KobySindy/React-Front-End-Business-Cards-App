import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { routes, DISPLAY_STATES } from "../../helpers/routes";
import {
  getAccessToken,
  clearAccessToken,
} from "../../helpers/accessTokenHelper";

function NavigationBarComp({ setState, state }) {
  const history = useHistory();
  return (
    <Navbar
      style={{
        backgroundColor: "#273b46",
        width: "100%",
        zIndex: 100,
        position: "fixed",
        top: 0,
        left: 0,
      }}
      collapseOnSelect
      expand='lg'
      variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavItems state={state} />
          </Nav>
          <SignOut state={state} history={history} setState={setState} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function SignOut({ state, setState, history }) {
  let userName = state.user.name;
  const token = getAccessToken();
  if (token) {
    return (
      <>
        <span style={{ color: "white", margin: "0.5rem" }}>{userName}</span>
        <Button
          onClick={() => {
            clearAccessToken();
            setState({ user: {}, cardIdToEdit: "" });
            history.push({ pathname: "/home" });
          }}>
          Signout
        </Button>
      </>
    );
  }
  return null;
}

function NavItems({ state }) {
  const isLoggedIn = Boolean(state.user._id);
  const isbiz = state.user.biz;

  return routes
    .map((route, index) => {
      if (route.state === DISPLAY_STATES.HIDDEN && !isLoggedIn) {
        return null;
      }
      if (route.state === DISPLAY_STATES.PRIVATE && !isLoggedIn) {
        return null;
      }
      if (route.state === DISPLAY_STATES.LOGGED_OUT && isLoggedIn) {
        return false;
      }

      if (route.state === DISPLAY_STATES.IS_BIZ && !isbiz) {
        return null;
      }
      return (
        <Nav.Link key={index} to={route.href} as={Link}>
          {route.icon} {route.name}
        </Nav.Link>
      );
    })
    .filter(Boolean);
}

export default NavigationBarComp;
