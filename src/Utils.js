import React from 'react';

const helpers = {
  numToArray: function(num, elements) {
    return [...Array(num)].map(
      (e, i) => <span key={i}>{elements}</span>
    )
  }
}

export default helpers;
