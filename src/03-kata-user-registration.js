const firstName = "mIGUEL"
const lastName = "VEGA"
const email = "Miguel.Vega@Correo.com"
const password = "Js2026!x"
const birthYear = 2004
const currentYear = 2026

/* Reglas
Procesa el registro de un nuevo usuario calculando estos valores en este orden.
Usa solo lo visto hasta ahora: sin if, sin funciones y sin métodos que no hayas estudiado (nada de trim, repeat, split...).

1. displayName: nombre y apellido con la primera letra en mayúscula y el resto en minúscula, separados por un espacio
2. username: las 3 primeras letras del nombre + el apellido, todo en minúsculas
3. isValidEmail: es válido si contiene "@", contiene "." y la "@" no está al principio del texto
4. emailDomain: si el email es válido, lo que hay después de la "@" en minúsculas. Si no, cadena vacía
5. maskedEmail: si el email es válido, su primera letra en minúscula + "***" + la "@" y todo lo que sigue (en minúsculas). Si no, "email no válido"
6. isStrongPassword: es fuerte si cumple las tres cosas a la vez:
    - tiene al menos 8 caracteres
    - contiene "!", "#" o "$"
    - contiene alguna mayúscula (pista: compárala con ella misma en minúsculas)
    - y además NO contiene el nombre (sin importar mayúsculas/minúsculas)
7. age: currentYear menos birthYear
8. canRegister: el email es válido, la contraseña es fuerte y tiene al menos 16 años
9. accountType: "adulto" si tiene 18 o más, "junior" si no
10. cardCode: el username en mayúsculas + "-" + las dos últimas cifras del año de nacimiento
    (pista: un número no tiene .slice(), pero un template literal lo convierte en string)
11. message: debe seguir uno de estos dos formatos:
    - Bienvenido, Miguel Vega (migvega). Carnet: MIGVEGA-04 | Email: m***@correo.com | Cuenta: adulto
    - Registro rechazado para Miguel Vega
Por último, imprime message y emailDomain por consola.

Comprueba tu solución cambiando los datos iniciales. Partiendo de los valores de arriba:
- Sin cambios                                   -> Bienvenido, Miguel Vega (migvega). Carnet: MIGVEGA-04 | Email: m***@correo.com | Cuenta: adulto
                                                   emailDomain: correo.com
- birthYear = 2009                              -> Bienvenido, Miguel Vega (migvega). Carnet: MIGVEGA-09 | Email: m***@correo.com | Cuenta: junior
- birthYear = 2012                              -> Registro rechazado para Miguel Vega
- password = "Miguel2026!"                      -> Registro rechazado para Miguel Vega
- password = "js2026!x"                         -> Registro rechazado para Miguel Vega
- email = "miguel.vega.correo.com"              -> Registro rechazado para Miguel Vega (emailDomain: "")
- email = "@correo.com"                         -> Registro rechazado para Miguel Vega
- firstName = "aNA", lastName = "lÓPEZ"         -> Bienvenido, Ana López (analópez). Carnet: ANALÓPEZ-04 | Email: m***@correo.com | Cuenta: adulto
Bonus: ¿qué ocurre con firstName = "Al"? ¿Cómo lo arreglarías con lo que sabes?
*/

const displayName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() +
                    " " + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
console.log(displayName)

const username = firstName.slice(0, 3).toLowerCase() + lastName.toLowerCase()
console.log(username)

const isValidEmail = email.includes("@") && email.includes(".") && email[0] !== "@"
console.log(isValidEmail)

const emailDomain = isValidEmail ? email.slice(email.indexOf("@") + 1).toLowerCase() : ""
console.log(emailDomain)

const maskedEmail = isValidEmail ? email[0].toLowerCase() + "***" + email.slice(email.indexOf("@")).toLowerCase() : "email no valido"
console.log(maskedEmail)

const isStrongPassword = password.length >= 8 && (password.includes("!") || password.includes("#") || password.includes("$"))
                        && password !== password.toLowerCase() && !password.toLowerCase().includes(firstName.toLowerCase())
console.log(isStrongPassword)

const age = currentYear - birthYear

const canRegister = isValidEmail && isStrongPassword && age >= 16
console.log(canRegister)

const accountType = age>= 18 ? "adulto" : "junior"
console.log(accountType)

const cardCode = username.toUpperCase() + "-" + `${birthYear}`.slice(-2)
console.log(cardCode)

const message = canRegister ? "Bienvenido, " + displayName + " (" + username + ")." + ` Carnet: ${cardCode} | Email: ${maskedEmail} | Cuenta: ${accountType}` : 
                "Registro rechazado para " + displayName

console.log(message)
console.log(emailDomain)

