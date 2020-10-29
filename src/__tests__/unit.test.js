const RomanNumber = require('../roman');
const { romanToArabic, arabicToRoman, wrongInputs, inputOutOfRange } = require('./testdata')

describe("Testing the RomanNumber module", () => {

  it("should return 1 for 'I' ", () => {
    const RN = new RomanNumber(1);
    expect(RN.toString()).toBe('I')
  })

  it("should throw a 'Value required' error when input value is falsy ", () => {
    expect( () => new RomanNumber(null) ).toThrow('Value required') &&
    expect( () => new RomanNumber(undefined) ).toThrow('Value required') &&
    expect( () => new RomanNumber(0) ).toThrow('Value required') &&
    expect( () => new RomanNumber() ).toThrow('Value required')
  })

  it("should throw an 'Invalid range' error when input value is out of range ", () => {
    inputOutOfRange.map(input =>
      expect( () => new RomanNumber(input) ).toThrow('Invalid range')
    )
  })

  it("should throw an 'Invalid value' error when input value is wrong", () => {
    wrongInputs.map(input =>
      expect( () => new RomanNumber(input) ).toThrow('Invalid value')
    )
  })

  it("should return correct Arabic number from Roman string", () => {
    Object.keys(romanToArabic).map(key => {
      const RN = new RomanNumber(key);
      return expect(RN.toInt()).toBe(romanToArabic[key])
    })

  })

  it("should return correct Roman string from Arabic number", () => {
    Object.keys(arabicToRoman).map(key => {
      const RN = new RomanNumber(parseInt(key));
      return expect(RN.toString()).toBe(arabicToRoman[key])
    })

  })

})
