const config = require('../configs/config')
console.log(config)
module.exports = function(){
  console.log('in test',config)
  return config
}