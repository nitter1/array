let array = ["Honda Hornet 600", "Yamaha XJ6", "Yamaha FZ6"]
//--------------------------------
array.unshift("Yamaha YZF R1")
console.log(array)
//---------------------------------

array.pop("2")
console.log(array)

//---------------------------------
array.splice(3, 0, "Honda Titan 150", "Honda Twister CBX 250")
console.log(array)

//--------------------------------
array.shift(0)
console.log(array)

//--------------------------------
const numbers = [7, 5, 6, 3, 8, 55,9,30 ,2, 1, , 29,4];
numbers.sort(function (a, b) {
    return a - b;
  })
  console.log(numbers)

  //----------------------------

