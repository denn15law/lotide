const findKey = (obj, callback) => {
  
  let keys = Object.keys(obj)
  
  for (let key of keys){
    if(callback(obj[key])){
      return key;
    }
  }
}

module.exports = findKey;
