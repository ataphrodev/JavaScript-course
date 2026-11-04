// Ejercicios if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
const myName = "Miguel"
if (myName === "Miguel") {
  console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos.
const userName = "admin"
const password = "1234"
if (userName === "admin" && password === "1234") {
  console.log("Usuario y contraseña correctos.")
} else {
  console.log("¡Error, usuario y contraseña incorrectos!")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
const number = -1
if (number > 0) {
  console.log("Número positivo")
} else if (number < 0) {
  console.log("Número negativo")
} else {
  console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
const age = 16
if (age >= 18) {
  console.log("Puedes votar")
} else {
  console.log(`Te faltan ${18 - age} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
const personAge = 10
const ageGroup = personAge >= 18 ? "Adulto" : "Menor"
console.log(ageGroup)

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes".
const month = "Septiembre"
if (month === "Diciembre" || month === "Enero" || month === "Febrero") {
  console.log("Estamos en Invierno")
} else if (month === "Marzo" || month === "Abril" || month === "Mayo") {
  console.log("Estamos en Primavera")
} else if (month === "Junio" || month === "Julio" || month === "Agosto") {
  console.log("Estamos en Verano")
} else if (month === "Septiembre" || month === "Octubre" || month === "Noviembre") {
  console.log("Estamos en Otoño")
} else {
  console.log("Mes incorrecto")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.
if (month === "Diciembre") {
  console.log("31 días")
} else if (month === "Enero") {
  console.log("31 días")
} else if (month === "Febrero") {
  console.log("28 ó 29 días")
} else if (month === "Marzo") {
  console.log("31 días")
} else if (month === "Abril") {
  console.log("30 días")
} else if (month === "Mayo") {
  console.log("31 días")
} else if (month === "Junio") {
  console.log("30 días")
} else if (month === "Julio") {
  console.log("31 días")
} else if (month === "Agosto") {
  console.log("31 días")
} else if (month === "Septiembre") {
  console.log("30 días")
} else if (month === "Octubre") {
  console.log("31 días")
} else if (month === "Noviembre") {
  console.log("30 días")
} else {
  console.log("Mes incorrecto")
}

// Ejercicios switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
const language = "Inglés"
switch (language) {
  case "Inglés":
    console.log("Hello")
    break
  case "Español":
    console.log("Hola")
    break
  case "Francés":
    console.log("Bonjour")
    break
  default:
    console.log("Idioma no reconocido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
/*
    Fall-through (caída): si un case NO tiene break, la ejecución "cae" al siguiente case
    y sigue ejecutando su código hasta encontrar un break. Por eso se apilan varios case
    seguidos (sin break entre ellos) para que compartan el mismo bloque de código.

    Ojo: NO se puede escribir case "Diciembre" || "Enero" || "Febrero":
    La expresión "Diciembre" || "Enero" se evalúa a "Diciembre" (el primer valor verdadero),
    así que ese case solo coincidiría con "Diciembre".
*/
switch (month) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("Estamos en Invierno")
    break
  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log("Estamos en Primavera")
    break
  case "Junio":
  case "Julio":
  case "Agosto":
    console.log("Estamos en Verano")
    break
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log("Estamos en Otoño")
    break
  default:
    console.log("Mes incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
// Agrupamos con fall-through (ver explicación en el ejercicio 9) los meses con los mismos días.
switch (month) {
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    console.log("31 días")
    break
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log("30 días")
    break
  case "Febrero":
    console.log("28 ó 29 días")
    break
  default:
    console.log("Mes incorrecto")
}
