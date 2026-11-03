// Strings Lección 6

// Concatenación de strings

let myName = "Miguel";
let greeting = "Hola, " + myName + "!";

console.log(typeof greeting);

// Longitud de un string
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[12]);

// Métodos comunes de strings
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
// indexOf() devuelve el número de la posición (índice) donde comienza. Si NO lo encuentra devuelve -1
console.log(greeting.indexOf(myName));
if (greeting.indexOf("Miguel") !== -1) {
  console.log("¡El nombre está en el saludo!");
}
// .includes() método más moderno, devuelve true o false sin tener que comparar -1
console.log(greeting.includes("Miguel"));
if (greeting.includes("Miguel")) {
  console.log("¡El nombre está en el saludo!");
}
// .slice() extrae un fragmento de un texto, sin modificar el original.
console.log(greeting.slice(0, 10));
/*Casos y trucos útiles
    1. Omitir el segundo parámetro
    // Desde la posición 6 hasta el final del texto
    console.log(greeting.slice(6)) // "Miguel!"
    2. Usar números negativos (cuenta desde el final)
    // Toma el último carácter
    console.log(greeting.slice(-1)) // "!"
    // Toma los últimos 7 caracteres
    console.log(greeting.slice(-7)) // "Miguel!"
*/

// .replace() busca un texto y lo reemplaza por otro. No modifica el original
console.log(greeting.replace("Miguel", "Ángel"));
/*
    Casos y trucos útiles
    1. Solo cambia la primera coincidencia
    let phrase = "gato, perro, gato"
    console.log(phrase.replace("gato", "pez")) // "pez, perro, gato"
    2. Reemplazar todas las apariciones .replaceAll()
    console.log(phrase.replaceAll("gato", "pez")) // "pez, perro, pez"
    3. Ignorar mayúsculas/minúsculas (/i)
    console.log(greeting.replace(/miguel/i, "Ángel")) // "Hola, Ángel!"
    4. Borrar una parte del texto (reemplaza por "")
    console.log(greeting.replace("!", "")) // "Hola, Miguel"
*/

// Templates literals
let message = `Hola estos son mis apuntes
de JavaScript`
console.log(message)
// Para interpolar una variable hay que emplear `` NO ""
console.log(`Hola, ${myName}!`)
