import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { routes, DISPLAY_STATES, routesFilter } from "../../helpers/routes";
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
            <NavItems
              routes={routes}
              DISPLAY_STATES={DISPLAY_STATES}
              state={state}
            />
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
          style={{ backgroundColor: "#67aace", color: "#000" }}
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

function NavItems({ state, routes, DISPLAY_STATES }) {
  const { user } = state;

  let routesToShow = routesFilter(user, routes, DISPLAY_STATES);

  return routesToShow.map((route, index) => {
    return (
      <Nav.Link key={index} to={route.to} as={route.as}>
        {route.icon} {route.name}
      </Nav.Link>
    );
  });
}

export default NavigationBarComp;
