import React, { Component, PropTypes } from 'react';
import ReactExpandableListView from '..';

let styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '400px',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position : 'fixed',
    width : '383px',
    top: '0px'
  },

  listHeader: {
    width: '383px',
    height: '20px',
    background: 'orange',
    color: 'white'
  },

  listItems: {
    color: 'blue'
  },
};

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
   const { data } = this.props;
    return (
      <ReactExpandableListView 
        data={data} 
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
    );
  }
}

const DATALIST = [
  {
    headerName : "ListA",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  }, {
    headerName : "ListB",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListC",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListD",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListE",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListF",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    }]
  },{
    headerName : "ListG",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListH",
    isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    }]
  }
];

React.render(<App data= {DATALIST} />, document.body);
