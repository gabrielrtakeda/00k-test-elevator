'use strict'
module.exports = class Calls {
  constructor(building) {
    this.building = building
    this.amount
  }

  /**
   * Sempre teremos pelo menos 8 pessoas chamando elevador.
   * Independente se estejam no mesmo andar ou não.
   * Gerando as solicitações do elevador.
   */
  generate() {
    let calls = []
    while (calls.length < this.amount) {
      let person = {}
      person.floor = this.building.getRandomFloor(
        this.building.minFloor,
        this.building.maxFloor
      )
      person.to = this.building.getRandomFloorDifferentThan(
        person.floor,
        this.building.minFloor,
        this.building.maxFloor
      )
      person.direction = person.floor > person.to
        ? 'down'
        : 'up'
      calls.push(person)
    }
    return calls
  }

  setAmount(amount) {
    this.amount = amount
  }
}
