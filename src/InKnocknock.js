import React, { Component, PropTypes } from 'react';
import ListItemsManager from './lib/ListItemsManager';

export default class Inknockknock extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    }
  }

  render() {
    const { styles: {outerDiv, ul, listItems, li} } = this.props;
    const { data } = this.state;

    return (
      <div ref="listview" style={outerDiv}>
        <ul style={ul}>
        {
          Object.keys(data).map((k) => {
          const items  = data[k];

          return (
            <ul>
              <li>
                <ListItemsManager
                 items={items}
                 styles={listItems}
                />
              </li>
            </ul>
          );
          })
        }
        </ul>
      </div>
    );
  }
}
