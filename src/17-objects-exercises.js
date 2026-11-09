/*
1. Declarar el objeto: Crea una constante llamada game que contenga las siguientes propiedades:

title (string): "The Legend of Zelda"
developer (string): "Nintendo"
releaseYear (number): 2017
"edad recomendada" (string, clave con espacio): "+12"
genres (array de strings): ["Aventura", "Mundo abierto"]

2. Acceso con notación de punto:

Guarda en una constante gameTitle el título del juego accediendo mediante notación de punto (.).

3. Acceso con notación de corchetes:

Guarda en una constante ageRating la edad recomendada accediendo mediante notación de corchetes (["..."]).

4. Acceso dinámico mediante variable:

Declara una variable llamada keyToSearch con el texto "developer".
Guarda en una constante company el valor de la desarrolladora accediendo al objeto game usando la variable keyToSearch entre corchetes.

5. Mostrar resultado final:

Imprime por consola usando un template literal un mensaje con esta estructura exacta:
text
"The Legend of Zelda" fue desarrollado por Nintendo en 2017. Clasificación: +12. Género principal: Aventura.

(Pista: para el género principal, accede al primer elemento del array genres).
*/
const game = {
  title: "The Legend of Zelda",
  developer: "Nintendo",
  releaseYear: 2017,
  "edad recomendada": "+12", // NO recomendada
  genres: ["Aventura", "Mundo abierto"],
};

const gameTitle = game.title;
const ageRating = game["edad recomendada"];
const keyToSearch = "developer";
const company = game[keyToSearch];

console.log(
  `"${gameTitle}" fue desarrollado por ${company} en ${game.releaseYear}. Clasificación: ${ageRating}. Género principal: ${game.genres[0]}.`,
);

/*
Modificar, añadir, eliminar y comprobar propiedades
6. Modificar una propiedad existente
Cambia el año de lanzamiento (releaseYear) a 2023 (por ejemplo, con la secuela o reedición).
7. Añadir nuevas propiedades
Añade la propiedad score con el valor numérico 97.
Añade una nueva propiedad con espacios: "modo multijugador" con el valor booleano false.
8. Eliminar una propiedad
Elimina del objeto game la propiedad "edad recomendada" usando el operador delete.
9. Comprobar la existencia con el operador in
Comprueba si "edad recomendada" sigue existiendo en game usando el operador in y muestra el resultado booleano por consola:
¿Existe 'edad recomendada'?: false
Comprueba si "score" existe en game usando in y muestra el resultado:
¿Existe 'score'?: true
10. Inspección final del objeto
Imprime por consola el objeto game completo (console.log(game)) para comprobar visualmente que:
releaseYear ahora es 2023.
Aparecen score y "modo multijugador".
"edad recomendada" ya no está.
*/

game.releaseYear = 2023;
game.score = 97;
game["multiplayer mode"] = false;

delete game["edad recomendada"];
console.log(`¿Existe 'edad recomendada'?: ${"edad recomendada" in game}`);
console.log(`¿Existe 'score'?: ${"score" in game}`);

console.log(game);

/*Métodos y la palabra clave this
11. Añadir un método de lectura: getSummary()
Añade una función al objeto game llamada getSummary:
javascript
game.getSummary = function () { ... }
El método debe devolver (return) un string usando this para leer sus propias propiedades (this.title, this.developer y this.score):
text
"The Legend of Zelda" (Nintendo) - Puntuación: 97/100
Fuera del objeto, llama al método e imprime su resultado por consola:
javascript
console.log(game.getSummary());

12. Añadir un método de modificación: updateScore(newScore)
Añade otro método llamado updateScore que reciba un parámetro numérico newScore:
javascript
game.updateScore = function (newScore) { ... }
Dentro del método, actualiza la propiedad score del propio objeto usando this.score = newScore.
Llama al método pasando una nueva puntuación (por ejemplo, 99):
javascript
game.updateScore(99);
Vuelve a llamar a console.log(game.getSummary()) para comprobar que ahora el resumen muestra automáticamente 
la nueva puntuación (99/100) gracias a que this lee el valor actualizado.

NOTE
Recuerda usar function () { ... } y no una arrow function (() => { ... }), para que this apunte correctamente al objeto game.*/

game.getSummary = function () {
  return `"${this.title}" (${this.developer}) - Puntuación: ${this.score}/100`;
};

console.log(game.getSummary());

game.updateScore = function (newScore) {
  this.score = newScore;
};

game.updateScore(99);
console.log(game.getSummary());

/*
Objetos anidados y ?.

13. Añadir un objeto anidado con varios niveles
Añade al objeto game una nueva propiedad llamada technical que contenga otro objeto, y dentro de este, otro objeto más para las resoluciones:

game.technical = {
  engine: "Havok",
  fps: 60,
  resolution: {
    docked: "1080p",
    handheld: "720p",
  },
};

14. Acceso a propiedades en profundidad
Accede de forma encadenada con la notación de punto para obtener:
El motor (game.technical.engine).
La resolución en modo portátil (game.technical.resolution.handheld).
Imprime por consola este mensaje:

Motor: Havok | Modo portátil: 720p

15. Consultas seguras con el encadenamiento opcional (?.)

Caso A (propiedad inexistente en objeto que sí existe): Intenta acceder a una propiedad hdr dentro de resolution usando ?.:
console.log(`Soporte HDR: ${game.technical.resolution?.hdr}`);
(Debe mostrar undefined sin dar error).

Caso B (objeto padre inexistente): Imagina que queremos consultar los requisitos de PC en una hipotética propiedad pcRequirements:

Si hicieras game.pcRequirements.minRam el programa se rompería con: TypeError: Cannot read properties of undefined.
Consulta la memoria RAM mínima de forma segura usando ?. (game.pcRequirements?.minRam) y muéstralo por consola:

console.log(`RAM mínima PC: ${game.pcRequirements?.minRam}`);

(Debe mostrar undefined de forma segura, permitiendo que el programa siga ejecutándose).
*/

game.technical = {
  engine: "Havok",
  fps: 60,
  resolution: {
    docked: "1080p",
    handheld: "720p",
  },
};

console.log(
  `Motor: ${game.technical.engine} | Modo portátil: ${game.technical.resolution.handheld}`,
);

console.log(`Soporte HDR: ${game.technical.resolution?.hdr}`);
console.log(`RAM mínima PC: ${game.pcRequirements?.minRam}`);
