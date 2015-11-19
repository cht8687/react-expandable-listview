import React, { Component, PropTypes } from 'react';
import Inknockknock from '..';

let styles = {
  outerDiv: {
    height: '',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '100%',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  li: {

  },

  img: {
    background: 'red'
  }


};

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
   const { data } = this.props;
    return (
      <Inknockknock 
        data={data} 
        styles={styles}
      />
    );
  }
}

const TotalEmployees = [
  {
    address: "O2-OS-32-3D-KS-KD",
    name: "Robert"
  },
  {
    address: "ds-sf-3s-df-3d-df",
    name: "Mac"
  },
  {
    address: "kl-es-3s-ds-cs-kl",
    name: "Joel"
  },
];

React.render(<App data= {TotalEmployees} />, document.body);
