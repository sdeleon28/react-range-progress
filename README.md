react-range-progress
=======================

> A visually customizable range input component for react, inspired by [a post on css-tricks](https://css-tricks.com/custom-interactive-range-inputs/).

## Demo (todo)

Coming soon.

## Installation

```
npm install react-range-progress --save
```

## Usage

The range control will stretch horizontally 100% width of the parent container.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Range from 'react-range-progress'

var RangeDemo = React.createClass({
  render: function() {
    return (
      <div style={{width: 300}}>
        <Range
          hideThumb={!!this.state.thumb}
          height={this.state.height}
          onChange={this.onValueChange.bind(this)}
          value={this.state.rangeValue} />
      </div>
    )
  }
})

ReactDOM.render(<FilesDemo />, document.getElementById('container'))
```

### Props

> `hideThumb` - Boolean

Set to true to hide the thumb.

---

> `height` - number

Track height in pixels.

---

> `thumbSize` - number

Thumb size in pixels.

---

> `min` - number

Minimum range value.

---

> `max` - number

Maximum range value.

---

> `onChange` - function, required

Callback called when the range value was changed.

---

> `value` - number, required

Initial range value.

---

The following properties are set with an object with properties r, g, b, a to set red, green, blue (all from 0 to 255) and alpha (0.0 to 1.0) channels. Example for a half opaque
red color:
```js
{
  r: 255, g: 0, b: 0, a: .5
}
```

---

> `fillColor` - number, required

Fills the track part on the left of the thumb.

---

> `trackColor` - number, required

Color of the 'empty' part of the track.

---

> `thumbColor` - number, required

Thumb color.


### Test (todo)

```
npm test
```

### License

MIT. Copyright (c) 2016 Jared Reich.
