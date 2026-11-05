// Ejercicios Map

/*
Normas para todos los ejercicios:
- Declara los Map con const y con new Map().
- Usa nombres descriptivos (prices, stock...), no myMap.
- Usa solo lo visto hasta ahora: set, get, has, delete, clear, keys, values, entries, size, Array.from
  (y if con llaves, template literals, etc.). Sin bucles ni funciones.
- Cada ejercicio es independiente y usa nombres de variable distintos, para no repetir un const.
*/

// 1. Crea un Map user con estas parejas: "name" -> "Ana" y "age" -> 28.
//    Añade con set la pareja "email" -> "ana@correo.com".
//    Imprime por consola el Map, cuántas parejas tiene y el nombre (con get).
/*
    Resultado esperado:
    Map(3) { 'name' => 'Ana', 'age' => 28, 'email' => 'ana@correo.com' }
    3
    Ana
*/
const user = new Map([
  ["name", "Ana"],
  ["age", 28],
]);

user.set("email", "ana@correo.com");

console.log(user);
console.log(user.size);
console.log(user.get("name"));

// 2. Parte de const prices = new Map([["camiseta", 15], ["gorra", 10]]).
//    Cambia el precio de la gorra a 12 y añade la bufanda a 20, los dos con set.
//    Imprime el precio de la gorra, el de la bufanda y el de "guantes" (que no existe).
/*
    Resultado esperado:
    12
    20
    undefined
*/
const prices = new Map([
  ["camiseta", 15],
  ["gorra", 10],
]);

prices.set("gorra", 12);
prices.set("bufanda", 20);

console.log(prices.get("gorra"));
console.log(prices.get("bufanda"));
console.log(prices.get("guantes"));

// 3. Parte de const stock = new Map([["camiseta", 3], ["gorra", 0]]) y de const product = "camiseta".
//    Con if / else if / else imprime:
//      - "No existe" si el producto no está en el Map
//      - "Agotado" si existe pero su stock es 0
//      - "Quedan N unidades" (con el número real) en cualquier otro caso
//    Para saber si existe usa has, no get.
/*
    Resultado esperado:
    Quedan 3 unidades

    Comprueba también cambiando product:
    "gorra"   -> Agotado
    "bufanda" -> No existe
*/
const stock = new Map([
  ["camiseta", 3],
  ["gorra", 0],
]);
const product = "camiseta";

if (!stock.has(product)) {
  console.log("No existe");
} else if (stock.get(product) === 0) {
  console.log("Agotado");
} else {
  console.log(`Quedan ${stock.get(product)} unidades`);
}

// 4. Parte de const cart = new Map([["pan", 2], ["leche", 1], ["huevos", 12]]) (producto -> cantidad).
//    Elimina "leche" e imprime lo que devuelve delete. Después intenta eliminar "arroz" e imprime también lo que devuelve.
//    Imprime el Map y su tamaño. Por último vacía el Map con clear e imprime otra vez su tamaño.
/*
    Resultado esperado:
    true
    false
    Map(2) { 'pan' => 2, 'huevos' => 12 }
    2
    0
*/
const cart = new Map([
  ["pan", 2],
  ["leche", 1],
  ["huevos", 12],
]);

console.log(cart.delete("leche"));
console.log(cart.delete("arroz"));
console.log(cart);
console.log(cart.size);
cart.clear();
console.log(cart.size);

// 5. Parte de const scores = new Map([["Ana", 8], ["Luis", 6], ["Marta", 9]]) (alumno -> nota).
//    Crea un array names con las claves y otro points con los valores, usando Array.from.
//    Imprime names, points y la primera pareja [alumno, nota] (saca las entries a un array para poder usar el índice).
/*
    Resultado esperado:
    [ 'Ana', 'Luis', 'Marta' ]
    [ 8, 6, 9 ]
    [ 'Ana', 8 ]
*/

const scores = new Map([
  ["Ana", 8],
  ["Luis", 6],
  ["Marta", 9],
]);
const names = Array.from(scores.keys());
const points = Array.from(scores.values());
const firstEntry = Array.from(scores.entries())[0];

console.log(names);
console.log(points);
console.log(firstEntry);
