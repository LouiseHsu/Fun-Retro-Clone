import React, {Component} from 'react';
import './App.css';
import CardList from '../CardList/CardList.js';

function App() {
  return (
    <>
      <div>Fake Retro</div>
      <div className="CardListContainer">
        <CardList themeColour = "#75a8ff"/>
        <CardList themeColour = "#b375ff"/>
        <CardList themeColour = "#75ffcf"/>
      </div>
    </>
  );
}

export default App;
