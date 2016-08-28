# react-range-progress
Component for react to ease styling of range inputs.
Inspired by [a post on css-tricks](https://css-tricks.com/custom-interactive-range-inputs/).

# Installation
`npm install react-range-progress --save`

# Usage
## Control
`import Range from 'react-range-progress'`
The range control will stretch horizontally 100% width of the parent container.

## Properties
* hideThumb (bool): true to hide the thumb
* height (number): track height in pixels
* thumbSize (number): thumb size in pixels
* min (number): min range value
* max (number): max range value
* onChange (function, required): callback, mandatory
* value (number, required): initial value

The following properties are set with an object with properties r, g, b, a to set red, green, blue (all from 0 to 255) and alpha (0.0 to 1.0) channels.

* fillColor: fills the track part on the left of the thumb
* trackColor: colors the 'empty' part of the track
* thumbColor

# TODO
* Write actual tests
* Add a nice demo website
