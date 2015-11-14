import React, { Component, PropTypes } from 'react';
import ListHeader from './lib/ListHeader';
import ListItems from './lib/ListItems';

export default class ReactListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentDidUpdate() {

  }

  render() {
    const { data, headerAttName, itemsAttName } = this.props;
    const { styles: {outerDiv, ul, listHeader, listItems, li} } = this.props;
    let _refi = 0;
    let makeRef = () => {
      return `ListHeader-${_refi++}`;
    };

    return (
      <div ref="listview" style={outerDiv}>
      <ul style={ul}>
      {
        Object.keys(data).map(k => {
        const header = data[k][headerAttName];
        const items  = data[k][itemsAttName];
        return (
          <li li={li} key={k}>    
            <ListHeader
              ref={makeRef()}
              header={header}
              styles={listHeader}
            />
            <ListItems
             items={items}
             styles={listItems}
            />
          </li>
        );
        })
      }
      </ul>
      </div>
    );
  }
}
