module.exports = class Logger {
  logAmmountStatus(maxAmmount, currentAmmount) {
    let lugares = maxAmmount - currentAmmount.length
    let lugarPlural = lugares === 1 ? 'lugar' : 'lugares'
    let disponivelPlural = lugares === 1 ? 'disponível' : 'disponíveis'
    return ` •  ${lugares} ${lugarPlural} ${disponivelPlural}`
  }

  logFloor(currentFloor, maxFloor, maxAmmount, currentAmmount) {
    let log = new Array(maxFloor)
    let ammountStatusLog = this.logAmmountStatus(maxAmmount, currentAmmount)
    log[currentFloor] = ' ' + this.pad(currentFloor)
    return console.log(`|${log.join(' --')} | ${ammountStatusLog}`)
  }

  logBoarding(ammount) {
    let quantidade = ammount.length
    let passageiro = quantidade === 1 ? 'passageiro' : 'passageiros'
    let embarcou = quantidade === 1 ? 'embarcou' : 'embarcaram'
    return console.log(`###  ${quantidade} ${passageiro} ${embarcou}  ###`)
  }

  logLanding(ammount) {
    let quantidade = ammount.length
    let passageiro = quantidade === 1 ? 'passageiro' : 'passageiros'
    let desembarcou = quantidade === 1 ? 'desembarcou' : 'desembarcaram'
    return console.log(`###  ${quantidade} ${passageiro} ${desembarcou}  ###`)
  }

  pad(number, padWidth, padLabel) {
    number = number.toString()
    padWidth = padWidth || 2
    padLabel = padLabel || '0'
    return number.length < padWidth
      ? new Array(padWidth - number.length + 1).join(padLabel) + number
      : number
  }
}
