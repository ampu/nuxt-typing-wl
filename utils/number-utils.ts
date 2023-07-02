const SUFFIX_DATA = {
  hundredDivisor: 100,
  hundredRange: {min: 11, max: 14},
  tenDivisor: 10,
  singularTenRange: {min: 1, max: 1},
  exceptionalTenRange: {min: 2, max: 4},
}

export const formatSuffix = (value: number, [oneTitle, twoTitle, otherTitle]: string[]) => {
  const hundredRemainder = value % SUFFIX_DATA.hundredDivisor
  if (SUFFIX_DATA.hundredRange.min <= hundredRemainder && hundredRemainder <= SUFFIX_DATA.hundredRange.max) {
    return ` ${otherTitle}`
  }

  const tenRemainder = value % SUFFIX_DATA.tenDivisor
  if (SUFFIX_DATA.singularTenRange.min <= tenRemainder && tenRemainder <= SUFFIX_DATA.singularTenRange.max) {
    return ` ${oneTitle}`
  }
  if (SUFFIX_DATA.exceptionalTenRange.min <= tenRemainder && tenRemainder <= SUFFIX_DATA.exceptionalTenRange.max) {
    return ` ${twoTitle}`
  }
  return ` ${otherTitle}`
}
