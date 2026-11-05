# Diario de desarrollo

Anotaciones cortas de detalles de JavaScript que he ido aprendiendo, con enlace a la documentación oficial (MDN) para profundizar.
Las entradas nuevas se añaden arriba del todo.

## Índice rápido

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

Docs: [String.prototype.includes()][string-includes]

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
