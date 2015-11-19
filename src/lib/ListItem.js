import React, { Component, PropTypes } from 'react';


export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
  };

  render() {
    const { item, styles: {img}  } = this.props;
    return (
      <span>
        <img style={styles} src=""></img>
        <span>{item}<br /></span>
      </span>
    );
  }
}
