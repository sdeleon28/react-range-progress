import React from 'react'
import createComponent from 'react-unit'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})

// Component to test
import Range, { toRgbaString, trackPosition } from './index'

test('Testing toRgbaString', (t) => {
  const mock = {
    r: 1,
    g: 2,
    b: 3,
    a: 0.5
  }
  const actual = toRgbaString(mock)
  const expected = `rgba(1, 2, 3, 0.5)`
  t.equal(actual, expected, 'formats object to string compliant with css rgba syntax')
  t.end()
})

test('Testing trackPosition with thumb bigger than track', (t) => {
  const mock = {
    height: 37, thumbSize: 87
  }
  const actual = trackPosition(mock)
  const expected = {
    top: 25,
    height: '37px'
  }
  t.equal(actual.top, expected.top, 'sets top gap to correct value')
  t.equal(actual.height, expected.height, 'sets height to max param')
  t.end()
})

test('Testing trackPosition with thumb lower than track', (t) => {
  const mock = {
    height: 100, thumbSize: 12
  }
  const actual = trackPosition(mock)
  const expected = {
    top: 0,
    height: '100px'
  }
  t.equal(actual.top, expected.top, 'sets top gap = 0 if thumb lower than track')
  t.equal(actual.height, expected.height, 'sets height to max param')
  t.end()
})

test('Testing component when no props set - default values', (t) => {
  const component = createComponent.shallow(<Range />)

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

  const percentProgress = defaultProps.value / (defaultProps.max - defaultProps.min)

  const allInputs = component.findByQuery('input')
  const rangeInput = allInputs[0]
  const trackDiv = component.children[1]
  const fillDiv = component.children[2]

  t.equal(component.props.style.height, `${defaultProps.thumbSize}px`, 'base div is thumb default size')

  t.equal(rangeInput.props.min, defaultProps.min, 'default min value is set on range input')
  t.equal(rangeInput.props.max, defaultProps.max, 'default max value is set on range input')

  t.equal(trackDiv.props.style.background, toRgbaString(defaultProps.trackColor), 'default track color is set on track div')
  t.equal(trackDiv.props.style.borderRadius, `${defaultProps.height}px`, 'track div corner radius equals height prop')
  t.equal(trackDiv.props.style.top, trackPosition(defaultProps).top, 'track div has correct top margin')
  t.equal(trackDiv.props.style.height, trackPosition(defaultProps).height, 'track div has correct height')

  t.equal(fillDiv.props.style.background, toRgbaString(defaultProps.fillColor), 'default fill color is set on fill div')
  t.equal(fillDiv.props.style.borderRadius, `${defaultProps.height}px`, 'fill div corner radius equals height prop')
  t.equal(fillDiv.props.style.width, `calc(100% * ${percentProgress} + ${(1 - percentProgress) * defaultProps.thumbSize}px)`, 'width is 0')

  t.end()
})

test('Testing when setting props', (t) => {
  const bigVal = 43
  const smallVal = 13

  const component1 = createComponent.shallow(<Range height={bigVal} thumbSize={smallVal} />)
  t.equal(component1.props.style.height, `${bigVal}px`, 'when height > thumbsize, base div is set to height prop')

  const component2 = createComponent.shallow(<Range height={smallVal} thumbSize={bigVal} />)
  t.equal(component2.props.style.height, `${bigVal}px`, 'when height < thumbsize, base div is set to thumbsize prop')

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

  t.end()
})
