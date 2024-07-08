function f1() {
  console.log("f1 is called");
}

function f2(p1) {
  p1();
}

f2(f1); //f1 is called callback function

function fn(p) {
  console.log(p);
}
fn(function () {});
