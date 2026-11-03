const heroName = "Aria"
const level = 4
const weapon = "Espada" // Cadena vacía si va desarmada
const shield = null // Puntos de daño que bloquea el escudo. null si no lleva escudo
const isPoisoned = true // Está envenenada
let heroHealth = 30
let gold = 20

const enemyName = "Trasgo"
const enemyAttack = 9
let enemyHealth = 40

const turn = 6 // Número de turno del combate

/* Reglas
Resuelve un turno de combate calculando estos valores en este orden.
Usa solo lo visto hasta ahora: sin if ni funciones.

1. isValidLevel: el nivel es válido si es de tipo number y mayor que 0
2. damage: es 3 veces el nivel si el nivel es válido o 0 si no lo es. Si lleva arma, suma 5 más
3. isCritical: el golpe es crítico si turn es múltiplo de 3. Si lo es, damage se multiplica por 2
4. Resta damage a enemyHealth
5. enemyDefeated: el enemigo está derrotado si su vida es 0 o menos
6. damageTaken: es 0 si el enemigo está derrotado. Si no, es enemyAttack menos los puntos del escudo, si lleva
7. Resta damageTaken a heroHealth. Además, si está envenenada, pierde 3 puntos de vida más
8. isHeroAlive: sigue viva si su vida es mayor que 0
9. reward: si derrota al enemigo y sigue viva, es 2 elevado al nivel. Si no, es 0. Súmalo a gold
10. message: debe seguir uno de estos tres formatos:
    - Aria ha caído en combate contra Trasgo
    - Aria derrota a Trasgo y gana 16 monedas. Oro: 36
    - El combate sigue. Aria: 18 PS | Trasgo: 6 PS
Por último, imprime message e isCritical por consola.

Comprueba tu solución cambiando los datos iniciales. Partiendo de los valores de arriba:
- Sin cambios                                   -> El combate sigue. Aria: 18 PS | Trasgo: 6 PS
- enemyHealth = 30                              -> Aria derrota a Trasgo y gana 16 monedas. Oro: 36
- shield = 4                                    -> El combate sigue. Aria: 22 PS | Trasgo: 6 PS
- weapon = "", turn = 7, heroHealth = 10        -> Aria ha caído en combate contra Trasgo
- level = "4"                                   -> El combate sigue. Aria: 18 PS | Trasgo: 30 PS
*/

const isValidLevel = typeof level === "number" && level > 0
const damage = (isValidLevel ? level * 3 : 0) + (weapon ? 5 : 0)
const isCritical = turn % 3 === 0
const totalDamage = isCritical ? damage * 2 : damage
enemyHealth -= totalDamage
const enemyDefeated = enemyHealth <= 0
const damageTaken = enemyDefeated ? 0 : enemyAttack - (shield || 0)
heroHealth -= damageTaken + (isPoisoned ? 3 : 0)
const isHeroAlive = heroHealth > 0
const reward = enemyDefeated && isHeroAlive ? 2 ** level : 0
gold += reward

const message = isHeroAlive 
    ? (enemyDefeated 
        ? `${heroName} derrota a ${enemyName} y gana ${reward} monedas. Oro: ${gold}` 
        : `El combate sigue. ${heroName}: ${heroHealth} PS | ${enemyName}: ${enemyHealth} PS`) 
    : `${heroName} ha caído en combate contra ${enemyName}`

console.log(message, isCritical)