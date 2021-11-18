import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import Footer from "../footer/Footer";
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
        <NavigationBarComp setState={setState} state={state} />
        <NavigationRouteComp setState={setState} state={state} />
      </Router>
      <Footer />
    </Container>
  );
}
export default SinglePageAppComp;
