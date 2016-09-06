import React, { PropTypes } from 'react'

export const toRgbaString = rgbaObject => `rgba(${rgbaObject.r}, ${rgbaObject.g}, ${rgbaObject.b}, ${rgbaObject.a})`

export const trackPosition = ({thumbSize, height}) => ({
  top: (thumbSize - Math.min(height, thumbSize)) / 2,
  height: height + 'px'
})

class Range extends React.Component {
  constructor () {
    super()
    this.state = {value: 0}
  }

  onChange (e) {
    if (!this.props.readOnly) {
      const newVal = parseInt(e.nativeEvent ? e.nativeEvent.target.value : e, 10)
      this.setState({value: newVal})
      this.props.onChange && this.props.onChange(newVal)
    }
  }

  render () {
    const val = Math.min(this.props.max, this.state.value || this.props.value)
    const min = this.props.min
    const max = this.props.max

    const percentProgress = val / (max - min)

    const componentHeight = Math.max(this.props.height, this.props.thumbSize)

    return <div
            style={{width: this.props.width}}>
            <div
             id='rrp-baseDiv'
             style={{
               height: componentHeight + 'px',
               border: '0 none',
               position: 'relative',
               left: 0,
               top: 0,
               overflow: 'visible'
             }}>
             <style dangerouslySetInnerHTML={{
               __html:
                 `
                 input[type=range]::-ms-track {
                   width:100%;
                   height:100%;

                   -webkit-appearance:none;
                   margin:0px;
                   padding:0px;
                   border:0 none;

                   background:transparent;
                   color:transparent;
                   overflow:visible;
                 }

                 input[type=range]::-moz-range-track {
                   width:100%;
                   height:100%;

                   -moz-appearance:none;
                   margin:0px;
                   padding:0px;
                   border:0 none;

                   background:transparent;
                   color:transparent;
                   overflow:visible;
                 }

                 input[type=range] {
                   cursor: pointer;

                   -webkit-appearance:none;
                   padding:0px;
                   border:0 none;

                   background:transparent;
                   color:transparent;
                   overflow:visible;
                 }

                 input[type=range]:focus::-webkit-slider-runnable-track {
                   background:transparent;
                   border:transparent;
                 }

                 input[type=range]:focus {
                   outline: none;
                 }

                 input[type=range]::-ms-thumb {
                   width:12px;
                   height:12px;

                   border-radius:0px;
                   border:0 none;
                   background:transparent;
                 }
                 input[type=range]::-moz-range-thumb {
                   width:12px;
                   height:12px;

                   border-radius:0px;
                   border:0 none;
                   background:transparent;
                 }
                 input[type=range]::-webkit-slider-thumb {
                   width:12px;
                   height:12px;

                   border-radius:0px;
                   border:0 none;
                   background:transparent;
                   -webkit-appearance:none;
                 }

                 input[type=range]::-ms-fill-lower {
                   background:transparent;
                   border:0 none;
                 }
                 input[type=range]::-ms-fill-upper {
                   background:transparent;
                   border:0 none;
                 }
                 input[type=range]::-ms-tooltip {
                    display: none;
                 }`
             }}>
            </style>
             <div
               id='rrp-track'
               style={{
                 border: 0,
                 position: 'absolute',
                 background: toRgbaString(this.props.trackColor),
                 borderRadius: this.props.height + 'px',
                 width: `100%`,
                 ...trackPosition(this.props)
               }}></div>
             <div
               id='rrp-fill'
               style={{
                 border: 0,
                 position: 'absolute',
                 pointerEvents: 'none',
                 borderRadius: this.props.height + 'px',
                 background: toRgbaString(this.props.fillColor),
                 width: `calc(100% * ${percentProgress} + ${(1 - percentProgress) * componentHeight}px)`,
                 ...trackPosition(this.props)
               }}></div>
               {this.props.hideThumb ? null
               : <div
                  id='rrp-thumb'
                  style={{
                    position: 'absolute',
                    top: 0,
                    border: '0 none',
                    padding: 0,
                    margin: 0,
                    textAlign: 'center',
                    pointerEvents: 'none',
                    width: componentHeight,
                    height: componentHeight + 'px',
                    borderRadius: componentHeight + 'px',
                    background: toRgbaString(this.props.thumbColor),
                    boxShadow: '0 0 3px black',
                    left: `calc((100% - ${componentHeight}px) * ${percentProgress})` }}>
                  </div>}
             <input
               style={{
                 ...trackPosition(this.props),
                 width: 'calc(100% - ' + componentHeight + 'px)',
                 marginLeft: componentHeight / 2,
                 marginRight: componentHeight / 2,
                 top: 0,
                 height: componentHeight,
                 WebkitAppearance: 'none',
                 background: 'transparent',
                 position: 'absolute',
                 left: 0,
                 overflow: 'visible',
                 zIndex: 100
               }}
               type='range'
               onChange={this.onChange.bind(this)}
               min={min}
               max={max} />
           </div>
      </div>
  }
}

Range.defaultProps = {
  fillColor: {r: 255, g: 255, b: 255, a: 1},
  trackColor: {r: 255, g: 255, b: 255, a: 0.5},
  thumbColor: {r: 255, g: 255, b: 255, a: 1},
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100,
  width: 300,
  value: 0,
  onChange: () => {}
}

const colorWithAlpha = {
  r: PropTypes.number.isRequired,
  g: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  a: PropTypes.number.isRequired
}

Range.propTypes = {
  fillColor: PropTypes.shape(colorWithAlpha),
  trackColor: PropTypes.shape(colorWithAlpha),
  thumbColor: PropTypes.shape(colorWithAlpha),
  hideThumb: PropTypes.bool,
  height: PropTypes.number,
  thumbSize: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  readOnly: PropTypes.bool
}

export default Range
