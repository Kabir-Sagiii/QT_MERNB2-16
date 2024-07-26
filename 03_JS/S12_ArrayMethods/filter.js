var arr = [10, 20, 30, 40, 50];
//print only elements greater 20

var newArray = arr.filter(function (element, index) {
  return element > 20;
});

console.log(newArray);
