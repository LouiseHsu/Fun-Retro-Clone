import React, {Component} from 'react';
import Card from '../Card/Card.js';
import AddButton from '../AddButton/AddButton.js';
import './CardList.css';

class CardList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      cardArray: [<Card key = "0"/>]
    }
  }

  onAddClick = () => {
    this.setState({
      cardArray: [... this.state.cardArray, <Card id = "hi" key = {this.state.cardArray.length}/>]
    })
    let element = this.state.cardArray[this.state.cardArray.length-1];
    // $(element).find('textarea').focus();
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
