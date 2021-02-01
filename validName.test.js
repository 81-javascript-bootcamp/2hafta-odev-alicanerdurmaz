const testCases = {
  'a bb cccc': false,
  'abc abc-abab bba': true,
  ' 123123 123 ': true,
  'a': false,
  '': false,
  ' ababab    abb a': false,
  '123': true,
  '12': true,
}

function isValidName(name) {
  if (typeof name !== 'string') return false
  if (!name) return false

  return name
    .trim('')
    .split(' ')
    .every((word) => word.length >= 2)
}

function RunTest() {
  let isFail = false

  for (const [value, expectedResult] of Object.entries(testCases)) {
    const functionResult = isValidName(value)

    if (functionResult !== expectedResult) {
      isFail = true
      console.log(`case:${value} expectedResult:${expectedResult} functionResult:${functionResult}`)
    }
  }
  if (isFail) {
    console.log('func isValidName() test FAIL')
  } else {
    console.log('func isValidName() test PASS')
  }
}

RunTest()
