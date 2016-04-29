'use strict'
const Tester = require('./Tester')
const Logger = require('./Logger')

const tester = new Tester()
const logger = new Logger()

let mass;

console.log = (r) => r

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' },
    { floor: 9, to: 47, direction: 'up' },
    { floor: 9, to: 38, direction: 'up' }
  ]
}
tester.equals(
  `logger.logAmmountStatus() :: singular`,
  logger.logAmmountStatus(mass.maxAmmount, mass.currentAmmount),
  ` •  1 lugar disponível`
)

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' }
  ]
}
tester.equals(
  `logger.logAmmountStatus() :: plural`,
  logger.logAmmountStatus(mass.maxAmmount, mass.currentAmmount),
  ` •  3 lugares disponíveis`
)

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' },
    { floor: 9, to: 47, direction: 'up' },
    { floor: 9, to: 38, direction: 'up' },
    { floor: 21, to: 11, direction: 'down' }
  ]
}
tester.equals(
  `logger.logAmmountStatus() :: zero com plural`,
  logger.logAmmountStatus(mass.maxAmmount, mass.currentAmmount),
  ` •  0 lugares disponíveis`
)

mass = [
  { floor: 0, to: 21, direction: 'up' }
]
tester.equals(
  `logger.logLanding() :: singular`,
  logger.logLanding(mass),
  `###  1 passageiro desembarcou  ###`
)

mass = [
  { floor: 0, to: 21, direction: 'up' },
  { floor: 9, to: 47, direction: 'up' },
  { floor: 9, to: 38, direction: 'up' }
]
tester.equals(
  `logger.logLanding() :: plural`,
  logger.logLanding(mass),
  `###  3 passageiros desembarcaram  ###`
)

mass = []
tester.equals(
  `logger.logLanding() :: zero com plural`,
  logger.logLanding(mass),
  `###  0 passageiros desembarcaram  ###`
)

mass = [
  { floor: 0, to: 21, direction: 'up' }
]
tester.equals(
  `logger.logBoarding() :: singular`,
  logger.logBoarding(mass),
  `###  1 passageiro embarcou  ###`
)

mass = [
  { floor: 0, to: 21, direction: 'up' },
  { floor: 9, to: 47, direction: 'up' },
  { floor: 9, to: 38, direction: 'up' }
]
tester.equals(
  `logger.logBoarding() :: plural`,
  logger.logBoarding(mass),
  `###  3 passageiros embarcaram  ###`
)

mass = []
tester.equals(
  `logger.logBoarding() :: zero com plural`,
  logger.logBoarding(mass),
  `###  0 passageiros embarcaram  ###`
)

tester.equals(
  `logger.pad() :: número com 1 dígito, comprimento 3 e pad padrão (0)`,
  logger.pad(1, 3),
  `001`
)

tester.equals(
  `logger.pad() :: número com 4 dígitos, comprimento 2 e pad padrão (0)`,
  logger.pad(1234, 2),
  `1234`
)

tester.equals(
  `logger.pad() :: número com 2 dígitos, comprimento 4 e pad '*'`,
  logger.pad(10, 4, '*'),
  `**10`
)

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' },
    { floor: 9, to: 47, direction: 'up' },
    { floor: 9, to: 38, direction: 'up' }
  ]
}
tester.equals(
  `logger.logFloor() :: 20 andares + térreo e lugares disponíveis no singular`,
  logger.logFloor(19, 20 + 1, mass.maxAmmount, mass.currentAmmount),
  `| -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 19 -- |  •  1 lugar disponível`
)

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' }
  ]
}
tester.equals(
  `logger.logFloor() :: 5 andares + térreo e lugares disponíveis no plural`,
  logger.logFloor(2, 5 + 1, mass.maxAmmount, mass.currentAmmount),
  `| -- -- 02 -- -- -- |  •  3 lugares disponíveis`
)

mass = {
  maxAmmount: 4,
  currentAmmount: [
    { floor: 0, to: 21, direction: 'up' },
    { floor: 35, to: 21, direction: 'down' },
    { floor: 39, to: 17, direction: 'down' },
    { floor: 44, to: 43, direction: 'down' },
  ]
}
tester.equals(
  `logger.logFloor() :: 5 andares + térreo e lugares disponíveis com zero no plural`,
  logger.logFloor(2, 5 + 1, mass.maxAmmount, mass.currentAmmount),
  `| -- -- 02 -- -- -- |  •  0 lugares disponíveis`
)
