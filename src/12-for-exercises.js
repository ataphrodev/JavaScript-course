/*
Aquí tienes tres ejercicios con `for`. Solo usan lo que ya has visto: variables, operadores, condicionales, strings, arrays y 
`break`/`continue`. Cada uno tiene los datos, las reglas y casos de prueba, y sin solución.
## Ejercicio 1: tabla de multiplicar
```js
const number = 3;
```
**Reglas**
1. Muestra con `console.log` la tabla de multiplicar de `number`, del 1 al 10.
2. Cada línea tiene este formato: `3 x 1 = 3`.
| `number` | Primera línea | Última línea |
| -------- | ------------- | ------------ |
| `3`      | `3 x 1 = 3`   | `3 x 10 = 30` |
| `7`      | `7 x 1 = 7`   | `7 x 10 = 70` |
| `0`      | `0 x 1 = 0`   | `0 x 10 = 0`  |

## Ejercicio 2: suma de positivos

```js
const numbers = [5, -2, 3, 0, 10];
```
**Reglas**
1. Recorre el array con un `for` clásico (con índice) y suma los números.
2. Si el número es **negativo**, sáltalo con `continue`.
3. Si el número es **0**, termina el bucle con `break`. Los siguientes no se suman.
4. Al final muestra: `La suma es: X`.

| `numbers`          | Salida              |
| ------------------ | ------------------- |
| `[5, -2, 3, 0, 10]` | `La suma es: 8`    |
| `[4, -1, -1, 6]`    | `La suma es: 10`   |
| `[0, 5]`            | `La suma es: 0`    |
| `[]`                | `La suma es: 0`    |

## Ejercicio 3: contar vocales

```js
const text = "Hola Mundo";
```
**Reglas**
1. Recorre `text` letra a letra con un `for` usando `text.length` y el índice (`text[i]`).
2. Cuenta cuántas letras son vocales (`a`, `e`, `i`, `o`, `u`), sean mayúsculas o minúsculas.
3. Al final muestra: `Vocales: X`.
4. Para decidir si una letra es vocal te sirven `toLowerCase()` e `includes()`. Ojo con la trampa de [`includes("")`](docs/diario-de-desarrollo.md#includes-siempre-es-true): una letra siempre es un solo carácter, pero piensa qué pasaría con el texto vacío.
| `text`                 | Salida          |
| ---------------------- | --------------- |
| `"Hola Mundo"`         | `Vocales: 4`    |
| `"Javascript es genial"` | `Vocales: 7`  |
| `"AEIOU"`              | `Vocales: 5`    |
| `"xyz"`                | `Vocales: 0`    |
| `""`                   | `Vocales: 0`    |
Pruébalos cambiando los datos de entrada. En los casos con acentos (`á`, `ó`...) el resultado no está definido en estas reglas, así que no 
los uses todavía.
*/
/* ## Ejercicio 1: tabla de multiplicar
```js
const number = 3;
```
**Reglas**
1. Muestra con `console.log` la tabla de multiplicar de `number`, del 1 al 10.
2. Cada línea tiene este formato: `3 x 1 = 3`.
| `number` | Primera línea | Última línea |
| -------- | ------------- | ------------ |
| `3`      | `3 x 1 = 3`   | `3 x 10 = 30` |
| `7`      | `7 x 1 = 7`   | `7 x 10 = 70` |
| `0`      | `0 x 1 = 0`   | `0 x 10 = 0`  |
*/

const number = 3;
let result = 0;
for (let index = 1; index <= 10; index++) {
  result = number * index;
  console.log(`${number} x ${index} = ${result}`);
}

/* ## Ejercicio 2: suma de positivos

```js
const numbers = [5, -2, 3, 0, 10];
```
**Reglas**
1. Recorre el array con un `for` clásico (con índice) y suma los números.
2. Si el número es **negativo**, sáltalo con `continue`.
3. Si el número es **0**, termina el bucle con `break`. Los siguientes no se suman.
4. Al final muestra: `La suma es: X`.

| `numbers`          | Salida              |
| ------------------ | ------------------- |
| `[5, -2, 3, 0, 10]` | `La suma es: 8`    |
| `[4, -1, -1, 6]`    | `La suma es: 10`   |
| `[0, 5]`            | `La suma es: 0`    |
| `[]`                | `La suma es: 0`    | */

const numbers = [5, -2, 3, 0, 10];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < 0) {
    continue;
  } else if (numbers[index] === 0) {
    break;
  }
  sum += numbers[index];
}
console.log(`La suma es: ${sum}`);

/* ## Ejercicio 3: contar vocales

```js
const text = "Hola Mundo";
```
**Reglas**
1. Recorre `text` letra a letra con un `for` usando `text.length` y el índice (`text[i]`).
2. Cuenta cuántas letras son vocales (`a`, `e`, `i`, `o`, `u`), sean mayúsculas o minúsculas.
3. Al final muestra: `Vocales: X`.
4. Para decidir si una letra es vocal te sirven `toLowerCase()` e `includes()`. Ojo con la trampa de [`includes("")`](docs/diario-de-desarrollo.md#includes-siempre-es-true): una letra siempre es un solo carácter, pero piensa qué pasaría con el texto vacío.
| `text`                 | Salida          |
| ---------------------- | --------------- |
| `"Hola Mundo"`         | `Vocales: 4`    |
| `"Javascript es genial"` | `Vocales: 7`  |
| `"AEIOU"`              | `Vocales: 5`    |
| `"xyz"`                | `Vocales: 0`    |
| `""`                   | `Vocales: 0`    | */

const text = "Hola Mundo";
const vowelsArray = ["a", "e", "i", "o", "u"];
let vowels = 0;

for (let index = 0; index <= text.length - 1; index++) {
  if (vowelsArray.includes(text[index].toLowerCase())) {
    vowels++;
  }
}

console.log(`Vocales: ${vowels}`);
