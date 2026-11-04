const productName = "Zapatillas Running AIR Pro"
const description = "Zapatillas ligeras y transpirables para correr cada día"
const price = 80 // Precio en euros, sin decimales
const discount = 25 // Porcentaje de descuento. 0 si no tiene
const stock = 3 // Unidades disponibles
const isNew = true // Es una novedad

/* Reglas
Estás construyendo la tarjeta de un producto de una tienda online.
Calcula estos valores en este orden.
Usa solo lo visto hasta ahora: sin if ni funciones.

1. slug: el nombre en minúsculas con los espacios sustituidos por "-" (es la parte de la URL del producto)
2. hasDiscount: tiene descuento si discount es de tipo number y mayor que 0
3. finalPrice: si tiene descuento, es price menos ese porcentaje de price. Si no, es price
4. shortDescription: si description tiene más de 30 caracteres, sus 27 primeros caracteres + "...". Si no, la descripción entera
5. stockLabel: debe ser uno de estos tres textos:
    - "Agotado" si no queda stock
    - "¡Últimas 3 unidades!" si quedan 5 o menos (con el número real)
    - "En stock" en cualquier otro caso
6. badge: "NUEVO" si es novedad. Si no lo es, "-25%" (con el descuento real) si tiene descuento. Si tampoco, cadena vacía
7. canBuy: se puede comprar si hay stock y el precio es mayor que 0
8. buttonText: "Añadir al carrito" si se puede comprar. Si no, "Avisarme"
9. card: una línea con este formato:
    - Zapatillas Running AIR Pro | NUEVO | 60€ | ¡Últimas 3 unidades!
Por último, imprime card, slug y buttonText por consola.

Comprueba tu solución cambiando los datos iniciales. Partiendo de los valores de arriba:
- Sin cambios                                   -> Zapatillas Running AIR Pro | NUEVO | 60€ | ¡Últimas 3 unidades!
                                                   zapatillas-running-air-pro
                                                   Añadir al carrito
- stock = 0                                     -> Zapatillas Running AIR Pro | NUEVO | 60€ | Agotado
                                                   zapatillas-running-air-pro
                                                   Avisarme
- stock = 20                                    -> Zapatillas Running AIR Pro | NUEVO | 60€ | En stock
- isNew = false                                 -> Zapatillas Running AIR Pro | -25% | 60€ | ¡Últimas 3 unidades!
- isNew = false, discount = 0                   -> Zapatillas Running AIR Pro |  | 80€ | ¡Últimas 3 unidades!
- isNew = false, discount = "25"                -> Zapatillas Running AIR Pro |  | 80€ | ¡Últimas 3 unidades!
- price = 0                                     -> Zapatillas Running AIR Pro | NUEVO | 0€ | ¡Últimas 3 unidades!
                                                   zapatillas-running-air-pro
                                                   Avisarme

Bonus: imprime también shortDescription.
- Sin cambios                                   -> Zapatillas ligeras y transp...
- description = "Ligeras y cómodas"             -> Ligeras y cómodas
*/

const slug = productName.toLowerCase().replaceAll(" ", "-")

const hasDiscount = typeof discount === "number" && discount > 0

const finalPrice = hasDiscount ? price - (price * discount / 100) : price

const shortDescription = description.length > 30 ? description.slice(0, 27) + "..." : description

const stockLabel = stock === 0 ? "Agotado" : stock <= 5 ? `¡Últimas ${stock} unidades!` : "En stock"

const badge = isNew ? "NUEVO" : hasDiscount ? `-${discount}%` : "" // ${variable} -> interpolar

const canBuy = stock > 0 && price > 0
const buttonText = canBuy ? "Añadir al carrito" : "Avisarme"
const card = `${productName} | ${badge} | ${finalPrice}€ | ${stockLabel}`

console.log(card)
console.log(slug)
console.log(buttonText)
console.log(shortDescription)
