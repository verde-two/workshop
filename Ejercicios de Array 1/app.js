var volwels = ['a','e','i','o','u'];
var numbers = ['one','two','three'];

var reverse =function (array){

  var newArray = [];
  var size = array.length;
  var lastPosition = size -1;

  for (var i =lastPosition; i>0; i--){

    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverse(volwels));
console.log(volwels);
/*
var size = numbers.length;// 5

var lastPosition = size -1;

for(var i = lastPosition; i>=0; i--){

  console.log(numbers[i]);
}
*/
