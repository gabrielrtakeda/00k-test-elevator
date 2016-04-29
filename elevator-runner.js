'use strict'
const Building  = require('./src/classes/Building')
const Calls     = require('./src/classes/Calls')
const Logger    = require('./src/classes/Logger')
const Elevator  = require('./src/classes/Elevator')

/**
 * Arguments
 */
const buildingMaxFloor  = parseInt(process.argv[2]) || 50
const elevatorMaxAmount = parseInt(process.argv[3]) || 4
const callsAmount       = parseInt(process.argv[4]) || 8

/**
 * Run
 */
const logger    = new Logger()
const building  = new Building()
building.setMaxFloor(buildingMaxFloor)

const calls     = new Calls(building)
calls.setAmount(callsAmount)

const elevator  = new Elevator(calls, building, logger)
elevator.setMaxAmount(elevatorMaxAmount)
elevator.run()
