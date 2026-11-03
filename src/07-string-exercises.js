// 1. Concatena dos cadenas de texto.
const str1 = "Hola, "
const str2 = "mundo!"

console.log(str1+str2)
// 2. Muestra la longitud de una cadena de texto.
console.log(str1.length)
// 3. Muestra el primer y último carácter de un string.
console.log(str2[0], str2[str2.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string.
const upperStr = str1.toUpperCase()
console.log(upperStr)
// 5. Crea una cadena de texto en varias líneas.
const str3 = `Esto es una
cadena de texto
en varias líneas.`
// 6. Interpola el valor de una variable en un string.
console.log(`Interpolando el valor de str1 ${str1}, y ahora de str2 ${str2}. Bummmmmm`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones.
/*
    Tenemos dos formas de hacerlo:
    1. replace(/ /g, "-"): / / indica que es un patrón de búsqueda, el espacio en blanco lo que estoy buscando y g global, busca y cambia todos
    los que encuentre
    2. replaceAll(" ", "-"): método moderno JavaScript sin necesidad de emplear barras ni g 
*/
const totalStr = str1 + str2 + str3
console.log(totalStr.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(str3.includes("texto"))

// 9. Comprueba si dos strings son iguales.
console.log(str1 === str2) // (str1 === str2 ? "Son iguales" : "No son iguales") | (`Las cadenas ${str1 === str2 ? "sí" : "no"} coinciden.`)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(`Las cadenas ${str1}y ${str2} ${str1.length === str2.length ? "tienen igual longitud" : "tienen diferente longitud."}`)

// Nota: estructura operador ternario -> condicion ? valor_si_es_verdadero : valor_si_es_falso