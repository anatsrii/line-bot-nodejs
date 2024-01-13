const coins = require('./coins.json')

// let result = coins.findIndex(checkName)

let result = coins.filter((idx) => {
  return idx.symbol === 'bch'
})


console.log(result)
console.log(result[0].name)