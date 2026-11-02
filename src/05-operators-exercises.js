// 1. Crea una variable para cada operación aritmética
let addition = 5 + 3 // Suma
console.log("Suma: " + addition)
let subtraction = 5 - 3 // Resta
console.log("Resta: " + subtraction)
let multiplication = 5 * 3 // Multiplicación
console.log("Multiplicación: " + multiplication)
let division = 5 / 3 // División
console.log("División: " + division)
let module = 5 % 3 // Módulo
console.log("Módulo: " + module)
let exponentiation = 5 ** 3 // Exponenciación
console.log("Exponenciación: " + exponentiation)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas
let myVariable = 10
myVariable += addition // Equivalente a myVariable = myVariable + addition
console.log("Asignación suma: " + myVariable)
myVariable -= subtraction // Equivalente a myVariable = myVariable - subtraction
console.log("Asignación resta: " + myVariable)
myVariable *= multiplication // Equivalente a myVariable = myVariable * multiplication
console.log("Asignación multiplicación: " + myVariable)
myVariable /= division // Equivalente a myVariable = myVariable / division
console.log("Asignación división: " + myVariable)
myVariable %= module // Equivalente a myVariable = myVariable % module
console.log("Asignación módulo: " + myVariable)
myVariable **= exponentiation // Equivalente a myVariable = myVariable ** exponentiation
console.log("Asignación exponenciación: " + myVariable)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 == 5) // Igualdad por valor
console.log(5 === 5) // Igualdad estricta, por tipo y valor
console.log(5 != 3) // Desigualdad por valor
console.log(5 !== 3) // Desigualdad estricta
console.log(5 > 3) // Mayor que
console.log(3 < 5) // Menor que
console.log(5 >= 5) // Mayor o igual que
console.log(3 <= 5) // Menor o igual que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 == 3) // Igualdad por valor
console.log(5 === 3) // Igualdad estricta, por tipo y valor
console.log(5 != 5) // Desigualdad por valor
console.log(5 !== 5) // Desigualdad estricta
console.log(3 > 5) // Mayor que
console.log(5 < 3) // Menor que
console.log(5 <= 3) // Menor o igual que
console.log(3 >= 5) // Mayor o igual que

// 5. Utiliza el operador lógico and (&&)
let x = 5
let y = 10
console.log(x > 0 && y > 0) // true, ambos son mayores que 0
console.log(x < 0 && y > 0) // false, x no es menor que 0
console.log(x > 0 && y < 0) // false, y no es menor que 0
console.log(x < 0 && y < 0) // false, ninguno es menor que 0

// 6. Utiliza el operador lógico or (||)
console.log(x > 0 || y > 0) // true, ambos son mayores que 0
console.log(x < 0 || y > 0) // true, y es mayor que 0
console.log(x > 0 || y < 0) // true, x es mayor que 0
console.log(x < 0 || y < 0) // false, ninguno es menor que 0

// 7. Combina ambos operadores lógicos en una sola expresión
console.log((x > 0 && y > 0) || (x < 0 && y < 0)) // true, se cumple una de las dos condiciones -> true || false = true
console.log((x < 0 && y > 0) || (x > 0 && y < 0)) // false, ninguno cumple una de las dos condiciones -> false || false = false
console.log((x > 0 || y > 0) && (x < 0 || y < 0)) // false, ninguno cumple ambas condiciones -> true && false = false
console.log((x < 0 || y < 0) && (x > 0 || y > 0)) // false, una de las condiciones no se cumple -> false && true = false

// 8. Añade alguna negación !=
console.log(!(x > 0)) // false, x es mayor que 0 -> !(true) = false
console.log(!(y < 0)) // true, y no es menor que 0 -> !(false) = true
console.log(!(x === y)) // true, x no es igual a y -> !(false) = true
console.log(!(x !== y)) // false, x es diferente a y -> !(true) = false

// 9. Utiliza el operador ternario
let isStudent = true
console.log(isStudent ? "Es estudiante" : "No es estudiante") // true, imprime "Es estudiante"
isStudent = false
console.log(isStudent ? "Es estudiante" : "No es estudiante") // false, imprime "No es estudiante"

// 10. Combina operadores aritméticos, de comparación y lógicos
x = "Félix"
y = "Xiana"

const totalLetters = x.length + y.length
console.log(totalLetters >= 10 && x.length === y.length) // false, la longitud de sumNames es mayor que 10 pero x e y no tienen la misma longitud -> true && true = true
