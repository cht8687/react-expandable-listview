import React from 'react'
import test from 'tape'
import ReactExpandableListView from '../src/ReactExpandableListView'
import ListHeader from '../src/lib/ListHeader'
import ListItem from '../src/lib/ListItem'
import { DATA } from '../src/example/const'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { Motion } from 'react-motion'

test('ReactExpandableListView', t => {
  t.plan(2)
  t.ok(ReactExpandableListView instanceof Function, 'should be function')
  const app = shallow(<ReactExpandableListView data={DATA} headerAttName="headerName" itemsAttName="items" />)
  t.equal(5, app.find(Motion).length)
  t.end()
})

test('----- React Component Tests: ListHeader -----', t => {
  t.ok(ListHeader instanceof Function, 'should be function')
  t.end()
})

test('----- React Component Tests: ListItems -----', t => {
  t.ok(ListItem instanceof Function, 'should be function')
  t.end()
})
