var x = 65;

var result = ++x + x++ + --x + x--;
//   66 + 66 + 66 + 66

console.log(result, x); // 264 65
