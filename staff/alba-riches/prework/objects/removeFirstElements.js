/*
    array.shift() elemina el primer elemento y lo devuelve.Se modifica la longuitud
        */
/* nuestro objeto es numbers*/

var result = object[0]

function removeFirstElement(object) { }

/* guardar el valor de la propiedad que se va a eliminar 0:0 */

var numbers = {
  0: 0,
  1: 1,
  2: 2,
  length: 3
} /* se actualizara con la propiedad numbers.length */

/* Aunque se eliminar el valor 0 ,la posicion se mantiene por tanto.
0: 1
1: 2
length: 2
hay que retornar el 0

for (var i = 1; i< object.length; i++)
{ numbers[0] = numbers[1] 
 numbers[1] = numbers[2]
 object[i] = object[i+1]
}
// numbers ={
0: 1,
1: 1,
2: 2
length: 3 }

 
/* numbers ={
0: 1,
1: 2,
2: 2,
length: 3} 
*/

/*la propiedad numbers[2] se elimina para ello se mueven el resto de propiedades empezando por el 0 */

delete object[object.length - 1]
object.length--
console.log("numbers before shift", numbers)
console.log("first element of numbers", removeFirstElement(numbers))
console.log("numbers after shift", numbers)
console.log("first element of numbers after  second shift", removeFirstElement(numbers))

/*-> roberto, tea, pepe, luis f, victor, oscar,juan,mario  O 1->herminia , luis n, josep
console.log('numbers after second shifts', numbers)*/

/* X{ length : 0 } -> herminia // X { length: 1} -> oscar, roberto, victor,tea, josep // O {0:2 , length: 1} -> pepe, luis n, juan, luis f, mario
*/
