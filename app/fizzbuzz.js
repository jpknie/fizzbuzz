let multipleofthree = function(num) {
 return ((num % 3) == 0);
}

let multipleoffive = function(num) {
 return ((num % 5) == 0);
}

let multofthreeandfive = function(num) {
  return multipleofthree(num) && multipleoffive(num);
}

let runfizzbuzz = function(i) {
 if(multofthreeandfive(i)) return "FizzBuzz";
 else if(multipleofthree(i)) return "Fizz";
 else if(multipleoffive(i)) return "Buzz";
 else return "" + i;
}

module.exports = {
  multipleofthree,
  multipleoffive,
  multofthreeandfive,
  runfizzbuzz
}

//runfizzbuz()
