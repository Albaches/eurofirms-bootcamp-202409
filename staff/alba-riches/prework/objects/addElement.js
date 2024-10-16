/* Sera para añadir multiples elementos */

function addElements(object) {
    /* buscar la ultima posicion para añadir a partir de ella ,numbers[2] el primer elemento añadido sera a partir del numbers [3] */
    // añadir los elementos que estan en el objeto arguments
    // recorriendo el objeto arguments añado tamtos elementos cuantos haya en el objeto arguments
    // cantidad de elementos a añadir es arguments.length -1 

    for (var i = 1; i < arguments.length; i++)
        // sacaremos el parametro exacto 
        var element = arguments[i]
    // introduzco el parametro exacto -- element ,en el objeto
    object[object.length] = element
    // incrementar lo que es la longitud -- object.length
    object.length++
    console.long(arguments)

}
addElements('primer parametro', 'segundo parametro')
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}
console.log('caso 1< añadir 3 y 4 a numbers')
addElements(numbers, 3, 4)
console.log('resultado esperado--{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, length: 5  }', numbers)
