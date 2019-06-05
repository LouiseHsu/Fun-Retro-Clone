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

  generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
  }

  onAddClick = () => {
    this.setState({
      cardArray: [... this.state.cardArray, <Card id = {(this.generateKey(this.state.cardArray.length)).toString()}
                                                  key = {(this.generateKey(this.state.cardArray.length)).toString()}
                                                  themeColour = {this.props.themeColour}
                                                  onDeleteClick = {this.onDeleteClick}/>]
    })
  }

  onDeleteClick = (i) => {
    let newCardArray = this.state.cardArray.slice();
    let index = newCardArray.findIndex(card => card.key === i);
    newCardArray.splice(index, 1);
    this.setState({
      cardArray: newCardArray
    })
  }

  render () {
    return (
      <div className = "CardList">
        <AddButton onClick = {this.onAddClick}/>
        {this.state.cardArray}
      </div>
    )
  }
}

export default CardList;
