import React from 'react'

export default class ListItem extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.object,
      isReactComponent: React.PropTypes.bool
    };
  }

  render () {
    const { isReactComponent } = this.props;
    return (
      <span className="expandable-listview_listItems">
        { isReactComponent ? this.props.children : this.props.children.title }
        <br />
      </span>
    )
  }
}
