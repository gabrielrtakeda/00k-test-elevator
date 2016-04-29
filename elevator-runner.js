'use strict'
const Building  = require('./Building')
const Calls     = require('./Calls')
const Logger    = require('./Logger')
const Elevator  = require('./Elevator')

/**
 * Run
 */
const logger    = new Logger()
const building  = new Building()

const calls     = new Calls(building)
calls.setAmount(15)

const elevator  = new Elevator(calls, building, logger)
elevator.run()
