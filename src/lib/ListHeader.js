import React, { Component, PropTypes } from 'react'

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    headerIndex: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired
  }

  render () {
    const { header, headerIndex } = this.props
    return (
      <div ref="header" className="expandable-listview_listHeader" onClick={this.handleClick.bind(this, headerIndex)}>{header}</div>
    )
  }

  handleClick (headerIndex) {
    const { handleToggle } = this.props
    handleToggle(headerIndex)
  }
}
