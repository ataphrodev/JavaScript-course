/* Ejercicios para principiantes
1. Escribe un comentario en una línea
2. Escribe un comentario en varias líneas
3. Declara variables con valores asociados a todos los datos de tipo primitivos
4. Imprime por consola el valor de todas las variables
5. Imprime por consola el tipo de todas las variables
6. A continuación, modifica los valores de las variables por otros del mismo tipo
7. A continuación, modifica los valores de las variables por otros de distinto tipo
8. Declara constantes con valores asociados a todos los tipos de datos primitivos
9. A continuación, modifica los valores de las constantes
10. Comenta las líneas que produzcan algún tipo de error al ejecutarse 
*/

let myName = "Alice" // String
let myAge = 25 // Number
let isStudent = true // Boolean
let myAddress // Undefined
let myPhoneNumber = null // Null
let myUniqueId = Symbol('id') // Symbol
let myBigNumber = 12345678901234567890n // BigInt

console.log(myName)
console.log(myAge)
console.log(isStudent)
console.log(myAddress)
console.log(myPhoneNumber)
console.log(myUniqueId)
console.log(myBigNumber)

console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof isStudent)
console.log(typeof myAddress)
console.log(typeof myPhoneNumber)
console.log(typeof myUniqueId)
console.log(typeof myBigNumber)

myName = "Bob" // String
myAge = 30 // Number
isStudent = false // Boolean
myAddress = "123 Main St" // String
myPhoneNumber = "555-1234" // String
myUniqueId = Symbol('newId') // Symbol
myBigNumber = 98765432109876543210n // BigInt

myName = 42 // Number
myAge = "thirty" // String
isStudent = "yes" // String
myAddress = 456 // Number
myPhoneNumber = true // Boolean
myUniqueId = 12345 // Number
myBigNumber = "big" // String

const myConstName = "Charlie" // String
const myConstAge = 35 // Number
const myConstIsStudent = false // Boolean
//const myConstAddress // Undefined, error: const declarations must be initialized
const myConstPhoneNumber = null // Null
const myConstUniqueId = Symbol('constId') // Symbol
const myConstBigNumber = 11223344556677889900n // BigInt

//myConstName = "David" // Error: Assignment to constant variable
//myConstAge = 40 // Error: Assignment to constant variable
//myConstIsStudent = true // Error: Assignment to constant variable
//myConstAddress = "456 Elm St" // Error: Assignment to constant variable