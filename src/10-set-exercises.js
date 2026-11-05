// Ejercicios Set

/*
Normas para todos los ejercicios:
- Declara los Set con const y con new Set().
- Usa nombres descriptivos en plural (tags, roles...), no mySet.
- Usa solo lo visto hasta ahora: add, delete, has, size, Array.from, new Set(array)
  (y if, toLowerCase, template literals, etc.). Sin bucles ni funciones.
- Cada ejercicio es independiente. Si repites un nombre de variable, cámbialo (tags2, ...)
  o comenta el ejercicio anterior, porque no se puede declarar dos veces un const.
*/

// 1. Crea un Set vacío llamado tags. Añade con add "js", "css", "html" y otra vez "js".
//    Imprime por consola el Set y cuántos elementos tiene.
/*
    Resultado esperado:
    Set(3) { 'js', 'css', 'html' }
    3
*/
const tags = new Set();
tags.add("js");
tags.add("css");
tags.add("html");
tags.add("js");
console.log(tags);
console.log(tags.size);

// 2. Parte de const roles = new Set(["admin", "editor", "user"]) y de const userRole = "editor".
//    Si roles contiene userRole imprime "Acceso permitido"; si no, "Acceso denegado".
/*
    Resultado esperado:
    Acceso permitido

    Comprueba también con const userRole = "invitado":
    Acceso denegado
*/
const roles = new Set(["admin", "editor", "user"]);
const userRole = "editor";
if (roles.has(userRole)) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

// 3. Parte de const seenIds = new Set([101, 102, 103]).
//    Elimina el 102 e imprime lo que devuelve delete. Después intenta eliminar el 999 e imprime también lo que devuelve.
//    Imprime al final el Set y su tamaño.
/*
    Resultado esperado:
    true
    false
    Set(2) { 101, 103 }
    2
*/
const seenIds = new Set([101, 102, 103]);
console.log(seenIds.delete(102));
console.log(seenIds.delete(999));
console.log(seenIds);
console.log(seenIds.size);

// 4. Parte de const emails = ["ana@correo.com", "luis@correo.com", "ana@correo.com", "marta@correo.com", "luis@correo.com"].
//    Crea un array uniqueEmails sin repetidos, usando un Set. Imprime cuántos emails había, uniqueEmails
//    y cuántos hay ahora (la longitud de uniqueEmails).
/*
    Resultado esperado:
    5
    [ 'ana@correo.com', 'luis@correo.com', 'marta@correo.com' ]
    3
*/
const emails = [
  "ana@correo.com",
  "luis@correo.com",
  "ana@correo.com",
  "marta@correo.com",
  "luis@correo.com",
];
const uniqueEmails = Array.from(new Set(emails)); // uniqueEmails es un array sin repetidos no un set
console.log(emails.length);
console.log(uniqueEmails);
console.log(uniqueEmails.length);

// 5. Crea un Set vacío selectedTags. El usuario ha escrito estas tres etiquetas: "JavaScript", "javascript" y "CSS".
//    Añádelas con add, pero pasándolas antes a minúsculas para que "JavaScript" y "javascript" cuenten como una sola.
//    Imprime el Set y su tamaño.
/*
    Resultado esperado:
    Set(2) { 'javascript', 'css' }
    2
*/
const selectedTags = new Set();
const tagsInput = ["JavaScript", "javascript", "CSS"];
selectedTags.add(tagsInput[0].toLowerCase());
selectedTags.add(tagsInput[1].toLowerCase());
selectedTags.add(tagsInput[2].toLowerCase());

console.log(selectedTags);
console.log(selectedTags.size);
