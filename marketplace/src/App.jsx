import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
