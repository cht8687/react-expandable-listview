import React, { Component, PropTypes } from 'react';


export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired
  };

  render() {
    const { item, styles } = this.props;
    return (
      <span style={styles}>{item}<br /></span>
    );
  }
}
