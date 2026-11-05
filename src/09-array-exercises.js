// Ejercicios arrays

/*
Normas para todos los ejercicios:
- Declara los arrays con const y con un literal ([]).
- Usa nombres descriptivos en plural (tasks, products...), no myArray.
- Usa solo lo visto hasta ahora: indexación, length, push, pop, shift, unshift, slice y splice
  (y if, template literals, etc.). Sin bucles ni funciones.
- Cada ejercicio es independiente: empieza siempre con el array que se indica.
*/

// 1. Crea un array tasks con tres tareas (textos): "Estudiar JavaScript", "Hacer ejercicios" y "Repasar el diario".
//    Imprime por consola el array, cuántas tareas tiene, la primera tarea y la última.
//    (Para la última no escribas el 2 a mano: calcula la posición a partir de la longitud)
/*
    Resultado esperado:
    [ 'Estudiar JavaScript', 'Hacer ejercicios', 'Repasar el diario' ]
    3
    Estudiar JavaScript
    Repasar el diario
*/
const tasks = ["Estudiar JavaScript", "Hacer ejercicios", "Repasar el diario"];
console.log(tasks);
console.log(tasks.length);
console.log(tasks[0]);
console.log(tasks[tasks.length - 1]);

// 2. Parte de const pendingTasks = ["Hacer ejercicios"].
//    (Usa el nombre pendingTasks, porque tasks ya existe en el ejercicio 1)
//    Añade "Repasar el diario" al final y "Estudiar JavaScript" al principio.
//    Imprime por consola el array y su longitud.
/*
    Resultado esperado:
    [ 'Estudiar JavaScript', 'Hacer ejercicios', 'Repasar el diario' ]
    3
*/
const pendingTasks = ["Hacer ejercicios"];
pendingTasks.push("Repasar el diario");
pendingTasks.unshift("Estudiar JavaScript");
console.log(pendingTasks);
console.log(pendingTasks.length);

// 3. Parte de const queue = ["Ana", "Luis", "Marta"] (la cola de una tienda).
//    Atiende a la primera persona y la última se marcha: elimínalas del array guardando cada una en una variable.
//    Imprime quién ha sido atendido, quién se ha ido y cómo queda la cola.
//    Después, si la cola ha quedado vacía imprime "Cola vacía"; si no, "Quedan N en la cola" (con el número real).
/*
    Resultado esperado:
    Atendido: Ana
    Se va: Marta
    [ 'Luis' ]
    Quedan 1 en la cola

    Comprueba también con const queue = ["Ana", "Luis"]:
    Atendido: Ana
    Se va: Luis
    []
    Cola vacía
*/
const queue = ["Ana", "Luis", "Marta"];
const firstClient = queue.shift();
const lastClient = queue.pop();

console.log("Atendido: " + firstClient);
console.log("Se va: " + lastClient);
console.log(queue);
const queueEmpty =
  queue.length === 0 ? "Cola vacía" : "Quedan " + queue.length + " en la cola";
console.log(queueEmpty);

// 4. Parte de const products = ["camiseta", "gorra", "bufanda", "guantes", "botas"].
//    Crea un array news con los tres primeros productos y otro offers con los dos últimos, sin modificar products.
//    (Para offers usa un número negativo en el índice)
//    Imprime news, offers y products.
/*
    Resultado esperado:
    [ 'camiseta', 'gorra', 'bufanda' ]
    [ 'guantes', 'botas' ]
    [ 'camiseta', 'gorra', 'bufanda', 'guantes', 'botas' ]
*/

const products = ["camiseta", "gorra", "bufanda", "guantes", "botas"];
const firstProducts = products.slice(0, 3);
const offers = products.slice(-2);

console.log(firstProducts);
console.log(offers);
console.log(products);

// 5. Parte de const cart = ["pan", "leche", "huevos", "arroz"] (el carrito de la compra).
//    Haz estos tres pasos en orden e imprime el carrito después de cada uno:
//      a) Sustituye "leche" por "leche sin lactosa".
//      b) Inserta "fruta" en la posición 2 sin eliminar nada.
//      c) Elimina "huevos" y "arroz" a la vez, guardando en una variable lo que has eliminado.
//    Imprime al final lo que eliminaste.
/*
    Resultado esperado:
    [ 'pan', 'leche sin lactosa', 'huevos', 'arroz' ]
    [ 'pan', 'leche sin lactosa', 'fruta', 'huevos', 'arroz' ]
    [ 'pan', 'leche sin lactosa', 'fruta' ]
    [ 'huevos', 'arroz' ]
*/

const cart = ["pan", "leche", "huevos", "arroz"];

cart.splice(1, 1, "leche sin lactosa");
console.log(cart);
cart.splice(2, 0, "fruta");
console.log(cart);
const deletedItems = cart.splice(3, 2);
console.log(cart);
console.log(deletedItems);
