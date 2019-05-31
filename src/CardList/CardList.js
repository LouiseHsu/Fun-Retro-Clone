import React, {Component} from 'react';
import Card from '../Card/Card.js';
import AddButton from '../AddButton/AddButton.js';
import './CardList.css';

class CardList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      cardArray: []
    }
  }

  onAddClick = () => {
    this.setState({
      cardArray: [... this.state.cardArray, <Card id = {"card" + this.state.cardArray.length-1} key = {this.state.cardArray.length-1}/>]
    })
  }

  onDeleteClick = () => {
    this.setState({
      cardArray: [... this.state.cardArray, <Card id = "hi" key = {this.state.cardArray.length-1}/>]
    })
  }

  render () {
    return (
      <div class = "CardList">
        <AddButton onClick = {this.onAddClick}/>
        {this.state.cardArray}
      </div>
    )
  }
}

export default CardList;
