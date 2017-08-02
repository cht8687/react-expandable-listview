import React from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.object,
      isReactComponent: PropTypes.bool
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
