const baseColors = {
  black: '#273444',
  white: '#FFF',
  gray2: '#E0E6ED',
  gray: '#D3DCE6',
  midgray: '#8492A6',
  blue: '#009EEB',
  red: '#FF4949',
  orange: '#FF7849',
  green: '#13CE66'
}
const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

const theme = { colors }

export default theme
