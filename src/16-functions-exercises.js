// Ejercicio 1: función sin parámetros (el aviso de mensajes)

/*
Datos:
- userName es el nombre del usuario.
- unreadMessages es el número de mensajes sin leer.

Reglas:
1. Crea una función con la palabra clave function (declaración normal) llamada getNotification.
2. La función NO recibe parámetros: los paréntesis van vacíos, getNotification().
3. Dentro de la función, usa las variables userName y unreadMessages (están declaradas fuera de ella).
4. La función DEVUELVE un texto con return. No lo muestra con console.log dentro de la función.
   El texto depende de unreadMessages:
   - Si es 0:       Hola, X. No tienes mensajes nuevos.
   - Si es 1:       Hola, X. Tienes 1 mensaje sin leer.
   - Si es mayor que 1: Hola, X. Tienes N mensajes sin leer.
   (X es userName y N es unreadMessages. Fíjate en "mensaje" en singular y "mensajes" en plural.)
5. Fuera de la función, llámala y muestra con console.log el texto que devuelve.

| userName | unreadMessages | Salida                                       |
| -------- | -------------- | -------------------------------------------- |
| "Ana"    | 3              | Hola, Ana. Tienes 3 mensajes sin leer.       |
| "Luis"   | 1              | Hola, Luis. Tienes 1 mensaje sin leer.       |
| "Marta"  | 0              | Hola, Marta. No tienes mensajes nuevos.      |
| "Pedro"  | 12             | Hola, Pedro. Tienes 12 mensajes sin leer.    |

Para comprobarlo, cambia los dos valores de entrada y ejecuta el archivo. Cada ejecución
debe mostrar una sola línea.
*/

const userName = "Ana";
const unreadMessages = 3;

function getNotification() {
  if (unreadMessages === 0) {
    return `Hola, ${userName}. No tienes mensajes nuevos.`;
  }
  if (unreadMessages === 1) {
    return `Hola, ${userName}. Tienes ${unreadMessages} mensaje sin leer.`;
  }
  return `Hola, ${userName}. Tienes ${unreadMessages} mensajes sin leer.`;
}

console.log(getNotification());

// Ejercicio 2: función con parámetros (el precio con descuento)

/*
Datos:
- productPrice es el precio de un producto en euros.
- discountPercent es el descuento a aplicar, en porcentaje (20 significa 20 %).

Reglas:
1. Crea una función con la palabra clave function llamada calcFinalPrice.
2. La función recibe DOS parámetros, por este orden: price (el precio) y discount (el porcentaje).
3. Dentro de la función usa solo price y discount. NO leas productPrice ni discountPercent
   (están declaradas fuera: la función no debe depender de ellas).
4. La función DEVUELVE con return el precio final: el precio menos el descuento.
   Fórmula: price - (price * discount) / 100
5. Fuera de la función, llámala pasándole como argumentos productPrice y discountPercent,
   y muestra con console.log una línea con este formato: Precio final: X €
6. Después, en una segunda línea, llámala otra vez pasando los números directamente
   (sin usar variables): calcFinalPrice(50, 10), y muéstralo con el mismo formato.
   Esta segunda línea es siempre la misma, aunque cambies los datos de entrada.

| productPrice | discountPercent | Líneas que se muestran (una por línea)    |
| ------------ | --------------- | ----------------------------------------- |
| 100          | 20              | Precio final: 80 € / Precio final: 45 €   |
| 200          | 0               | Precio final: 200 € / Precio final: 45 €  |
| 80           | 50              | Precio final: 40 € / Precio final: 45 €   |
| 60           | 25              | Precio final: 45 € / Precio final: 45 €   |

Para comprobarlo, cambia los dos valores de entrada y ejecuta el archivo. Cada ejecución
debe mostrar dos líneas (más la del ejercicio 1, que va antes).
*/

const productPrice = 100;
const discountPercent = 20;

