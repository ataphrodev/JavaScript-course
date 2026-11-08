// Recordatorio: do...while ejecuta el cuerpo SIEMPRE una vez y comprueba la condición DESPUÉS.
// Ojo: la línea del while termina con punto y coma:  do { ... } while (condición);
// En todos los ejercicios: muestra exactamente las líneas que indica la tabla (cada console.log es una línea).

// Ejercicio 1: cuenta atrás

/*
Datos: counter es el número desde el que empieza la cuenta atrás.

Reglas:
1. En cada vuelta del bucle, por este orden:
   a) Muestra el valor actual de counter (solo el número).
   b) Réstale 1 a counter.
2. El bucle se repite mientras counter sea mayor que 0.
3. Cuando el bucle termina, muestra una última línea: ¡Despegue!
4. El bucle siempre se ejecuta al menos una vez, aunque counter empiece en 0 o en un número negativo.

| counter | Líneas que se muestran (una por línea) |
| ------- | -------------------------------------- |
| 3       | 3 / 2 / 1 / ¡Despegue!                 |
| 1       | 1 / ¡Despegue!                         |
| 0       | 0 / ¡Despegue!                         |
| -2      | -2 / ¡Despegue!                        |
*/

let counter = 3;
do {
  console.log(counter);
  counter--;
} while (counter > 0);
console.log("¡Despegue!");

// Ejercicio 2: tirar el dado hasta sacar un 6

/*
Datos:
- rolls es la lista de resultados que van saliendo, en orden (siempre contiene al menos un 6).
- throwsCount cuenta las tiradas hechas. Empieza en 0.
- roll guarda el resultado de la tirada actual.

Reglas:
1. En cada vuelta del bucle, por este orden:
   a) Guarda en roll el valor de rolls en la posición throwsCount.
   b) Suma 1 a throwsCount.
   c) Muestra: Tirada N: X   (N es throwsCount ya sumado, X es roll)
2. El bucle se repite mientras roll sea distinto de 6.
3. Cuando el bucle termina, muestra una última línea: Salió un 6 en la tirada N
4. El bucle siempre se ejecuta al menos una vez, aunque el primer resultado ya sea un 6.

| rolls         | Líneas que se muestran (una por línea)                                          |
| ------------- | ------------------------------------------------------------------------------- |
| [3, 5, 6, 2]  | Tirada 1: 3 / Tirada 2: 5 / Tirada 3: 6 / Salió un 6 en la tirada 3             |
| [6, 1]        | Tirada 1: 6 / Salió un 6 en la tirada 1                                         |
| [1, 2, 3, 6]  | Tirada 1: 1 / Tirada 2: 2 / Tirada 3: 3 / Tirada 4: 6 / Salió un 6 en la tirada 4 |
*/

const rolls = [3, 5, 6, 2];
let throwsCount = 0;
let roll;
do {
  roll = rolls[throwsCount];
  throwsCount++;
  console.log(`Tirada ${throwsCount}: ${roll}`);
} while (roll !== 6);
console.log(`Salió un ${roll} en la tirada ${throwsCount}`);

// Ejercicio 3: adivinar la contraseña

/*
Datos:
- correctPassword es la contraseña correcta.
- attempts es la lista de contraseñas que se van probando, en orden (siempre tiene al menos un elemento).
- tries cuenta los intentos hechos. Empieza en 0.
- guess guarda la contraseña probada en el intento actual.

Reglas:
1. En cada vuelta del bucle, por este orden:
   a) Guarda en guess el valor de attempts en la posición tries.
   b) Suma 1 a tries.
   c) Muestra: Intento N: X   (N es tries ya sumado, X es guess)
2. El bucle se repite mientras se cumplan las dos cosas a la vez:
   - guess es distinta de correctPassword
   - tries es menor que attempts.length (todavía quedan intentos por probar)
3. Cuando el bucle termina, muestra UNA última línea según el caso:
   - Si guess es igual a correctPassword: Acceso concedido en el intento N
   - Si no: Acceso bloqueado. Intentos realizados: N
   (N es el valor final de tries en los dos casos)

| attempts                     | Líneas que se muestran (una por línea), con correctPassword = "secreto"          |
| ---------------------------- | -------------------------------------------------------------------------------- |
| ["1234", "abcd", "secreto"]  | Intento 1: 1234 / Intento 2: abcd / Intento 3: secreto / Acceso concedido en el intento 3 |
| ["secreto", "1234"]          | Intento 1: secreto / Acceso concedido en el intento 1 (el 2.º ni se prueba)      |
| ["1234", "abcd"]             | Intento 1: 1234 / Intento 2: abcd / Acceso bloqueado. Intentos realizados: 2     |
| ["1234"]                     | Intento 1: 1234 / Acceso bloqueado. Intentos realizados: 1                       |
*/

const correctPassword = "secreto";
const attempts = ["1234", "abcd", "secreto"];
let tries = 0;
let guess;

do {
  guess = attempts[tries];
  tries++;
  console.log(`Intento ${tries}: ${guess}`);
} while (guess !== correctPassword && tries < attempts.length);
const msg =
  guess === correctPassword
    ? `Acceso concedido en el intento ${tries}`
    : `Acceso bloqueado. Intentos realizados: ${tries}`;
console.log(msg);
