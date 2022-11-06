function unroll(squareArray) {
  let arr = [];

  while(squareArray.length) {
    arr.push(
      ...squareArray.shift(), //first row
      ...squareArray.map(n => n.pop()), 
      ...(squareArray.pop() || []).reverse(),
      ...squareArray.map(n => n.shift()).reverse()
    );
  }
  return arr;

}

module.exports = unroll;
