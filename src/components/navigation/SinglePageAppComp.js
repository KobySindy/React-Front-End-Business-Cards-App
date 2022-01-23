import { BrowserRouter as Router } from "react-router-dom";
import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import Footer from "../footer/Footer";

function SinglePageAppComp({ setState, state }) {
  return (
    <Router>
      <NavigationBarComp setState={setState} state={state} />
      <NavigationRouteComp setState={setState} state={state} />
      <Footer state={state} />
    </Router>
  );
}
export default SinglePageAppComp;
