import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import NewsList from './components/NewsList'
import { Provider, Consumer } from './context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Provider>
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={NewsList}/>
            <Route exact path="/new" component={NewsList}/>
            <Route exact path="/show" component={NewsList}/>
            <Route exact path="/ask" component={NewsList}/>
            <Route exact path="/jobs" component={NewsList}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </Provider>
)

export default App;
