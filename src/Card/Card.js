import React, {Component} from 'react';
import './Card.css';
import LikeBar from '../LikeBar/LikeBar.js';
import Textarea from 'react-textarea-autosize';

class Card extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <>
        <div ref = "Card" className = "Card" id = {this.props.id} style={{backgroundColor: this.props.themeColour}}>
          <div className = "DeleteIcon" onClick = {() => this.props.onDeleteClick(this.props.id)}>✖</div>
          <Textarea autoFocus ref = "CardTextArea" className = "CardTextArea" minRows = "6"/>
          <LikeBar/>
        </div>
      </>
    )
  }
}

export default Card;
