var search = function (array,element){

  for (var i = 0; i < array.length; i++) {
    if(array[i] === element){
      return i
    }
  }

}
console.log(search([1,2,3,4,5,6,7,8],7));//6
