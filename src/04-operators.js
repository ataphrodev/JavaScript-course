// Operadores

// Operadores aritméticos

let a = 10
let b = 5

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo
console.log(a ** b) // Exponenciación

a++ // Incremento
console.log(a); // 11

b-- // Decremento
console.log(b) // 4

// Operadores de asignación

let myvariable = 2
console.log(myvariable) // 2
myvariable += 3 // Equivalente a myvariable = myvariable + 3
console.log(myvariable) // 5

myvariable -= 1 // Equivalente a myvariable = myvariable - 1
console.log(myvariable) // 4

myvariable *= 2 // Equivalente a myvariable = myvariable * 2
console.log(myvariable) // 8

myvariable /= 4 // Equivalente a myvariable = myvariable / 4
console.log(myvariable) // 2

myvariable %= 2 // Equivalente a myvariable = myvariable % 2
console.log(myvariable) // 0

myvariable **= 3 // Equivalente a myvariable = myvariable ** 3
console.log(myvariable) // 0

// Operadores de comparación

console.log(a == b) // Igualdad por valor. HACE CONVERSIONES implicitas
console.log(a === b) // Igualdad estricta, por tipo y valor. NO HACE CONVERSIONES implicitas
console.log(a != b) // Desigualdad por valor. HACE CONVERSIONES implicitas
console.log(a !== b) // Desigualdad estricta, por tipo y valor. NO HACE CONVERSIONES implicitas
// <, >, <=, >= pueden convertir tipos. Si ambos valores son cadenas "10" < "2" -> true (comparan lexicográficamente). Si uno es número y otro cadena, la cadena se convierte a número. "10" < 2 -> false
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que

// Truthy values

// Todos los números positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values

// El número 0
// 0n
// La cadena de texto vacía
// El boolean false
// null
// undefined
// NaN

// Operadores lógicos

// AND (&&)
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

// OR (||)
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// NOT (!)
console.log(!true) // false
console.log(!false) // true

// Operador ternario

let age = 18
let isAdult = age >= 18 ? 'Es mayor de edad' : 'No es mayor de edad'
console.log(isAdult) // Es mayor de edad