function calcFinalPrice(price, discount) {
  return price - (price * discount) / 100;
}

console.log(`Precio final: ${calcFinalPrice(productPrice, discountPercent)} €`);
console.log(`Precio final: ${calcFinalPrice(50, 10)} €`);

// Ejercicio 3: valores por defecto (el total del pedido)

/*
Reglas:
1. Crea una función con la palabra clave function llamada calcOrderTotal.
2. La función recibe TRES parámetros, por este orden:
   - subtotal: el importe de los productos, en euros (obligatorio, sin valor por defecto).
   - shipping: el coste de envío. Si no se indica, vale 5 por defecto.
   - discount: el descuento en euros. Si no se indica, vale 0 por defecto.
   Los valores por defecto se escriben en la cabecera de la función, con =, no con un if dentro.
3. La función DEVUELVE con return el total: subtotal + shipping - discount.
4. Fuera de la función, haz estas CUATRO llamadas y muestra cada resultado con console.log,
   en una línea con este formato: Total: X €
   a) calcOrderTotal(100)
   b) calcOrderTotal(100, 0)
   c) calcOrderTotal(100, undefined, 10)
   d) calcOrderTotal(100, 3, 10)

| Llamada                        | Qué pasa con los parámetros                              | Línea que se muestra |
| ------------------------------ | -------------------------------------------------------- | -------------------- |
| a) calcOrderTotal(100)         | shipping y discount usan su valor por defecto (5 y 0)    | Total: 105 €         |
| b) calcOrderTotal(100, 0)      | shipping vale 0 (el 0 se respeta); discount vale 0       | Total: 100 €         |
| c) calcOrderTotal(100, undefined, 10) | shipping usa el defecto (5); discount vale 10     | Total: 95 €          |
| d) calcOrderTotal(100, 3, 10)  | no se usa ningún valor por defecto                       | Total: 93 €          |

Fíjate en dos cosas al comparar las llamadas:
- En b) pasas un 0 y la función NO lo sustituye por 5: el valor por defecto solo se usa cuando el
  argumento falta o es undefined.
- En c) quieres saltarte shipping pero dar discount: el hueco se rellena pasando undefined.

Las cuatro líneas se muestran en este orden: a, b, c, d.
*/
function calcOrderTotal(subtotal, shipping = 5, discount = 0) {
  return subtotal + shipping - discount;
}

console.log(`Total: ${calcOrderTotal(100)} €`);
console.log(`Total: ${calcOrderTotal(100, 0)} €`);
console.log(`Total: ${calcOrderTotal(100, undefined, 10)} €`);
console.log(`Total: ${calcOrderTotal(100, 3, 10)} €`);

// Ejercicio 4: arrow functions (cuatro funciones flecha)

/*
Reglas generales:
- Las cuatro funciones son arrow functions guardadas en una variable con const (no uses la palabra function).
- Usa SIEMPRE paréntesis en los parámetros, también cuando solo hay uno: (n) => ...
- Cada función DEVUELVE su resultado (return explícito o implícito, según se indica). No muestran nada dentro.
- Las llamadas y los console.log van fuera de las funciones.

Funciones a crear:
1. square: recibe un número n y devuelve n multiplicado por sí mismo.
   Escríbela SIN llaves, con retorno implícito (el resultado de la expresión se devuelve solo).
2. isAdult: recibe una edad age y devuelve true si age es 18 o más, y false si no.
   Escríbela SIN llaves, con retorno implícito.
3. getWelcome: NO recibe parámetros y devuelve el texto ¡Bienvenido!
   Escríbela SIN llaves, con retorno implícito. Recuerda que sin parámetros los paréntesis son obligatorios: () => ...
4. calcAverage: recibe tres números a, b y c y devuelve su media (la suma de los tres dividida entre 3).
   Escríbela CON llaves: dentro guarda la suma en una variable local total y devuelve total / 3 con return.
   (Con llaves el return es obligatorio: sin él la función devuelve undefined.)

Llamadas que debes hacer, con console.log, en este orden (una línea cada una):

| Llamada                  | Línea que se muestra |
| ------------------------ | -------------------- |
| square(4)                | Cuadrado de 4: 16    |
| square(-3)               | Cuadrado de -3: 9    |
| isAdult(18)              | ¿18 años es adulto? true  |
| isAdult(17)              | ¿17 años es adulto? false |
| getWelcome()             | ¡Bienvenido!         |
| calcAverage(6, 8, 10)    | Media: 8             |
| calcAverage(0, 0, 3)     | Media: 1             |

Para construir cada línea usa plantillas de texto, por ejemplo: `Cuadrado de 4: ${square(4)}`
*/

