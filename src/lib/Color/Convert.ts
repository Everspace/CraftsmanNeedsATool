/**
 * Turns number into string like "A" or "3C"
 */
export const decimalTohex = (decimal: number): string => decimal.toString(16)

/**
 * Aligns A to 0A or 3C4 to 03C4
 * @param hex
 * @returns aligned bytes
 */
export const byteify = (hex: string): string =>
  hex.length % 2 === 0 ? hex : "0" + hex

/**
 * Turns string into number
 * @param hex
 * @returns decimal value of hex
 */
export const hexTodecimal = (hex: string): number => parseInt(hex, 16)

/**
 * Makes 16 into 0F
 * @param decimal
 * @returns hex string
 */
export const decimalToHexByte = (decimal: number): string =>
  byteify(decimalTohex(decimal))

/**
 * Splits a #FF00FF into an object {r,g,b}
 * @param color A hex color string of FF00FF or F0F with # optional
 * @returns a color object
 */
export const hexToColor = (color: string): cnat.Color => {
  // Get rid of #
  if (color[0] === "#") {
    color = color.substr(1, color.length - 1)
  }

  let r, g, b

  switch (color.length) {
    case 6:
      // Split if 6 into 2's
      r = color.substr(0, 2)
      g = color.substr(2, 2)
      b = color.substr(4, 2)
      break
    case 3:
      //Split and double up
      r = color[0] + color[0]
      g = color[1] + color[1]
      b = color[2] + color[2]
      break
    default:
      throw new Error(`Color is not 6 or 3 characters long '${color}`)
  }

  return {
    r: hexTodecimal(r),
    g: hexTodecimal(g),
    b: hexTodecimal(b),
  }
}

/**
 * Takes an r/g/b split color object and poops out a #FF3D5C type color
 * @param color
 * @returns `#FF00FF`
 */
export const colorToHex = (color: cnat.Color): string => {
  return Object.keys(color).reduce(
    (memory, key) => memory + decimalToHexByte(color[key]),
    "#",
  )
}
