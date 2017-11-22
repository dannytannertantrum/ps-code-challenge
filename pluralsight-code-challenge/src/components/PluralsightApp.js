import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
// import SearchBar from './SearchBar';
import Home from './Home';
import Questions from './Questions';
import CreateQuestion from './CreateQuestion';
import Edit from './Edit';

const PluralsightApp = () => (
  <BrowserRouter>
    <div>
        {/* 2. edit​​a​​question */}
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/create" component={CreateQuestion} exact={true} />
        <Route path="/edit/:id" component={Edit} />
        {/* <Route path="/question-list/" component={Questions} />*/}
      </Switch>
      <Questions />
      {/*<SearchBar />*/}
    </div>
  </BrowserRouter>
);

export default PluralsightApp;