'use strict'
module.exports = class Building {
  constructor() {
    this.minFloor = 0
    this.maxFloor = 50
    this.allocated = this.create2dArray(this.maxFloor + 1)
  }

  setMinFloor(minFloor) {
    this.minFloor = minFloor
  }

  setMaxFloor(maxFloor) {
    this.maxFloor = maxFloor
  }

  setAllocated(allocated) {
    this.allocated = allocated
  }

  getRandomFloor(min, max) {
    return Math.floor(Math.random() * max) + min
  }

  getRandomFloorDifferentThan(compare, min, max) {
    var random = this.getRandomFloor(min, max)
    while (random === compare) random = this.getRandomFloor(min, max)
    return random
  }

  alocateCalls(calls) {
    calls.forEach((call) => {
      this.allocated[call.floor].push(call)
    })
    return this.allocated
  }

  create2dArray(width) {
    var primaryArray = new Array(width)
    for (let i = 0; i < primaryArray.length; i++)
      primaryArray[i] = []
    return primaryArray
  }

  removeAllocated(floor, to) {
    this.allocated[floor].splice(
      this.allocated[floor].findIndex(
        x =>
        x.floor === floor &&
        x.to === to
      ),
      1
    )
    return this.allocated
  }
}
