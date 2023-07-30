export function filterVids(contents: Content[]) {
  const filtered = contents.filter((content) => {
    if (content.type === 'video') {
      return content
    }
  }) as VideoContent[]

  return filtered
}

export function abbreviateNumber(number: number, decimalPlaces = 2) {
  // 2 decimal places => 100, 3 => 1000, etc
  decimalPlaces = Math.pow(10, decimalPlaces)

  // Enumerate number abbreviations
  var abbrev = ['K', 'M', 'B', 'T']

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3)

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decimalPlaces, round, and then divide by decimalPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decimalPlaces) / size) / decimalPlaces

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1
        i++
      }

      // Add the letter for the abbreviation
      // @ts-ignore
      number += abbrev[i]

      // We are done... stop
      break
    }
  }

  return number
}
