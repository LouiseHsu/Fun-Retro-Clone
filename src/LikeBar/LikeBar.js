import React, {Component} from 'react';
import './LikeBar.css';
import Utils from '../Utils.js'

class LikeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numLikes: 0
    }
  }

  addLike = () => {
    if (this.state.numLikes < 15) {
      this.setState({
        numLikes: this.state.numLikes + 1
      })
    }
  }

  render () {
    return (
      <div className = "LikeBar">
        <button className = "LikeButton" onClick = {this.addLike} disabled = {(this.state.numLikes == 15)}>Like</button>
        <ul className = "LikeDisplay">
          {Utils.numToArray(this.state.numLikes, <span style={{color: "rgba(0,0,0,0.25)"}}>●</span>)}
        </ul>
      </div>
    )
  }
}

export default LikeBar;
