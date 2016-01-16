import React, { Component, PropTypes } from 'react';


export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <span className="expandable-listview_listItems">{item}<br /></span>
    );
  }
}
