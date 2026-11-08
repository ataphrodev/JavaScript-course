// Ejercicio 1: la población que se duplica

/*
Reglas:
1. Cada hora la población se duplica.
2. Repite con while mientras la población no supere limit.
3. En cada vuelta duplica population y suma 1 a hours.
4. Al final muestra: Horas: X (población: Y)

| population | limit | Salida                     |
| ---------- | ----- | -------------------------- |
| 5          | 1000  | Horas: 8 (población: 1280) |
| 5          | 10    | Horas: 2 (población: 20)   |
| 5          | 5     | Horas: 1 (población: 10)   |
| 5          | 4     | Horas: 0 (población: 5)    |
*/

let population = 5;
const limit = 1000;
let hours = 0;

while (population <= limit) {
  population *= 2;
  hours++;
}
console.log(`Horas: ${hours} (población: ${population})`);

// Ejercicio 2: limpiar espacios dobles

/*
Reglas:
1. Mientras text contenga dos espacios seguidos ("  "), sustituye ese par por un solo espacio.
2. Usa replace, no replaceAll. replace solo cambia la primera coincidencia, así que el bucle
   es lo que repite el trabajo hasta que no quede ninguna.
3. Al final muestra: Texto limpio: X

| text             | Salida                     |
| ---------------- | -------------------------- |
| "Hola   mundo"   | Texto limpio: Hola mundo   |
| "a    b     c"   | Texto limpio: a b c        |
| "uno  dos"       | Texto limpio: uno dos      |
| "sin dobles"     | Texto limpio: sin dobles   |
| ""               | Texto limpio:              |
*/

let text = "Hola   mundo";
while (text.includes("  ")) {
  text = text.replace(/  /g, " ");
}
console.log(`Texto limpio: ${text}`);

// Ejercicio 3: la cola de atención

/*
Reglas:
1. El bucle se repite mientras se cumplan las dos cosas a la vez:
   - quedan personas en la cola
   - attended es menor que maxAttended
2. En cada vuelta:
   a) Quita a la primera persona de la cola con shift() y guarda su nombre
      (shift() devuelve el elemento que quita).
   b) Muestra el nombre de esa persona: Atendiendo a X
   c) Suma 1 a attended.
3. Cuando el bucle termina, muestra cuántas personas siguen en la cola: Quedan en cola: N
   (las que no llegaron a atenderse porque se alcanzó maxAttended, o 0 si se atendió a todas).

Ejemplo con maxAttended = 2: se atiende a Ana y a Luis, y Marta se queda esperando
porque el bucle para al llegar al límite.

| queue                    | maxAttended | Líneas que se muestran                                                  |
| ------------------------ | ----------- | ----------------------------------------------------------------------- |
| ["Ana", "Luis", "Marta"] | 2           | Atendiendo a Ana / Atendiendo a Luis / Quedan en cola: 1                |
| ["Ana", "Luis", "Marta"] | 5           | Atendiendo a Ana / Atendiendo a Luis / Atendiendo a Marta / Quedan en cola: 0 |
| ["Ana", "Luis", "Marta"] | 0           | Quedan en cola: 3                                                       |
| []                       | 3           | Quedan en cola: 0                                                       |

Ojo: en un while el cuerpo tiene que cambiar algo que afecte a la condición. Si no, el bucle
no termina nunca (para pararlo en el terminal: Ctrl + C).
*/

const queue = ["Ana", "Luis", "Marta"];
const maxAttended = 2;
let attended = 0;

while (queue.length !== 0 && attended < maxAttended) {
  const person = queue.shift();
  console.log(`Atendiendo a ${person} `);
  attended++;
}
console.log(`Quedan en cola: ${queue.length}`);
