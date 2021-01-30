import { Switch, withRouter } from "react-router-dom";
import "../../assets/styles/AnimatedSwitchPage.css";
import Routes from "./Routes";

const AnimatedSwitch = withRouter(({ location }) => (
  <Switch location={location}>
    <Routes />
  </Switch>
));

export default AnimatedSwitch;
