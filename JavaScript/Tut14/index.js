function outer() {
  let cnt = 3;
  return function () {
    cnt++;
    return cnt;
  };
  return increment;
}

let f1 = outer();
console.log(f1());
