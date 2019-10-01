import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Provider>
    <Router>
      <React.Fragment>
        <Header />
        <div className="hn-container">
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              component={props => <NewsList {...props} />}
            />
            <Route
              exact
              path="/new"
              component={props => <NewsList {...props} />}
            />
            <Route
              exact
              path="/ask"
              component={props => <NewsList {...props} />}
            />
            <Route
              exact
              path="/show"
              component={props => <NewsList {...props} />}
            />
            <Route
              exact
              path="/jobs"
              component={props => <NewsList {...props} />}
            />
            <Route
              exact
              path="/user/:id"
              component={props => <UserProfile {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
