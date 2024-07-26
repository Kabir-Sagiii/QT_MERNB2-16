var arr = [10, 20, 30, 40, 50];

var newArray = arr.map(function (element, index) {
  //20
  var result = element + 100; //20 + 100
  return result;
});

console.log(newArray);

//newArray [110,120,130,140,150]
