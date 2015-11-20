# React expandable listview

![React expandable listview](src/example/react-expandable-listview.gif)


## Installation

### npm

```
$ npm install --save react-expandable-listview
```


## Demo

[http://cht8687.github.io/react-expandable-listview/example/](http://cht8687.github.io/react-expandable-listview/example/)


## Usage

```js
<ReactExpandableListView 
        data={data} 
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
```

## Options

#### `data`: PropTypes.array.isRequired

```js
const DATALIST = [
{
 	headerName : "ListA",
 	isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }]
},
{
 	headerName : "ListB",
 	isOpened: true,
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }]
}
];
```

#### `headerAttName`: PropTypes.string.isRequired

variable name of header in your `data` object.
In above example, it's `headerName`.

#### `itemsAttName`: PropTypes.string.isRequired

variable name which hold items data in your `data` object.
In above example, it's `items`.

#### `styles`: PropTypes.object.isRequired

```js
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
```

`outerDiv`, `ul`, `fixedPosition`, `listHeader`, `listItems` are required, you can modify the CSS to meet your needs.


## Development

```
$ git clone git@github.com:cht8687/react-expandable-listview.git
$ cd react-expandable-listview
$ npm install
$ webpack-dev-server
```

*tip:* If you have already had webpack-dev-server running, you might have EADDRINUSE error, please ensure the port is not in use.

Then

```
open http://localhost:8080/webpack-dev-server/
```

## License

MIT
