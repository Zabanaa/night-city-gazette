import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import NewsList from './components/NewsList'

const App = () => (
  <div className="App">
    <Header />
    <Nav />
    <NewsList />
  </div>
)

export default App;