const square = (n) => n * n;
const isAdult = (age) => age >= 18;
const getWelcome = () => "¡Bienvenido!";
const calcAverage = (a, b, c) => {
  const total = a + b + c;
  return total / 3;
};

console.log(`Cuadrado de 4: ${square(4)}`);
console.log(`Cuadrado de -3: ${square(-3)}`);
console.log(`¿18 años es adulto? ${isAdult(18)}`);
console.log(`¿17 años es adulto? ${isAdult(17)}`);
console.log(getWelcome());
console.log(`Media: ${calcAverage(6, 8, 10)}`);
console.log(`Media: ${calcAverage(0, 0, 3)}`);

// Ejercicio 5: forEach (el ticket de la compra)

/*
Datos:
- products es la lista de nombres de los productos.
- prices es la lista de precios, en el MISMO orden: el precio de products[0] es prices[0], y así sucesivamente.
  Las dos listas tienen siempre la misma longitud.
- total suma los precios de los productos. Empieza en 0 (por eso es un let).

Reglas:
1. Recorre products con forEach, usando una arrow function como callback.
   El callback recibe DOS argumentos: el producto y su índice, por este orden: (product, index) => { ... }
2. En cada vuelta, por este orden:
   a) Guarda en una variable local price el precio de ese producto: prices[index].
   b) Si price es 0, el producto es gratis: sal de esa vuelta con return (sin mostrarlo ni sumarlo).
      (En un forEach, return dentro del callback hace de continue: salta solo esa vuelta.)
   c) Muestra una línea con este formato: N. X: P €
      (N es index + 1, para que la numeración empiece en 1; X es el producto; P es el precio.)
   d) Suma price a total.
3. Cuando el forEach termina, muestra una última línea: Total: N €
4. No uses for ni for...of: el recorrido tiene que ser con forEach.

| products                         | prices        | Líneas que se muestran (una por línea)                     |
| -------------------------------- | ------------- | ---------------------------------------------------------- |
| ["camiseta", "gorra", "bufanda"] | [20, 10, 15]  | 1. camiseta: 20 € / 2. gorra: 10 € / 3. bufanda: 15 € / Total: 45 € |
| ["pan", "agua", "leche"]         | [2, 0, 3]     | 1. pan: 2 € / 3. leche: 3 € / Total: 5 €                   |
| ["libro"]                        | [12]          | 1. libro: 12 € / Total: 12 €                               |
| []                               | []            | Total: 0 €                                                 |

(En el 2.º caso "agua" cuesta 0: no se muestra, pero la numeración respeta su posición, por eso
sale 1 y 3. En el 4.º caso el callback no llega a ejecutarse nunca.)

Para comprobarlo, cambia los dos arrays de entrada y ejecuta el archivo.
*/

const products = ["camiseta", "gorra", "bufanda"];
const prices = [20, 10, 15];
let total = 0;

products.forEach((product, index) => {
  const price = prices[index];
  if (price === 0) {
    return;
  }
  console.log(`${index + 1}. ${product}: ${price} €`);
  total += price;
});
console.log(`Total: ${total} €`);
