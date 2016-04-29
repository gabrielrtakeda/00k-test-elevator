module.exports = class Tester {
  run(message, before, after, expects) {

  }

  equals(message, actual, expects) {
    actual = JSON.stringify(actual)
    expects = JSON.stringify(expects)
    console.info(
      actual === expects ? 'passed' : 'error',
      '::',
      message
    )
  }

  truthy(message, actual, conditionalCallback) {
    console.info(
      conditionalCallback(actual) ? 'passed' : 'error',
      '::',
      message
    )
  }
}
