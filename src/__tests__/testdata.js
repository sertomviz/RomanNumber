const romanToArabic = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XIII: 13,
    XVIII: 18,
    XXIV: 24,
    XXVII: 27,
    XL: 40,
    XLIV: 44,
    LX: 60,
    XC: 90,
    C: 100,
    CXI: 111,
    CDXXIX: 429,
    CMXCIX: 999,
    MCDLXXXII: 1482,
    MDCLXVI: 1666,
    MCMLXXX: 1980
};

const arabicToRoman = {
  1: 'I',
  3: 'III',
  4: 'IV',
  5: 'V',
  11: 'XI',
  102: 'CII',
  1968: 'MCMLXVIII',
  1473: 'MCDLXXIII',
  2999: 'MMCMXCIX',
  3000: 'MMM'

};

const wrongInputs = [
  'MMMM',
  'XXLXX',
  'IIII',
  'CD1X',
  'MMMMCMXCIX',
  'MMMMDMXCIX',
  1.5,
  100.09,
  [10],
  ['XX'],
  {a: 'b'},
  true,
  'error',
  'etc..'
];

const inputOutOfRange = [-10, 4000, 10000];


module.exports = {
  romanToArabic: romanToArabic,
  arabicToRoman: arabicToRoman,
  wrongInputs: wrongInputs,
  inputOutOfRange: inputOutOfRange
}
