import React, { Component, PropTypes } from 'react';

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    headerIndex: PropTypes.number.isRequired,
    styles: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired
  };

  render() {
    const { header, headerIndex, styles } = this.props;
    return (
      <div ref="header" style={styles} onClick={this.handleClick.bind(this, headerIndex)}>{header}</div>
    );
  }  

  handleClick(headerIndex) {
    const { handleToggle } = this.props;
    handleToggle(headerIndex);
  }
}
