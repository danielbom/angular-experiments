function countIf<T>(xs: T[], condition: (x: T) => boolean): number {
  let count = 0
  for (let i = 0, n = xs.length; i < n; i++) {
    if (condition(xs[i])) {
      count++
    }
  }
  return count
}

const isDigit = (ch: string) => Boolean(ch.match(/^\d/))
const isChar = (ch: string) => Boolean(ch.match(/^[a-zA-Z]/))
const isSpecialChar = (ch: string) => !isChar(ch) && !isDigit(ch)

function removeAccents(text: string): string {
  return text
    .replace(/ÀÁÂÃÄÅ/, 'A')
    .replace(/àáâãäå/, 'a')
    .replace(/ÈÉÊË/, 'E')
    .replace(/èéêë/, 'e')
    .replace(/ÌÍÎÏ/, 'I')
    .replace(/ìíîï/, 'i')
    .replace(/ÒÓÔÕÖ/, 'O')
    .replace(/òóôõö/, 'o')
    .replace(/ÙÚÛÜ/, 'U')
    .replace(/ùúûü/, 'u')
    .replace(/ç/, 'c')
    .replace(/Ç/, 'C')
}

export class AppRawValidators {
  static strongPassword(value: unknown): StrongPassword | undefined {
    if (typeof value !== 'string') return
    const result: StrongPassword = {
      isLarge: false,
      hasSpecialCharacters: false,
      hasCharacters: false,
      hasDigits: false,
    }
    if (value.length === 0) return result

    const chars = Array.from(removeAccents(value))
    result.isLarge = 8 <= chars.length
    result.hasSpecialCharacters = countIf(chars, isSpecialChar) > 0
    result.hasCharacters = countIf(chars, isChar) > 0
    result.hasDigits = countIf(chars, isDigit) > 0

    const isValid =
      result.isLarge &&
      result.hasSpecialCharacters &&
      result.hasCharacters &&
      result.hasDigits

    return isValid ? undefined : result
  }
}

export type StrongPassword = {
  isLarge: boolean
  hasSpecialCharacters: boolean
  hasCharacters: boolean
  hasDigits: boolean
}
