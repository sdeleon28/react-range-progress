import React from 'react'
import createComponent from 'react-unit'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})

// Component to test
import Range from './index'

const handler = () => {
  // nothing yet!
}

test('Testing react component', (t) => {
  // Shallow rendering
  const component = createComponent.shallow(<Range onChange={handler} value={0} />)
  var allInputs = component.findByQuery('input')
  // Test component props and content 
  // t.equal(component.props.className, 'default-class', 'ClassName props of component should equal "share"')
  // t.equal(component.text, 'share', 'Label props of component should be rendered as Button text "share"')

  t.end()
})
