import { Switch, Route, NavLink } from "react-router-dom";

import Home from "./components/Routing/pages/Home";
import About from "./components/Routing/pages/About";
import ComponentsPage from "./components/Routing/pages/Components";

import Counter from "./components/Routing/Counter";
import User from "./components/Routing/User";

export default function App() {
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink exact to="/" activeClassName="active" className="menu__link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/components"
            activeClassName="active"
            className="menu__link"
          >
            Components
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeClassName="active" className="menu__link">
            About
          </NavLink>
        </li>
      </ul>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/components" component={ComponentsPage} />

          <Route path="/components/counter" component={Counter} />

          <Route path="/components/user" component={User} />
        </Switch>
      </div>
    </>
  );
}
