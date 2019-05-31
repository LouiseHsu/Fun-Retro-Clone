import React, {Component} from 'react';
import './App.css';
import CardList from '../CardList/CardList.js';

function App() {
  return (
    <div className="CardListContainer">
      <CardList/>
      <CardList/>
    </div>
  );
}

export default App;
