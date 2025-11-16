export function convertTemperature (value, unit) {
  if (unit === 'F') {
    return (value * 9) / 5 + 32
  }
  return value
}

export function convertWindSpeed (value, unit) {
  switch (unit) {
    case 'km/h':
      return value * 3.6
    case 'M/s':
      return value
    case 'mph':
      return value * 2.23694
    default:
      return value
  }
}
