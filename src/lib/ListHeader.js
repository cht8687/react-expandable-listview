import React, { Component, PropTypes } from 'react';

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    headerRef: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired
  };

  render() {
    const { header, headerRef, styles } = this.props;
    return (
      <div ref="header" style={styles} onClick={this.handleClick.bind(this, headerRef)}>{header}</div>
    );
  }  

  handleClick(headerRef) {
    const { handleToggle } = this.props;
    handleToggle(headerRef);
  }
}
