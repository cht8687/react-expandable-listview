import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'

export default class ListItemsManager extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render () {
    const { items } = this.props
    return (
      <span>
      {
        [...items].map((item, index) => {
          return (
            <ListItem key={index}>
              {item}
            </ListItem>
          )
        })
      }
      </span>
    )
  }
}
