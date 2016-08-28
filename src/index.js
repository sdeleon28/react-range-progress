import React, { PropTypes } from 'react'

const Range = props => {
  const val = props.value
  const min = props.min
  const max = props.max

  const percentProgress = val / (max - min)

  const componentHeight = Math.max(props.height, props.thumbSize)

  const trackPosition = {
    top: (props.thumbSize - Math.min(props.height, props.thumbSize)) / 2,
    height: props.height + 'px'
  }

  const toRgbaString = rgbaObject => `rgba(${rgbaObject.r}, ${rgbaObject.g}, ${rgbaObject.b}, ${rgbaObject.a})`

  return <div
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
             style={{
               border: 0,
               position: 'absolute',
               background: toRgbaString(props.trackColor),
               borderRadius: props.height + 'px',
               width: `100%`,
               ...trackPosition
             }}></div>
           <div
             style={{
               border: 0,
               position: 'absolute',
               pointerEvents: 'none',
               borderRadius: props.height + 'px',
               background: toRgbaString(props.fillColor),
               width: `calc(100% * ${percentProgress} + ${(1 - percentProgress) * componentHeight}px)`,
               ...trackPosition
             }}></div>
             {props.hideThumb ? null
             : <div
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
                  background: toRgbaString(props.thumbColor),
                  boxShadow: '0 0 3px black',
                  left: `calc((100% - ${componentHeight}px) * ${percentProgress})` }}>
                </div>}
           <input
             style={{
               ...trackPosition,
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
             onChange={props.onChange}
             min={min}
             max={max} />
         </div>
}

Range.defaultProps = {
  fillColor: {r: 20, g: 20, b: 180, a: 1},
  trackColor: {r: 255, g: 255, b: 255, a: 0.5},
  thumbColor: {r: 255, g: 255, b: 255, a: 1},
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Range
