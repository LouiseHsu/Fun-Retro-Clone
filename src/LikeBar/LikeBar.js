import React, {Component} from 'react';
import './LikeBar.css';

class LikeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeArray: []
    }
  }

  addLike = () => {
    this.setState({
      likeArray: [... this.state.likeArray, <li> &bull; </li>]
    })
  }

  render () {
    return (
      <div className = "LikeBar">
        <button className = "LikeButton" onClick = {this.addLike}>Like</button>
        <ul className = "LikeDisplay">
          {this.state.likeArray}
        </ul>
      </div>
    )
  }
}

export default LikeBar;
