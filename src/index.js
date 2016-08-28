import React, { PropTypes } from 'react'
import './styles.css'

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

  return <div
           className='slidershell'
           style={{
             height: componentHeight + 'px'
           }}>
           <div
             className='slidertrack'
             style={{
               borderRadius: props.height + 'px',
               width: `100%`,
               ...trackPosition
             }}></div>
           <div
             className='sliderfill'
             style={{
               borderRadius: props.height + 'px',
               background: props.color,
               width: `calc(100% * ${percentProgress} + ${(1 - percentProgress) * componentHeight}px)`,
               ...trackPosition
             }}></div>
             {props.hideThumb ? null
             : <div
                className='sliderthumb'
                style={{
                  width: componentHeight,
                  height: componentHeight + 'px',
                  borderRadius: componentHeight + 'px',
                  background: props.thumbColor || props.color,
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
               height: componentHeight
             }}
             className='slider'
             type='range'
             onChange={props.onChange}
             min={min}
             max={max} />
         </div>
}

Range.defaultProps = {
  color: '#eee',
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100
}

Range.propTypes = {
  color: PropTypes.string,
  thumbColor: PropTypes.string,
  hideThumb: PropTypes.bool,
  height: PropTypes.number,
  thumbSize: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Range
