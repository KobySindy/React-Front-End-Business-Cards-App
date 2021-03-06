import { Switch, Route, Redirect } from "react-router-dom";
import { routes, DISPLAY_STATES } from "../../helpers/routes";

function NavigationRouteComp({ setState, state }) {
  console.log(state);
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.href}
            render={() => (
              <AppRoute route={route} state={state} setState={setState} />
            )}
          />
        );
      })}
    </Switch>
  );
}

function AppRoute({ route, state, setState }) {
  if (route.state === DISPLAY_STATES.IS_BIZ) {
    if (!state.user._id) {
      return <Redirect to='/home' />;
    }
    if (!state.user.biz) {
      return <Redirect to='/home' />;
    }
  }
  return <route.page setState={setState} state={state} />;
}

export default NavigationRouteComp;
