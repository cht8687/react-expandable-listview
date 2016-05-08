import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ReactExpandableListView from '..'
import { DATA } from './const'
import '../../react-expandable-listview.css'

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render () {
    const { data } = this.props
    return (
      <ReactExpandableListView
        data={data}
        headerAttName="headerName"
        itemsAttName="items"
      />
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App data={DATA} />, appRoot)
