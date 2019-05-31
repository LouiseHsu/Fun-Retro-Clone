import React, {Component} from 'react';
import './AddButton.css';

class AddButton extends Component {
  render () {
    return (
      <>
        <button className = "AddButton"  onClick = {this.props.onClick}>
          Add Card
        </button>
      </>
    )
  }
}

export default AddButton;
