import React, {Component} from 'react';
import './Card.css';
import LikeBar from '../LikeBar/LikeBar.js';

class Card extends Component {
  render () {
    return (
      <>
        <div className = "Card">
          <textarea className = "CardTextArea" rows = "3"></textarea>
          <LikeBar/>
        </div>
      </>
    )
  }
}

export default Card;
