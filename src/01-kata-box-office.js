const customerName = "Lucia"
const age = 20
const isStudent = true
const isAccompanied = false // Va acompañado por un adulto
const isPremier = true // Es un estreno
const money = 10
const ticketNumber = 15 // Número de venta de la entrada

/* Reglas
Cálcula estos valores en este orden:
1. price: la entrada cuesta 6€ si el cliente tiene menos de 12 años, tiene 65 o más, o es estudiante. Si no, cuesta 10€
2. canEnter: puede entrar si tiene al menos 16 años o va acompañado
3. canBuy: puede comprar si puede entrar y tiene dienero suficiente
4. change: si compra, es el dinero que le sobra. Si no, es 0
5. freePopcorn: recibe palomitas gratis si compra y ticketNumber es múltiplo de 5
6. message: debe seguir uno de estos dos formatos, según si puede comprar o no:
    - Lucía compra su entrada por 6€. Cambio: 4€
    - Lucía no puede comprar la entrada
Po último, imprime message y freePopcorn por consola.
*/

const price = (age < 12 || age >= 65 || isStudent) ? 6 : 10
const finalPrice = isPremier ? price + 2 : price
const canEnter = age >= 16 || isAccompanied
const canBuy = canEnter && money >= finalPrice
const change = canBuy ? money - finalPrice : 0
const freePopcorn = canBuy && ticketNumber % 5 === 0
const message = canBuy ? `${customerName} compra su entrada por ${finalPrice}€. Cambio: ${change}€` : `${customerName} no puede comprar la entrada`

console.log(message + (freePopcorn ? ` El ticket: ${ticketNumber} ¡Recibe palomitas gratis! ${freePopcorn}` : ` No recibe palomitas gratis. ${freePopcorn}`))