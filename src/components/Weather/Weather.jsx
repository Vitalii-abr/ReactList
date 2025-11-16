import React, { Component } from 'react'
import './Weather.sass'
import TemperatureDisplay from './TemperatureDisplay'
import WindDisplay from './WindDisplay'
import { convertTemperature, convertWindSpeed } from './Utils/conversions'
import { getWindDirection } from './Utils/windDirections'

class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: null,
      windSpeed: null,
      windDirection: null,
      tempUnit: 'C',
      speedUnit: 'M/s',
      isLoading: true,
      error: null
    }
  }

  componentDidMount () {
    this.fetchWeatherData()
    this.interval = setInterval(() => this.fetchWeatherData(), 60000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  fetchWeatherData () {
    const latitude = 50.06 // Краків
    const longitude = 19.94

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then(res => res.json())
      .then(data => {
        const { temperature, windspeed, winddirection } = data.current_weather
        this.setState({
          temperature,
          windSpeed: windspeed,
          windDirection: winddirection,
          isLoading: false,
          error: null
        })
      })
      .catch(error => {
        this.setState({ error, isLoading: false })
      })
  }

  handleTempUnitChange = e => {
    this.setState({ tempUnit: e.target.value })
  }

  handleSpeedUnitChange = e => {
    this.setState({ speedUnit: e.target.value })
  }

  render () {
    const {
      temperature,
      windSpeed,
      windDirection,
      tempUnit,
      speedUnit,
      isLoading,
      error
    } = this.state

    if (isLoading) return <p className='loading'>Завантаження погоди...</p>
    if (error) return <p className='error'>Помилка: {error.message}</p>

    const displayedTemp = convertTemperature(temperature, tempUnit)
    const displayedSpeed = convertWindSpeed(windSpeed, speedUnit)
    const directionText = getWindDirection(windDirection)

    return (
      <div className='weather'>
        <h2 className='weather__title'>Погода в Кракові</h2>

        <div className='weather__selectors'>
          <label>
            Температура:
            <select onChange={this.handleTempUnitChange} value={tempUnit}>
              <option value='C'>°C</option>
              <option value='F'>°F</option>
            </select>
          </label>

          <label>
            Вітер:
            <select onChange={this.handleSpeedUnitChange} value={speedUnit}>
              <option value='M/s'>M/s</option>
              <option value='km/h'>Km/h</option>
              <option value='mph'>Mph</option>
            </select>
          </label>
        </div>

        <div className='weather__info'>
          <TemperatureDisplay value={displayedTemp} unit={tempUnit} />
          <WindDisplay
            speed={displayedSpeed}
            unit={speedUnit}
            direction={directionText}
            degrees={windDirection}
          />
        </div>
      </div>
    )
  }
}

export default Weather
