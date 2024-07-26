var x = 100;

// var result = ++x + ++x;
//           101 +   102

var result = x++ + x++;
//  100 + 101  201  102

console.log(result, x); //201 and 102 // 202 and 102 //
