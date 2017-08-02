import React, { Component } from 'react'
import ListHeader from './lib/ListHeader'
import ListItemsManager from './lib/ListItemsManager'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

export default class ReactListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    const { data } = this.props
    this.state = {
      data
    }
  }

  render () {
    const { headerAttName, itemsAttName } = this.props
    const { data } = this.state
    let _refi = 0
    let makeHeaderRef = () => {
      return `ListHeader-${_refi}`
    }

    let makeItemRef = () => {
      return `ListItem-${_refi}`
    }

    return (
      <div ref="listview" className="expandable-listview_outerDiv">
        <ul className="expandable-listview_ul">
        {
          Object.keys(data).map((k, index) => {
            const header = data[k][headerAttName]
            const items = data[k][itemsAttName]
            const { isReactComponent } = data[k]
            const { isOpened } = data[k]
            const { height } = data[k]
            _refi++
            const headerRef = makeHeaderRef()
            const itemRef = makeItemRef()

            return (
              <Motion
                key={index}
                defaultStyle={{h: 0}}
                style={{h: spring(isOpened ? height : 0)}}>
                {
                ({h}) => (
                  <div key={k}>
                    <li>
                      <ListHeader
                        ref={headerRef}
                        header={header}
                        headerIndex={index}
                        className="expandable-listview_listHeader"
                        handleToggle={this.handleToggle.bind(this, index)}
                      />
                      <div
                        style={{
                          display: 'block',
                          overflow: 'hidden',
                          height: `${h}`
                        }}>
                        <ListItemsManager
                          ref={itemRef}
                          items={items}
                          isReactComponent={isReactComponent}
                          className="expandable-listview_listItems"
                        />
                      </div>
                    </li>
                  </div>
                )
              }
              </Motion>
          )
          })
        }
        </ul>
      </div>
    )
  }

  handleToggle (headerIndex) {
    let newData = Object.assign({}, this.state.data)
    newData[headerIndex].isOpened = !newData[headerIndex].isOpened
    this.setState(
      newData
    )
  }
}
