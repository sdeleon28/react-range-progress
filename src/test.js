import React from 'react'
import createComponent from 'react-unit'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})

// Component to test
import Range, { toRgbaString } from './index'

const handler = () => {
  // nothing yet!
}

const color0 = {
  r: 10,
  g: 10,
  b: 10,
  a: 0.8
}

const color1 = {
  r: 45,
  g: 45,
  b: 45,
  a: 1
}

const color2 = {
  r: 76,
  g: 76,
  b: 76,
  a: 0.87
}

const defaultProps = {
  fillColor: {r: 255, g: 255, b: 255, a: 1},
  trackColor: {r: 255, g: 255, b: 255, a: 0.5},
  thumbColor: {r: 255, g: 255, b: 255, a: 1},
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100,
  value: 0
}

test('Testing default values', (t) => {
  const component = createComponent.shallow(
    <Range />
    )

  const allInputs = component.findByQuery('input')
  const rangeInput = allInputs[0]
  const trackDiv = component.children[1]

  t.equal(component.props.style.height, `${defaultProps.thumbSize}px`, 'base div is thumb default size')
  t.equal(rangeInput.props.min, defaultProps.min, 'default min value is set on range input')
  t.equal(rangeInput.props.max, defaultProps.max, 'default max value is set on range input')
  t.equal(trackDiv.props.style.background, toRgbaString(defaultProps.trackColor), 'default color is set on track div')
  t.equal(trackDiv.props.style.borderRadius, `${defaultProps.height}px`, 'track div corner radius equals height prop')

  t.end()
})

test('Testing when setting props', (t) => {
  const component1 = createComponent.shallow(<Range height={24} thumbSize={12} />)
  t.equal(component1.props.style.height, '24px', 'when height > thumbsize, base div is set to height prop')

  const component2 = createComponent.shallow(<Range height={18} thumbSize={32} />)
  t.equal(component2.props.style.height, '32px', 'when height < thumbsize, base div is set to thumbsize prop')
  t.end()
})
