'use strict'
const Tester    = require('./../classes/Tester')
const Building  = require('./../classes/Building')
const Calls     = require('./../classes/Calls')
const Logger    = require('./../classes/Logger')
const Elevator  = require('./../classes/Elevator')

const tester    = new Tester()
const building  = new Building()
const calls     = new Calls(building)
const logger    = new Logger()
const elevator  = new Elevator(calls, building, logger)

let mass;
mass = [
  { floor: 7, to: 32, direction: 'up' },
  { floor: 10, to: 40, direction: 'up' },
  { floor: 10, to: 27, direction: 'up' },
  { floor: 21, to: 25, direction: 'up' }
]
tester.equals(
  'elevator.getAllCallsValues()',
  elevator.getAllCallsValues(mass),
  [7, 10, 10, 21, 32, 40, 27, 25]
)

mass = [7, 10, 10, 21, 32, 40, 27, 25]
tester.equals(
  'elevator.getMaxFloor()',
  elevator.getMaxFloor(mass),
  40
)

mass = [7, 10, 10, 21, 32, 40, 27, 25]
tester.equals(
  'elevator.getMinFloor()',
  elevator.getMinFloor(mass),
  7
)

mass = [
  { floor: 7, to: 32, direction: 'up' },
  { floor: 10, to: 40, direction: 'up' },
  { floor: 10, to: 27, direction: 'up' },
  { floor: 21, to: 25, direction: 'up' }
]
elevator.setCalls(mass)
tester.equals(
  'elevator.removeCall()',
  elevator.removeCall(10, 40),
  [ { floor: 7, to: 32, direction: 'up' },
  { floor: 10, to: 27, direction: 'up' },
  { floor: 21, to: 25, direction: 'up' } ]
)

mass = [
  { floor: 4, to: 19, direction: 'up' },
  { floor: 18, to: 2, direction: 'down' },
  { floor: 19, to: 38, direction: 'up' },
  { floor: 19, to: 26, direction: 'up' },
  { floor: 24, to: 39, direction: 'up' },
  { floor: 32, to: 42, direction: 'up' },
  { floor: 36, to: 12, direction: 'down' },
  { floor: 36, to: 30, direction: 'down' }
]
tester.equals(
  'elevator.filterCallsByDirection() :: up',
  elevator.filterCallsByDirection(mass, 'up'),
  [ { floor: 4, to: 19, direction: 'up' },
    { floor: 19, to: 38, direction: 'up' },
    { floor: 19, to: 26, direction: 'up' },
    { floor: 24, to: 39, direction: 'up' },
    { floor: 32, to: 42, direction: 'up' },
  ]
)
tester.equals(
  'elevator.filterCallsByDirection() :: down',
  elevator.filterCallsByDirection(mass, 'down'),
  [ { floor: 18, to: 2, direction: 'down' },
    { floor: 36, to: 12, direction: 'down' },
    { floor: 36, to: 30, direction: 'down' }
  ]
)

mass = [
  { floor: 18, to: 2, direction: 'down' },
  { floor: 32, to: 42, direction: 'up' },
  { floor: 19, to: 38, direction: 'up' },
  { floor: 36, to: 30, direction: 'down' },
  { floor: 36, to: 12, direction: 'down' },
  { floor: 19, to: 26, direction: 'up' },
  { floor: 4, to: 19, direction: 'up' },
  { floor: 24, to: 39, direction: 'up' }
]
tester.equals(
  'elevator.sortCallsByCurrentFloor()',
  elevator.sortCallsByCurrentFloor(mass),
  [ { floor: 4, to: 19, direction: 'up' },
    { floor: 18, to: 2, direction: 'down' },
    { floor: 19, to: 38, direction: 'up' },
    { floor: 19, to: 26, direction: 'up' },
    { floor: 24, to: 39, direction: 'up' },
    { floor: 32, to: 42, direction: 'up' },
    { floor: 36, to: 30, direction: 'down' },
    { floor: 36, to: 12, direction: 'down' }
  ]
)

mass = [
  { floor: 18, to: 2, direction: 'down' },
  { floor: 32, to: 42, direction: 'up' },
  { floor: 19, to: 38, direction: 'up' },
  { floor: 36, to: 30, direction: 'down' },
  { floor: 36, to: 12, direction: 'down' },
  { floor: 19, to: 26, direction: 'up' },
  { floor: 4, to: 19, direction: 'up' },
  { floor: 24, to: 39, direction: 'up' }
]
tester.equals(
  'elevator.sortCallsByToFloor()',
  elevator.sortCallsByToFloor(mass),
  [ { floor: 18, to: 2, direction: 'down' },
    { floor: 36, to: 12, direction: 'down' },
    { floor: 4, to: 19, direction: 'up' },
    { floor: 19, to: 26, direction: 'up' },
    { floor: 36, to: 30, direction: 'down' },
    { floor: 19, to: 38, direction: 'up' },
    { floor: 24, to: 39, direction: 'up' },
    { floor: 32, to: 42, direction: 'up' }
  ]
)
