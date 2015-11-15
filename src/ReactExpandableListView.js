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
    let makeHeaderRef = () => {
      return `ListHeader-${_refi}`;
    };

    let makeItemRef = () => {
      return `ListItem-${_refi}`;
    };

    return (
      <div ref="listview" style={outerDiv}>
      <ul style={ul}>
      {
        Object.keys(data).map(k => {
        const header = data[k][headerAttName];
        const items  = data[k][itemsAttName];
        _refi++;
        const headerRef = makeHeaderRef();
        const itemRef = makeItemRef();

        return (
          <li li={li} key={k}>    
            <ListHeader
              ref={headerRef}
              header={header}
              headerRef={headerRef}
              styles={listHeader}
              handleToggle={this.handleToggle.bind(this, headerRef)}
            />
            <ListItems
             ref={itemRef}
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

  handleToggle(headerRef) {
    console.log(headerRef);

  }
}
