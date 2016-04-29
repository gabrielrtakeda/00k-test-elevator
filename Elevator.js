'use strict'
module.exports = class Elevator {
  /**
   * @param {Object} calls Instância da classe Calls.
   * @param {Object} building Instância da classe Building.
   */
  constructor(calls, building, logger) {
    this.callsInstance = calls
    this.buildingInstance = building
    this.loggerInstance = logger

    this.calls = this.callsInstance.generate()
    this.historyCalls = this.calls.slice()
    this.maxAmount = 4
    this.currentAmount = []
    this.floor = 0
    this.currentDirection = 'up'
    this.state = 'stop'
  }

  run() {
    let historyCalls = this.sortCallsByCurrentFloor(this.historyCalls)
    this.calls = this.sortCallsByCurrentFloor(this.calls)
    this.state = 'start'
    this.buildingInstance.alocateCalls(this.calls)

    console.log('###  Histórico de chamadas do elevador  ###')
    console.log(historyCalls)
    console.log('\n\n')

    console.log('###  Fluxo de trânsito do elevador  ###')
    while (this.state === 'start') {

      let allocated = this.buildingInstance.allocated

      while (this.currentDirection === 'up') {
        this.loggerInstance.logFloor(
          this.floor,
          this.buildingInstance.maxFloor + 1,
          this.maxAmount,
          this.currentAmount
        )

        this.boarding('up', allocated)
        this.landing()

        let allValues = this.getAllCallsValues(this.historyCalls)
        let max = this.getMaxFloor(allValues)
        if (this.floor === max) {
          if (this.calls.length > 0)
            this.currentDirection = 'down'
          else
            this.stop()
        }
        else
          this.floor++
      }

      while (this.currentDirection === 'down') {
        this.loggerInstance.logFloor(
          this.floor,
          this.buildingInstance.maxFloor + 1,
          this.maxAmount,
          this.currentAmount
        )

        this.boarding('down', allocated)
        this.landing()

        let allValues = this.getAllCallsValues(this.historyCalls)
        let min = this.getMinFloor(allValues)
        if (this.floor === min) {
          if (this.calls.length > 0)
            this.currentDirection = 'up'
          else
            this.stop()
        }
        else
          this.floor--
      }
    }
    console.log('\n\n###  Histórico de chamadas do elevador  ###')
    console.log(historyCalls)
  }

  boarding(direction, allocated) {
    if (this.currentAmount.length < this.maxAmount) {
      let currentFloorCalls = allocated[this.floor]
      if (currentFloorCalls.length > 0) {
        let callsToDirection = this.filterCallsByDirection(
          currentFloorCalls,
          direction
        )
        if (callsToDirection.length > 0) {
          let embarked = []
          callsToDirection.forEach((call) => {
            if (this.currentAmount.length < this.maxAmount) {
              embarked.push(call)
              this.currentAmount.push(call)
              this.buildingInstance.removeAllocated(call.floor, call.to)
              this.removeCall(call.floor, call.to)
            }
          })
          this.loggerInstance.logBoarding(embarked)
        }
      }
    }
  }

  landing() {
    if (this.currentAmount.length > 0) {
      let currentLandingCalls = this.currentAmount.filter(
        (call) => call.to === this.floor
      )
      if (currentLandingCalls.length > 0) {
        currentLandingCalls.forEach((call) => {
          this.currentAmount.splice(
            this.currentAmount.findIndex(
              x =>
              x.floor === call.floor &&
              x.to === call.to
            ),
            1
          )
        })
        this.loggerInstance.logLanding(currentLandingCalls)
      }
    }
  }

  stop() {
    this.state = 'stop'
    this.currentDirection = 'stop'
  }

  setCalls(calls) {
    this.calls = calls
  }

  getAllCallsValues(historyCalls) {
    return []
      .concat(historyCalls.map(call => call.floor))
      .concat(historyCalls.map(call => call.to))
  }

  getMaxFloor(allCallsValues) {
    return Math.max(...allCallsValues)
  }

  getMinFloor(allCallsValues) {
    return Math.min(...allCallsValues)
  }

  removeCall(floor, to) {
    let findCondition = x => x.floor === floor && x.to === to
    let i = this.calls.findIndex(findCondition)
    this.calls.splice(i, 1)
    return this.calls
  }

  filterCallsByDirection(calls, direction) {
    let filtered = calls
    return filtered.filter((call) => call.direction === direction)
  }

  sortCallsByCurrentFloor(calls) {
    let sorted = calls
    return sorted.sort((a, b) => {
      return a.floor > b.floor ? 1
        : (b.floor > a.floor ? -1 : 0);
    })
  }

  sortCallsByToFloor(calls) {
    let sorted = calls
    return sorted.sort((a, b) =>
      a.to > b.to
        ? 1
        : (b.to > a.to ? -1 : 0)
    )
  }
}
