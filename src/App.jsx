import React from 'react';
import './App.css';
import { Header } from "./Header";
import WebFont from 'webfontloader';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './Home';
import { ProjectPage } from './ProjectPage';
import { BathesContainer } from './Bath';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'sans-serif']
  }
});

export const App = React.memo(() => {
  return (
    <Router>

      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/1" component={ProjectPage} />
        <Route path="/bathes" component={BathesContainer} />
      </Switch>
    </Router>
  );
})
