function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    let r = Math.floor(Math.random() * (i + 1));

    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

let numbers  = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayShuffle(numbers));
