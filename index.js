function produceDrivingRange(range){
  return function(num1, num2){
    console.log(num2.slice(0,2) - num1.slice(0,2))
    let distance = num2.slice(0,2) - num1.slice(0,2)
    if (distance > range){
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
    }
  }

function produceTipCalculator(rate){
  return function (bill){
    return bill * rate
  }
}

function createDriver(){
  let id = 0
  return class {
    constructor(name){
      this.name = name;
      this.id = ++id;
    }
    }
  }
