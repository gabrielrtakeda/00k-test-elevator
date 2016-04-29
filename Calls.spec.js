'use strict'
const Tester    = require('./Tester')
const Building  = require('./Building')
const Calls     = require('./Calls')

const tester    = new Tester()
const building  = new Building()
const calls     = new Calls(building)

let mass;

mass = 8
calls.setAmount(mass)
tester.equals(
  `calls.generate() :: with ${mass} calls`,
  calls.generate().length,
  mass
)

mass = 10
calls.setAmount(mass)
tester.equals(
  `calls.generate() :: with ${mass} calls`,
  calls.generate().length,
  mass
)
