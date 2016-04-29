'use strict'
const Tester    = require('./Tester')
const Building  = require('./Building')

const tester    = new Tester()
const building  = new Building()

let mass;

mass = {min: 0, max: 50}
tester.truthy(
  `building.getRandomFloor() :: between ${mass.min} and ${mass.max}`,
  building.getRandomFloor(mass.min, mass.max),
  (actual) => actual >= mass.min && actual <= mass.max
)

mass = {min: 0, max: 50, compare: 20}
tester.truthy(
  `building.getRandomFloorDifferentThan() :: between ${mass.min} and ${mass.max} and different to ${mass.compare}`,
  building.getRandomFloorDifferentThan(mass.compare, mass.min, mass.max),
  (actual) => actual >= mass.min
    && actual <= mass.max
    && actual !== mass.compare
)

mass = 20
tester.truthy(
  `building.create2dArray()`,
  building.create2dArray(mass),
  (actual) => actual.map(x => typeof x === 'object') && actual.length === mass
)

mass = [
  [], [], [], [], [], [], [], [], [], [],
  [], [{floor: 11, to: 5, direction: 'down'}, {floor: 11, to: 45, direction: 'up'}], [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [], [], [],
  [{floor: 30, to: 2, direction: 'down'}], [], [], [], [{floor: 34, to: 45, direction: 'up'}], [], [], [{floor: 36, to: 39, direction: 'up'}], [], [],
  [], [], [{floor: 42, to: 5, direction: 'down'}], [], [], [], [], [], [], []
]
building.setAllocated(mass)
tester.equals(
  `building.removeAllocated()`,
  building.removeAllocated(11, 5),
  [ [], [], [], [], [], [], [], [], [], [],
    [], [{floor: 11, to: 45, direction: 'up'}], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [],
    [{floor: 30, to: 2, direction: 'down'}], [], [], [], [{floor: 34, to: 45, direction: 'up'}], [], [], [{floor: 36, to: 39, direction: 'up'}], [], [],
    [], [], [{floor: 42, to: 5, direction: 'down'}], [], [], [], [], [], [], []
  ]
)
