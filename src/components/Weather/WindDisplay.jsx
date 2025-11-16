import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

class WindDisplay extends React.Component {
  render () {
    const { speed, unit, direction, degrees } = this.props

    return (
      <div className='wind'>
        <FaArrowUp
          className='wind__icon'
          style={{ transform: `rotate(${degrees}deg)` }}
        />
        <span className='wind__text'>
          {speed.toFixed(1)} {unit}, {direction}
        </span>
      </div>
    )
  }
}

export default WindDisplay
