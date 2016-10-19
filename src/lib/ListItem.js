import React from 'react'

export default class ListItem extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.object,
    };
  }

  render () {
    return (
      <span className="expandable-listview_listItems">
        {this.props.children}
        <br />
      </span>
    )
  }
}
