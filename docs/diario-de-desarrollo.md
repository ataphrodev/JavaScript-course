# Diario de desarrollo

Anotaciones cortas de detalles de JavaScript que he ido aprendiendo, con enlace a la documentación oficial (MDN) para profundizar.
Las entradas nuevas se añaden arriba del todo.

## Índice rápido

- [`===` frente a `==`](#-frente-a-)
- [`typeof` va delante de la variable](#typeof-va-delante-de-la-variable)
- [`&&` se evalúa antes que `||`](#-se-evalúa-antes-que-)
- [`slice(inicio, fin)`: el fin no se incluye](#sliceinicio-fin-el-fin-no-se-incluye)
- [Detectar si un texto tiene mayúsculas](#detectar-si-un-texto-tiene-mayúsculas)
- [`switch` y fall-through](#switch-y-fall-through)
- [Ternario: para asignar, no para ejecutar](#ternario-para-asignar-no-para-ejecutar)
- [Una variable, un solo tipo](#una-variable-un-solo-tipo)

---

## `===` frente a `==`
*2026-11-04*

- `===` compara valor **y** tipo, sin convertir nada. `==` convierte los tipos (coerción) antes de comparar.
- Regla: usar siempre `===` y `!==`. Es lo que exigen los linters y TypeScript.
- Excepción opcional: `x == null` es `true` para `null` y `undefined`. Mientras aprendo, mejor `x === null || x === undefined`.

```js
5 === "5"   // false
5 == "5"    // true (convierte "5" a 5)
0 == false  // true
```

Docs: [Igualdad estricta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) · [Comparaciones de igualdad](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## `typeof` va delante de la variable
*2026-11-04*

- Es un **operador**, no un método: `typeof x`, no `x.typeof`.
- Devuelve un string con el tipo, así que se compara con `===` contra otro string.
- `x.typeof` no da error: busca una propiedad que no existe y devuelve `undefined`.

```js
typeof discount === "number"    // correcto
discount.typeof === "number"    // siempre false
```

Docs: [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## `&&` se evalúa antes que `||`
*2026-11-04*

- Igual que la multiplicación va antes que la suma. Si mezclas los dos, usa paréntesis.
- Para "contiene `!`, `#` o `$`" agrupa los `||` en un solo paréntesis.

```js
// Mal: el $ se salta la comprobación de longitud
largo && (a || b) || c
// Bien
largo && (a || b || c)
```

Docs: [Precedencia de operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

## `slice(inicio, fin)`: el fin no se incluye
*2026-11-04*

- Cuenta desde 0. El `fin` es opcional y **no entra** en el resultado.
- Con números negativos cuenta desde el final.
- No modifica el original: devuelve un string nuevo.

```js
"Zapatillas".slice(0, 3)   // "Zap"
"Zapatillas".slice(3)      // "atillas"
"Zapatillas".slice(-3)     // "las"
```

Docs: [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Detectar si un texto tiene mayúsculas
*2026-11-04*

- Un texto con alguna mayúscula **no es igual** a sí mismo pasado a minúsculas.
- Para "contiene" se usa `includes()`; para "NO contiene", se le pone `!` delante. Compara ambos lados en minúsculas.

```js
password !== password.toLowerCase()                    // tiene mayúscula
!password.toLowerCase().includes(name.toLowerCase())   // no contiene el nombre
```

Docs: [toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) · [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

## `switch` y fall-through
*2026-11-04*

- Si un `case` no tiene `break`, la ejecución **cae** al siguiente `case`. Sirve para que varios valores compartan el mismo código: se apilan los `case`.
- **No** se puede escribir `case "A" || "B":`. La expresión vale `"A"` (el primer valor verdadero), así que solo coincide con `"A"`.

```js
switch (month) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("Invierno")
    break
}
```

Docs: [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) · [Operador OR lógico](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

## Ternario: para asignar, no para ejecutar
*2026-11-04*

- El ternario es una **expresión** que devuelve un valor. Úsalo para asignar: `const x = cond ? a : b`.
- Para ejecutar acciones (como un `console.log`) sin valor de vuelta, usa `if`.

```js
const ageGroup = age >= 18 ? "Adulto" : "Menor"   // bien
age >= 18 ? console.log("A") : " "                // mal: rama inútil
```

Docs: [Operador condicional (ternario)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## Una variable, un solo tipo
*2026-11-04*

- Si una variable empieza siendo número no la conviertas en string más tarde. Crea otra con nombre propio.
- Usa `const` por defecto y `let` solo si el valor va a cambiar.

```js
const personAge = 10
const ageGroup = personAge >= 18 ? "Adulto" : "Menor"
```

Docs: [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
