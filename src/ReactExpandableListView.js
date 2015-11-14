import React, { Component, PropTypes } from 'react';
import ListHeader from './lib/ListHeader';
import ListItems from './lib/ListItems';

export default class ReactListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    events: PropTypes.array,
    _positionMap: PropTypes.object,
    _topPos: PropTypes.string,
    _topWrapper: PropTypes.object
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

  refsToArray(ctx, prefix) {
    let results = [];
    for (let i=0;;i++) {
      let ref = ctx.refs[prefix + '-' + String(i)];
      if (ref) results.push(ref);
      else return results;
    }
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
