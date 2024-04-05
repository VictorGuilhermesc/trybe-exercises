
const celsiusToFahrenheit = (value) => (value * 1.8) + 32;

const fahrenheitTocelsius = (value) => (value - 32) / 1.8;

module.exports = {
  celsiusToFahrenheit,
  fahrenheitTocelsius
}