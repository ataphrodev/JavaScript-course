# Diario de desarrollo

Anotaciones cortas de detalles de JavaScript que he ido aprendiendo, con enlace a la documentación oficial (MDN) para profundizar.
Las entradas nuevas se añaden arriba del todo.

## Índice rápido

- [Bucles: `for`, `while`, `do...while` y `for...of`](#bucles-for-while-dowhile-y-forof)
- [Indexar un resultado y desestructurar un array](#indexar-un-resultado-y-desestructurar-un-array)
- [Siempre llaves en `if`](#siempre-llaves-en-if)
- [`splice`: eliminar, reemplazar o insertar](#splice-eliminar-reemplazar-o-insertar)
- [Estructuras de datos: Array, Set y Map](#estructuras-de-datos-array-set-y-map)
- [`switch` o `if`: cuándo usar cada uno](#switch-o-if-cuándo-usar-cada-uno)
- [`includes("")` siempre es `true`](#includes-siempre-es-true)
- [`===` frente a `==`](#-frente-a-)
- [`typeof` va delante de la variable](#typeof-va-delante-de-la-variable)
- [`&&` se evalúa antes que `||`](#-se-evalúa-antes-que-)
- [`slice(inicio, fin)`: el fin no se incluye](#sliceinicio-fin-el-fin-no-se-incluye)
- [Detectar si un texto tiene mayúsculas](#detectar-si-un-texto-tiene-mayúsculas)
- [`switch` y fall-through](#switch-y-fall-through)
- [Ternario: para asignar, no para ejecutar](#ternario-para-asignar-no-para-ejecutar)
- [Una variable, un solo tipo](#una-variable-un-solo-tipo)

---

## Bucles: `for`, `while`, `do...while` y `for...of`

_06-11-2026_

Un bucle repite un bloque de código mientras se cumpla una condición. Cada vuelta se llama **iteración**.

| Bucle                               | Cuándo se comprueba la condición | Úsalo cuando...                                          |
| ----------------------------------- | -------------------------------- | -------------------------------------------------------- |
| [`for`][statements-for]             | antes de cada vuelta             | sabes cuántas veces repetir (un contador)                |
| [`while`][statements-while]         | antes de cada vuelta             | no sabes cuántas veces; repites mientras algo sea cierto |
| [`do...while`][statements-do-while] | **después** de cada vuelta       | el cuerpo debe ejecutarse **al menos una vez**           |
| [`for...of`][statements-for-of]     | (no hay condición)               | recorres los valores de un Array, String, Set o Map      |

```js
// for: comienzo; condición; paso
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// while: el paso lo escribes tú dentro del cuerpo
let attempts = 0;
while (attempts < 3) {
  attempts++;
}

// do...while: se ejecuta una vez aunque la condición sea falsa
let n = 10;
do {
  console.log("Una vez");
} while (n < 5); // termina con ;

// for...of: valores directamente, sin índice
const products = ["camiseta", "gorra"];
for (const product of products) {
  console.log(product);
}
```

Cómo funciona `for (comienzo; condición; paso)`:

- `comienzo` se ejecuta **una sola vez**, al empezar. `condición` se evalúa antes de cada vuelta. `paso` se ejecuta después del cuerpo.
- Una variable declarada con `let` en `comienzo` solo existe dentro del bucle: usarla después da error.
- Cualquier parte puede omitirse, pero los dos `;` son obligatorios. `for (;;)` es un bucle infinito.

### `break` y `continue`

- [`break`][statements-break] sale del bucle por completo.
- [`continue`][statements-continue] salta el resto de la iteración actual y pasa a la siguiente.
- Son **sentencias**, no expresiones: no se pueden poner en un ternario (`cond ? x : continue` es un error de sintaxis). Usa `if`.
- Con bucles anidados afectan solo al bucle más interno. Para salir del externo existen las [etiquetas][statements-label] (`outer: for (...)` y `break outer`), pero conviene evitarlas: dificultan la lectura.

```js
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue; // se salta el 1
  }
  if (i === 4) {
    break; // sale del bucle al llegar a 4
  }
  console.log(i); // 0, 2, 3
}
```

### `for...of` con Set y Map

- Recorre cualquier **iterable**: Array, String, Set, Map. Un objeto normal `{}` **no** lo es y lanza `TypeError`.
- Un Map entrega parejas `[clave, valor]`: se pueden desestructurar en la cabecera del bucle.
- Con `const` en la cabecera cada vuelta crea una variable nueva, así que funciona sin problema siempre que no la reasignes en el cuerpo.

```js
const scores = new Map([
  ["Ana", 8],
  ["Luis", 6],
]);
for (const [student, grade] of scores) {
  console.log(student, grade); // Ana 8, Luis 6
}
```

### `for...in`: recorrer las claves de un objeto

- [`for...in`][statements-for-in] recorre las **claves** de un objeto, siempre como **texto** (`"name"`, `"0"`...), no sus valores.
- Para leer el valor se usa la clave entre corchetes: `user[key]`.
- Está pensado para **objetos** (`{ clave: valor }`). Incluye también las claves heredadas, no solo las propias.
- Se declara la clave con `const`, igual que en `for...of`.
- `for...of` recorre **valores** de un iterable; `for...in` recorre **claves** de un objeto.

```js
const user = { name: "Ana", age: 25 };

for (const key in user) {
  console.log(key, user[key]); // name Ana, age 25
}
```

Con arrays no lo uses: devuelve los índices como texto (`"0"`, `"1"`...), no los valores, y puede colarse alguna propiedad suelta.

```js
const colors = ["rojo", "verde"];

for (const index in colors) {
  console.log(index); // "0", "1" (no "rojo")
}
for (const color of colors) {
  console.log(color); // "rojo", "verde"
}
```

Con un texto también recorre los índices: `for (const i in "hola")` da `"0"`, `"1"`, `"2"`, `"3"`.

Para recorrer un objeto es más seguro [`Object.keys()`][object-keys] o [`Object.entries()`][object-entries] con `for...of`, porque solo dan las claves propias:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

### Buenas prácticas

- Prefiere `for...of` cuando no necesites el índice: es más corto y no tiene errores de contador. Usa `for` clásico cuando necesites el índice o un paso distinto de 1.
- Declara siempre con `const` (o `let` si hay que reasignar). Nunca `var`.
- Siempre llaves `{ }` en el cuerpo, aunque sea una sola línea (ver [Siempre llaves en `if`](#siempre-llaves-en-if)).
- Evita el **bucle infinito**: en `while` y `do...while`, asegúrate de que algo dentro del cuerpo cambia la condición (olvidar `attempts++` lo deja colgado). Para parar uno en el terminal: `Ctrl + C`.
- Cuidado con los límites: `i < length` recorre todas las posiciones; `i <= length` se pasa una y da `undefined`.
- Pon el nombre de contador `i` solo en bucles cortos; si no, uno descriptivo (`row`, `product`). Para `for...of`, singular del plural: `for (const product of products)`.
- No modifiques el array (añadir/quitar con `push` o `splice`) mientras lo recorres: las posiciones se mueven y te saltas elementos.
- Usa `continue` para evitar anidar un `if` enorme (sal pronto de la iteración) y `break` en cuanto ya tengas lo que buscabas. No abuses: si hay muchos, replantea la condición del bucle.
- Un `while (true)` con `break` es válido, pero solo si la salida es clara; si puedes ponerla en la condición, hazlo.

Docs: [for][statements-for] · [while][statements-while] · [do...while][statements-do-while] · [for...of][statements-for-of] · [break][statements-break] · [continue][statements-continue] · [for...in][statements-for-in] · [Bucles en javascript.info][javascript-info-loops] · [Guía de estilo de Google (bucles)][google-style-guide]

## Indexar un resultado y desestructurar un array

_05-11-2026_

- Si una expresión devuelve un array, puedes indexarlo al momento con `[posición]`, sin guardarlo antes en una variable.
- Se lee de dentro hacia fuera: primero lo que está entre paréntesis y, al final, el `[0]`.
- **Desestructurar** (`const [a, b] = array`) saca los elementos de un array en variables sueltas, según su posición.
- Si solo necesitas la pareja entera, no la separes: guarda el array tal cual.

```js
const scores = new Map([
  ["Ana", 8],
  ["Luis", 6],
]);

const firstEntry = Array.from(scores.entries())[0]; // ["Ana", 8]
const [student, grade] = firstEntry; // student -> "Ana", grade -> 8
```

Docs: [Asignación por desestructuración][operators-destructuring-assignment]

## Siempre llaves en `if`

_05-11-2026_

- Aunque el cuerpo sea una sola línea, escribe siempre las llaves `{ }` en `if`, `else if` y `else`.
- Sin llaves, solo la **primera** instrucción pertenece al `if`. Si añades otra línea después, se ejecuta siempre.
- Prettier no añade ni quita llaves: respeta las que escribes. Obligar a ponerlas es trabajo de un linter (ESLint, regla `curly`).
- Ojo con el autocompletado del editor: puede sugerir la versión sin llaves. Revisa antes de aceptar.

```js
// Mal: la segunda línea no es del if
if (isLogged) console.log("Hola");
console.log("Bienvenido"); // se ejecuta siempre

// Bien
if (isLogged) {
  console.log("Hola");
  console.log("Bienvenido");
}
```

Docs: [if...else][statements-if-else]

## `splice`: eliminar, reemplazar o insertar

_05-11-2026_

- `splice(inicio, cuántosEliminar, ...nuevos)` modifica el array original y devuelve los elementos eliminados.
- Con `cuántosEliminar` en `0` no se quita nada: solo se inserta. Los elementos siguientes se desplazan a la derecha.
- `array[i] = x` no inserta: **sustituye** lo que hubiera en esa posición.
- Después de cada cambio las posiciones se mueven. Cuenta desde el array ya modificado.

```js
const cart = ["pan", "leche", "huevos", "arroz"];
cart.splice(2, 2); // elimina: ["huevos", "arroz"]
cart.splice(1, 1, "leche sin lactosa"); // reemplaza "leche"
cart.splice(2, 0, "fruta"); // inserta en la posición 2, sin eliminar
```

Docs: [Array.prototype.splice()][array-splice]

## Estructuras de datos: Array, Set y Map

_05-11-2026_

Las tres guardan varios valores en una sola variable y mantienen el **orden de inserción**. Cambia cómo accedes a los datos y qué te permiten repetir.

| Característica | Array                     | Set                          | Map                                |
| -------------- | ------------------------- | ---------------------------- | ---------------------------------- |
| Qué guarda     | lista ordenada de valores | valores **únicos**           | pares **clave → valor**            |
| Duplicados     | sí                        | no                           | claves únicas (valores repetibles) |
| Acceso         | por posición: `lista[0]`  | con `has(valor)`, sin índice | por clave: `get(clave)`            |
| Tamaño         | `length`                  | `size`                       | `size`                             |

Para qué se usa cada una:

- **Array:** listas ordenadas, como los productos del carrito o los mensajes de un chat.
- **Set:** colecciones sin repetidos, como las etiquetas elegidas o los ids ya vistos.
- **Map:** buscar por clave, como una caché de usuarios por id o un diccionario.

Prácticas comunes a las tres:

- Declárala con `const`. Impide reasignar la variable, pero **sí puedes** añadir y quitar elementos.
- [`length`][array-length] y `size` son **propiedades**, sin paréntesis: `lista.length`, `set.size`.
- Usa nombres descriptivos y en plural: `products`, `selectedTags`, no `myArray`.

### Array

```js
const products = ["camiseta", "gorra"];
products.push("bufanda"); // ["camiseta", "gorra", "bufanda"]
products[products.length - 1]; // "bufanda" (el último)
```

**Modifican el array original:**

| Método                                      | Qué hace                                   | Devuelve               |
| ------------------------------------------- | ------------------------------------------ | ---------------------- |
| [`push(x)`][array-push]                     | añade al final                             | la nueva longitud      |
| [`pop()`][array-pop]                        | quita el último                            | el elemento quitado    |
| [`unshift(x)`][array-unshift]               | añade al principio                         | la nueva longitud      |
| [`shift()`][array-shift]                    | quita el primero                           | el elemento quitado    |
| [`splice(ini, n, ...nuevos)`][array-splice] | quita `n` desde `ini` y/o inserta `nuevos` | los elementos quitados |

**No lo modifican:** [`slice(ini, fin)`][array-slice] copia un fragmento (el `fin` no entra) y devuelve un array nuevo.

Buenas prácticas:

- Declara con un literal: `const products = []`.
- Añade elementos con `push`, así la lista queda siempre compacta, sin posiciones vacías.
- Un array, un solo tipo de dato (todo textos, todo números...).
- Para copiar una parte sin tocar el original usa `slice`. Usa `splice` solo cuando quieras modificar el array.
- Una posición que no existe devuelve `undefined`, no da error: `[1, 2][5]` → `undefined`.
- Para comprobar si algo es un array usa [`Array.isArray(x)`][array-isarray], porque `typeof []` devuelve `"object"`.

### Set

```js
const tags = new Set(["js", "css"]);
tags.add("js"); // ya existe: no se duplica
tags.has("css"); // true
tags.size; // 2
```

| Método / propiedad        | Qué hace                    | Devuelve                         |
| ------------------------- | --------------------------- | -------------------------------- |
| [`add(v)`][set-add]       | añade el valor si no existe | el propio Set                    |
| [`delete(v)`][set-delete] | quita el valor              | `true` si existía, `false` si no |
| [`has(v)`][set-has]       | ¿está el valor?             | `true` / `false`                 |
| [`size`][set-size]        | número de valores           | un número                        |

Buenas prácticas:

- Úsalo cuando importe que no haya repetidos o cuando preguntes muchas veces "¿está este valor?": `has` es más eficiente que buscar en un array grande.
- Normaliza antes de añadir: `"x@a.com"` y `"X@a.com"` son valores distintos. Usa `add(email.toLowerCase())`.
- No tiene índice: `set[0]` da `undefined`. Para recorrerlo u ordenarlo, conviértelo: [`Array.from(set)`][array-from].
- Para quitar duplicados de un array: `Array.from(new Set(lista))`.

### Map

```js
const user = new Map([
  ["name", "Brais"],
  ["age", 37],
]);
user.set("alias", "mouredev"); // añade
user.set("name", "Ana"); // la clave ya existe: sobrescribe el valor
user.get("name"); // "Ana"
```

| Método / propiedad             | Qué hace                              | Devuelve                             |
| ------------------------------ | ------------------------------------- | ------------------------------------ |
| [`set(clave, valor)`][map-set] | crea la pareja o sobrescribe su valor | el propio Map                        |
| [`get(clave)`][map-get]        | busca el valor                        | el valor, o `undefined` si no existe |
| [`has(clave)`][map-has]        | ¿existe la clave?                     | `true` / `false`                     |
| [`delete(clave)`][map-delete]  | quita la pareja                       | `true` si existía, `false` si no     |
| [`clear()`][map-clear]         | vacía el Map                          | `undefined`                          |
| [`keys()`][map-keys]           | todas las claves                      | un iterador, **no** un array         |
| [`values()`][map-values]       | todos los valores                     | un iterador, **no** un array         |
| [`entries()`][map-entries]     | todas las parejas `[clave, valor]`    | un iterador, **no** un array         |
| [`size`][map-size]             | número de parejas                     | un número                            |

Buenas prácticas:

- Para saber si una clave existe usa `has`, no `get`: `get` devuelve `undefined` tanto si la clave no existe como si guardaste `undefined` en ella.
- Usa siempre el mismo tipo de clave: `1` y `"1"` son claves distintas.
- `set` sobrescribe sin avisar. Si no quieres pisar un valor, comprueba antes con `has`.
- `keys()`, `values()` y `entries()` no son arrays. Para verlos o usar métodos de array: `Array.from(user.keys())`.
- Elige Map si el acceso es por clave; si solo necesitas una lista ordenada, un Array.

Docs: [Array][array] · [Set][set] · [Map][map] (cada método de las tablas enlaza a su página)

## `switch` o `if`: cuándo usar cada uno

_05-11-2026_

- `switch` encaja cuando comparas **una misma variable** con **muchos valores concretos** (códigos de estado, roles, meses).
- `if / else if / else` encaja cuando hay pocas situaciones o condiciones distintas (rangos, `&&`, `||`).
- Si dentro de un `switch` solo tienes un `case` y un `default`, probablemente sobra el `switch`.

```js
// Muchos valores de una variable: switch
switch (statusCode) {
  case 401:
    /* ... */ break;
}

// Tres situaciones distintas: if
if (!isFormValid) {
  /* ... */
} else if (statusCode === 200) {
  /* ... */
} else {
  /* ... */
}
```

Docs: [switch][statements-switch] · [if...else][statements-if-else]

## `includes("")` siempre es `true`

_05-11-2026_

- Todo texto contiene la cadena vacía, así que `texto.includes("")` es `true` siempre, incluso con `""`.
- No uses `includes` para saber si un texto está vacío o tiene contenido: compara con `=== ""` o `!== ""`.
- Tampoco uses `includes(" ")` como marca de "vacío": cualquier frase con espacios, como `"Email no válido"`, lo contiene.

```js
"abc".includes(""); // true
redirectUrl !== ""; // correcto: "no está vacío"
!redirectUrl.includes(""); // siempre false
```

**`contenedor.includes(elemento)`: el orden importa** (_06-11-2026_)

- `includes` se escribe sobre **donde buscas** y se le pasa **lo que buscas**. Invertirlo da resultados sin sentido o error.
- Para saber si una letra es vocal, el contenedor es el array de vocales: `vowels.includes(letter)`.
- `letter.includes(vowels)` pregunta si la letra contiene el array entero, y no es lo que quieres.
- `String.includes` y `Array.includes` buscan distinto: en un texto, una **subcadena**; en un array, un **elemento exacto**. `"hola".includes("ol")` es `true`, pero `["hola"].includes("ol")` es `false`.
- Normaliza antes de comparar: `"A"` no está en `["a", "e"]`. Usa `letter.toLowerCase()`.

```js
const vowels = ["a", "e", "i", "o", "u"];
const letter = "O";

vowels.includes(letter.toLowerCase()); // true: ¿el array tiene "o"?
letter.toLowerCase().includes(vowels); // mal: busca el array dentro de la letra
```

Docs: [String.prototype.includes()][string-includes] · [Array.prototype.includes()][array-includes]

## `===` frente a `==`

_04-11-2026_

- `===` compara valor **y** tipo, sin convertir nada. `==` convierte los tipos (coerción) antes de comparar.
- Regla: usar siempre `===` y `!==`. Es lo que exigen los linters y TypeScript.
- Excepción opcional: `x == null` es `true` para `null` y `undefined`. Mientras aprendo, mejor `x === null || x === undefined`.

```js
5 === "5"; // false
5 == "5"; // true (convierte "5" a 5)
0 == false; // true
```

Docs: [Igualdad estricta][operators-strict-equality] · [Comparaciones de igualdad][javascript-equality-comparisons-and-sameness]

## `typeof` va delante de la variable

_04-11-2026_

- Es un **operador**, no un método: `typeof x`, no `x.typeof`.
- Devuelve un string con el tipo, así que se compara con `===` contra otro string.
- `x.typeof` no da error: busca una propiedad que no existe y devuelve `undefined`.

```js
typeof discount === "number"; // correcto
discount.typeof === "number"; // siempre false
```

Docs: [typeof][operators-typeof]

## `&&` se evalúa antes que `||`

_04-11-2026_

- Igual que la multiplicación va antes que la suma. Si mezclas los dos, usa paréntesis.
- Para "contiene `!`, `#` o `$`" agrupa los `||` en un solo paréntesis.

```js
// Mal: el $ se salta la comprobación de longitud
(largo && (a || b)) || c;
// Bien
largo && (a || b || c);
```

Docs: [Precedencia de operadores][operators-operator-precedence]

## `slice(inicio, fin)`: el fin no se incluye

_04-11-2026_

- Cuenta desde 0. El `fin` es opcional y **no entra** en el resultado.
- Con números negativos cuenta desde el final.
- No modifica el original: devuelve un string nuevo.

```js
"Zapatillas".slice(0, 3); // "Zap"
"Zapatillas".slice(3); // "atillas"
"Zapatillas".slice(-3); // "las"
```

Docs: [String.prototype.slice()][string-slice]

## Detectar si un texto tiene mayúsculas

_04-11-2026_

- Un texto con alguna mayúscula **no es igual** a sí mismo pasado a minúsculas.
- Para "contiene" se usa `includes()`; para "NO contiene", se le pone `!` delante. Compara ambos lados en minúsculas.

```js
password !== password.toLowerCase(); // tiene mayúscula
!password.toLowerCase().includes(name.toLowerCase()); // no contiene el nombre
```

Docs: [toLowerCase()][string-tolowercase] · [includes()][string-includes]

## `switch` y fall-through

_04-11-2026_

- Si un `case` no tiene `break`, la ejecución **cae** al siguiente `case`. Sirve para que varios valores compartan el mismo código: se apilan los `case`.
- **No** se puede escribir `case "A" || "B":`. La expresión vale `"A"` (el primer valor verdadero), así que solo coincide con `"A"`.

```js
switch (month) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("Invierno");
    break;
}
```

Docs: [switch][statements-switch] · [Operador OR lógico][operators-logical-or]

## Ternario: para asignar, no para ejecutar

_04-11-2026_

- El ternario es una **expresión** que devuelve un valor. Úsalo para asignar: `const x = cond ? a : b`.
- Para ejecutar acciones (como un `console.log`) sin valor de vuelta, usa `if`.

```js
const ageGroup = age >= 18 ? "Adulto" : "Menor"; // bien
age >= 18 ? console.log("A") : " "; // mal: rama inútil
```

Docs: [Operador condicional (ternario)][operators-conditional-operator]

## Una variable, un solo tipo

_04-11-2026_

- Si una variable empieza siendo número no la conviertas en string más tarde. Crea otra con nombre propio.
- Usa `const` por defecto y `let` solo si el valor va a cambiar.

```js
const personAge = 10;
const ageGroup = personAge >= 18 ? "Adulto" : "Menor";
```

Docs: [const][statements-const]

<!-- Enlaces a la documentación (MDN) -->

[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[array-push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[array-pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[array-shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[array-unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[array-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[array-splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[array-length]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
[array-from]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
[array-isarray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
[array-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[set-add]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
[set-delete]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
[set-has]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
[set-size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[map-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
[map-get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
[map-has]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
[map-delete]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
[map-clear]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
[map-keys]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
[map-values]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
[map-entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
[map-size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
[statements-switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
[statements-if-else]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
[string-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[operators-strict-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
[javascript-equality-comparisons-and-sameness]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[operators-typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[operators-operator-precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
[string-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
[string-tolowercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[operators-logical-or]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
[operators-conditional-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
[statements-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[operators-destructuring-assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[statements-for]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
[statements-while]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
[statements-do-while]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
[statements-for-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
[statements-for-in]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[statements-break]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
[statements-continue]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
[statements-label]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
[javascript-info-loops]: https://es.javascript.info/while-for
[google-style-guide]: https://google.github.io/styleguide/jsguide.html
[object-keys]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
[object-entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
