export function filterVids(contents: SearchVideo[]) {
  const filtered = contents.filter((content) => {
    if (content.type === 'video') return content
  }) as SearchVideo[]

  return filtered
}

export function abbreviateNumber(number?: number, decimalPlaces = 2) {
  if (!number) return 0
  // 2 decimal places => 100, 3 => 1000, etc
  decimalPlaces = Math.pow(10, decimalPlaces)

  // Enumerate number abbreviations
  const abbrev = ['K', 'M', 'B', 'T']

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3)

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

export function formatSeconds(seconds?: number) {
  if (!seconds) {
    return '0:00'
  }

  let formatted = new Date(seconds * 1000).toISOString().substring(14, 19)
  if (seconds >= 3600) {
    formatted = new Date(seconds * 1000).toISOString().substring(11, 8)
  }

  return formatted
}
