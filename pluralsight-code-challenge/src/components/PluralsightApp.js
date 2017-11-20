import React from 'react';
import Header from './Header';
// import SearchBar from './SearchBar';
import ListQuestions from './ListQuestions';
import Questions from './Questions';

const PluralsightApp = () => (
  <div>
  {/* 1. get​​a​​listing​​of​​all​​questions
2. edit​​a​​question
3. create​​a​​question */}
    <Header />
    <ListQuestions />
    <Questions />
    {/*<SearchBar />*/}
  </div>
);

export default PluralsightApp;