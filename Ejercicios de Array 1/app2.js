var volwels = ['a','e','i','o','u'];//disponer de los elementos al reves
// metodo pop--- retorna el ultimo elemento del array
//console.log(volwels.pop());console.log(volwels);// el array original se modifica en tamaño
//console.log(volwels.pop());
//console.log(volwels);
//splice funciona con 3 parametros
//si solo quiero eliminar elementos de cualquier array, funciona con 2 parametros
//console.log(volwels.splice(0,1));//[a]
//console.log(volwels);//[e,i,o,u]
//console.log(volwels.splice(1,1));// [i]
//mejorando el metodo
//console.log(volwels.splice(0,0,'hola'));// definicion de los argumentos de splice (posicion,cuantos eliminas, y agrega un elemento en la pocicion)
//console.log(volwels);
/*console.log(volwels.pop());//u
console.log(volwels.splice(0,0,'u'));//[]
console.log(volwels);//[u,a,e,i,o]*/
//function
//var reverse = function (array){

  //for (var i =0; i<array.length; i++){
    //var item = array.pop();
    //array.splice(i,0,item);

  //}
  //return array
//}
//console.log(reverse(volwels));
//metodo reverse
console.log(volwels.reverse());//[u,o,i,e,a]
