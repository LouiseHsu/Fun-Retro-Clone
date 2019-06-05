import React, {Component} from 'react';
import './Card.css';
import LikeBar from '../LikeBar/LikeBar.js';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <>
        <div className = "Card" id = {this.props.id} style={{backgroundColor: this.props.themeColour}}>
          <div className = "DeleteIcon" onClick = {() => this.props.onDeleteClick(this.props.id)}>✖</div>
          <textarea autoFocus className = "CardTextArea" rows = "6"></textarea>
          <LikeBar/>
        </div>
      </>
    )
  }
}

export default Card;
