import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";

function SinglePageAppComp({ setState, state }) {
  return (
    <Router>
      <NavigationBarComp setState={setState} state={state} />
      <NavigationRouteComp setState={setState} state={state} />
    </Router>
  );
}
export default SinglePageAppComp;
