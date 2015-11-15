import React, { Component, PropTypes } from 'react';

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired
  };

  render() {
    const { header, styles } = this.props;
    return (
      <div ref="header" style={styles} onClick={this.handleClick.bind(this, header)}>{header}</div>
    );
  }  

  handleClick(header) {
    const { handleToggle } = this.props;
    handleToggle(header);
  }
}
