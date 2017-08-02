import React, { Component } from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export default class ListItemsManager extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isReactComponent: PropTypes.bool
  }

  render () {
    const { items, isReactComponent } = this.props
    return (
      <span>
      {
        [...items].map((item, index) => {
          return (
            <ListItem key={index} isReactComponent={isReactComponent}>
              {item}
            </ListItem>
          )
        })
      }
      </span>
    )
  }
}
