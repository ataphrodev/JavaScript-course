/* Tipos de datos primitivos en JavaScript
String: cadena de texto "" ` ` ' '
Number: números enteros y decimales
Boolean: true o false
Undefined: variable declarada pero sin valor asignado
Null: variable declarada con valor nulo de forma intencionada
Symbol: valor único e inmutable, utilizado para identificar propiedades de objetos
BigInt: números enteros muy grandes, mayores a 2^53 - 1
typeof: operador que devuelve el tipo de dato de una variable
*/

let name = "John Doe" // String
let alias = 'JD' // String
let email = `john.doe@example.com` // String

let age = 30 // Number
let height = 1.75 // Number

let isStudent = true // Boolean
let isEmployed = false // Boolean

let address // Undefined

let phoneNumber = null // Null

let uniqueId = Symbol('id') // Symbol

let bigNumber = 9007199254740991n // BigInt
let bigNumber2 = BigInt(900719925474099245879123587) // BigInt

console.log(typeof name) // String
console.log(typeof age) // Number
console.log(typeof isStudent) // Boolean
console.log(typeof address) // Undefined
console.log(typeof phoneNumber) // Object (this is a known quirk in JavaScript)
console.log(typeof uniqueId) // Symbol
console.log(typeof bigNumber) // BigInt