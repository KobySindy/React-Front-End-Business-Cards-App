import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import { BrowserRouter as Router } from "react-router-dom";
import FooterPage from "../footer/Footer";
import { Container } from "react-bootstrap";
function SinglePageAppComp({ setState, state }) {
  return (
    <Container
      fluid
      style={{
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }}>
      <Router>
        <NavigationBarComp
          setState={setState}
          state={state}></NavigationBarComp>
        <NavigationRouteComp
          setState={setState}
          state={state}></NavigationRouteComp>
      </Router>
      <FooterPage></FooterPage>
    </Container>
  );
}
export default SinglePageAppComp;
