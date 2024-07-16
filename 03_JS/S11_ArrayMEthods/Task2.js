var arr = [[{ name: "s1" }], [{ name: "s2" }], [{ name: "s3" }]];

//Print all the name value

// var ele = arr[2];

// var obj = ele[0];

// console.log(obj.name);

arr.forEach(function (element, index) {
  var obj = element[0];
  var value = obj.name;
  console.log(value);
});
