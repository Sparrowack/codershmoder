function makeCounter() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 2;

  return counter();
}

var ssanina = makeCounter();
console.log( ssanina() ); // 1
console.log( ssanina() ); // 2
//git
