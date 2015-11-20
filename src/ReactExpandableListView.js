import React, { Component, PropTypes } from 'react';
import ListHeader from './lib/ListHeader';
import ListItemsManager from './lib/ListItemsManager';
import { Motion, spring } from "react-motion";

export default class ReactListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired,
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
    const { headerAttName, itemsAttName } = this.props;
    const { styles: {outerDiv, ul, listHeader, listItems, li} } = this.props;
    const { data } = this.state;

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
          Object.keys(data).map((k, index) => {
          const header = data[k][headerAttName];
          const items  = data[k][itemsAttName];
          const { isOpened } = data[k];
          _refi++;
          const headerRef = makeHeaderRef();
          const itemRef = makeItemRef();

          return (
            <Motion
              defaultStyle={{h: 0}}
              style={{h: spring(isOpened ? 110 : 0)}}>
              {
                ({h}) => (
                  <div key={k}>
                    <li li={li}>
                      <ListHeader
                        ref={headerRef}
                        header={header}
                        headerIndex={index}
                        styles={listHeader}
                        handleToggle={this.handleToggle.bind(this, index)}
                      />
                      <div
                        style={{
                          display: `block`,
                          overflow: `hidden`,
                          height:`${h}`
                          }}>
                        <ListItemsManager
                         ref={itemRef}
                         items={items}
                         styles={listItems}
                        />
                      </div>
                    </li>
                  </div>
                )
              }
            </Motion>
          );
          })
        }
        </ul>
      </div>
    );
  }

  handleToggle(headerIndex) {
    let { data } = this.state;
    let dataCopy = data;
    dataCopy[headerIndex].isOpened = !dataCopy[headerIndex].isOpened;
    const newData = Object.assign({}, dataCopy);

    this.setState(
      newData
    )
  }
}
