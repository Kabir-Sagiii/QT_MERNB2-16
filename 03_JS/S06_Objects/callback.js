let myFun = function () {
  var x = 10;

  var y = 20;

  var temp;

  temp = y;

  y = x;

  x = temp;

  console.log(x, y, "Data");
};

function fn(swapNumbers) {
  swapNumbers();
}

fn(myFun);
