import React from 'react'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'

class TemperatureDisplay extends React.Component {
  render () {
    const { value, unit } = this.props
    const Icon = value > 0 ? FaTemperatureHigh : FaTemperatureLow

    return (
      <div className='temperature'>
        <Icon className='temperature__icon' />
        <span className='temperature__value'>
          {value.toFixed(1)}°{unit}
        </span>
      </div>
    )
  }
}

export default TemperatureDisplay
