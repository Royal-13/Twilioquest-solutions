function calculateMass(freightItems) {
    // This is a placeholder for the total length in characters of all strings
    // in the freightItems array
    return freightItems.reduce((totlength, item) => totlength + item.length, 0)
  }