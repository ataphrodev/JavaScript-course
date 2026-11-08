// Recordatorio: for...of recorre los VALORES de un Array, un Set, un Map o un texto, sin usar índice.
// Con un Map cada vuelta entrega una pareja [clave, valor]: se desestructura así  for (const [clave, valor] of map)
// En todos los ejercicios: muestra exactamente las líneas que indica la tabla (cada console.log es una línea).

// Ejercicio 1: el nombre más largo (Array)

/*
Datos:
- names es una lista de nombres (siempre tiene al menos uno).
- longestName guarda el nombre más largo encontrado hasta ahora. Empieza como texto vacío ("").

Reglas:
1. Recorre names con for...of (sin usar índices).
2. En cada vuelta: si la longitud del nombre actual es MAYOR que la de longestName, guarda ese nombre en longestName.
   Si hay empate de longitud, longestName no cambia (gana el que apareció primero).
3. Cuando el bucle termina, muestra una única línea: Nombre más largo: X

| names                          | Salida                      |
| ------------------------------ | --------------------------- |
| ["Ana", "Luis", "Marta"]       | Nombre más largo: Marta     |
| ["Pedro", "Lucía", "Ana"]      | Nombre más largo: Pedro     |
| ["Sofía"]                      | Nombre más largo: Sofía     |
| ["Jo", "Alejandro", "Mar"]     | Nombre más largo: Alejandro |

(En el 2.º caso "Pedro" y "Lucía" miden lo mismo: se queda "Pedro" por ir primero.)
*/

const names = ["Ana", "Luis", "Marta"];
let longestName = "";

for (const name of names) {
  if (name.length > longestName.length) {
    longestName = name;
  }
}
console.log(`Nombre más largo: ${longestName}`);

// Ejercicio 2: etiquetas con continue y break (Set)

/*
Datos:
- tags es un Set de etiquetas (los Set no admiten repetidas).
- skipTag es la etiqueta que hay que saltarse. Vale "css".
- stopTag es la etiqueta que detiene el recorrido. Vale "node".
- shown cuenta las etiquetas mostradas. Empieza en 0.

Reglas:
1. Recorre tags con for...of.
2. En cada vuelta, por este orden:
   a) Si la etiqueta es igual a stopTag: termina el bucle con break (esa etiqueta NO se muestra).
   b) Si la etiqueta es igual a skipTag: pasa a la siguiente con continue (esa etiqueta NO se muestra).
   c) En cualquier otro caso: muestra la etiqueta en MAYÚSCULAS y suma 1 a shown.
3. Cuando el bucle termina, muestra una última línea: Etiquetas mostradas: N

| tags                                    | Líneas que se muestran (una por línea)           |
| --------------------------------------- | ------------------------------------------------ |
| ["js", "css", "html", "node", "ts"]     | JS / HTML / Etiquetas mostradas: 2               |
| ["js", "ts"]                            | JS / TS / Etiquetas mostradas: 2                 |
| ["css", "js"]                           | JS / Etiquetas mostradas: 1                      |
| ["node", "js"]                          | Etiquetas mostradas: 0                           |

(Para crear el Set de cada caso: new Set(["js", "ts"]). "ts" del 1.er caso no se muestra porque el break
llegó antes: el bucle ya había terminado.)
*/

const tags = new Set(["js", "css", "html", "node", "ts"]);
const skipTag = "css";
const stopTag = "node";
let shown = 0;

for (const tag of tags) {
  if (tag === stopTag) {
    break;
  } else if (tag === skipTag) {
    continue;
  } else {
    console.log(tag.toUpperCase());
    shown++;
  }
}
console.log(`Etiquetas mostradas: ${shown}`);

// Ejercicio 3: inventario de la tienda (Map)

/*
Datos:
- stock es un Map donde la clave es el producto y el valor son las unidades disponibles.
- totalUnits suma todas las unidades. Empieza en 0.

Reglas:
1. Recorre stock con for...of, desestructurando cada pareja: for (const [product, units] of stock)
2. En cada vuelta, por este orden:
   a) Si units es 0: muestra  X: agotado   (X es el producto)
   b) Si no: muestra  X: N   (X es el producto, N son las unidades)
   c) Suma units a totalUnits (también cuando es 0).
3. Cuando el bucle termina, muestra una última línea: Total de unidades: N

| stock                                                    | Líneas que se muestran (una por línea)                              |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| [["manzanas", 10], ["peras", 0], ["uvas", 3]]            | manzanas: 10 / peras: agotado / uvas: 3 / Total de unidades: 13     |
| [["kiwis", 0]]                                           | kiwis: agotado / Total de unidades: 0                               |
| [["pan", 1], ["leche", 2]]                               | pan: 1 / leche: 2 / Total de unidades: 3                            |
| []                                                       | Total de unidades: 0                                                |

(Para crear el Map de cada caso: new Map([["kiwis", 0]]). Para el vacío: new Map().)
*/

const stock = new Map([
  ["manzanas", 10],
  ["peras", 0],
  ["uvas", 3],
]);
let totalUnits = 0;

for (const [product, units] of stock) {
  if (units === 0) {
    console.log(`${product}: agotado`);
  } else {
    console.log(`${product}: ${units}`);
  }
  totalUnits += units;
}
console.log(`Total de unidades: ${totalUnits}`);
