const email = "ana@correo.com";
const password = "Secreta123";
const rememberMe = true; // Marcó la casilla "Recordarme"
const statusCode = 200; // Código de estado que responde el servidor al enviar el formulario
const userRole = "editor"; // Rol del usuario según el servidor: "admin", "editor", "user"...

/* Reglas
Estás programando la pantalla de login de una web. Primero se valida el formulario en el navegador
y, si es correcto, se envía al servidor y se interpreta su respuesta.
Calcula estos valores en este orden.
Usa if/else if/else y switch donde corresponda, pero sin funciones, bucles ni arrays.
Pista: si vas a asignar un valor dentro de un if o de un switch, declara la variable con let antes.

1. emailError: un texto de error según el email:
    - "El email es obligatorio" si está vacío
    - "Email no válido" si no contiene "@" o no contiene "."
    - cadena vacía si es correcto
2. passwordError: un texto de error según la contraseña:
    - "La contraseña es obligatoria" si está vacía
    - "La contraseña debe tener al menos 8 caracteres" si tiene menos de 8
    - cadena vacía si es correcta
3. isFormValid: el formulario es válido si no hay ningún error
4. serverMessage: solo si el formulario es válido (si no, cadena vacía). Usa un switch sobre statusCode:
    - 200                 -> "Login correcto"
    - 400 y 422           -> "Datos enviados incorrectos"   (comparten el mismo bloque: fall-through)
    - 401                 -> "Email o contraseña incorrectos"
    - 403                 -> "Cuenta bloqueada"
    - 404                 -> "Usuario no encontrado"
    - 500, 502 y 503      -> "Error del servidor, inténtalo más tarde"   (fall-through)
    - cualquier otro      -> "Error inesperado (código 418)"   (con el código real)
5. redirectUrl: solo si el formulario es válido y el login ha sido correcto (200). Si no, cadena vacía.
   Usa un switch sobre userRole:
    - "admin"             -> "/admin"
    - "editor"            -> "/editor"
    - cualquier otro      -> "/inicio"
6. sessionSaved: la sesión se guarda si marcó rememberMe y hay una redirección (redirectUrl no está vacía)
7. message: debe seguir uno de estos tres formatos:
    - Formulario incorrecto: El email es obligatorio   (muestra el error del email; si no hay, el de la contraseña)
    - Login correcto. Redirigiendo a /editor (sesión guardada)   (el " (sesión guardada)" solo si sessionSaved)
    - Error: Email o contraseña incorrectos   (el serverMessage)
Por último, imprime message por consola.

Comprueba tu solución cambiando los datos iniciales. Partiendo de los valores de arriba:
- Sin cambios                                   -> Login correcto. Redirigiendo a /editor (sesión guardada)
- userRole = "admin", rememberMe = false        -> Login correcto. Redirigiendo a /admin
- userRole = "invitado"                         -> Login correcto. Redirigiendo a /inicio (sesión guardada)
- statusCode = 401                              -> Error: Email o contraseña incorrectos
- statusCode = 404                              -> Error: Usuario no encontrado
- statusCode = 400                              -> Error: Datos enviados incorrectos
- statusCode = 422                              -> Error: Datos enviados incorrectos
- statusCode = 503                              -> Error: Error del servidor, inténtalo más tarde
- statusCode = 418                              -> Error: Error inesperado (código 418)
- email = ""                                    -> Formulario incorrecto: El email es obligatorio
- email = "ana.correo.com"                      -> Formulario incorrecto: Email no válido
- email = "ana@correo"                          -> Formulario incorrecto: Email no válido
- password = ""                                 -> Formulario incorrecto: La contraseña es obligatoria
- password = "abc"                              -> Formulario incorrecto: La contraseña debe tener al menos 8 caracteres
- email = "", password = ""                     -> Formulario incorrecto: El email es obligatorio
- password = "abc", statusCode = 500            -> Formulario incorrecto: La contraseña debe tener al menos 8 caracteres
                                                   (con el formulario incorrecto no se llega a mirar el statusCode)

Bonus: ¿por qué en la regla 4 no se puede escribir case 400 || 422:? (mira tu diario de desarrollo)
*/
let emailError;

if (email === "") {
  emailError = "El email es obligatorio";
} else if (!email.includes("@") || !email.includes(".")) {
  emailError = "Email no válido";
} else {
  emailError = "";
}

let passwordError;

if (password === "") {
  passwordError = "La contraseña es obligatoria";
} else if (password.length < 8) {
  passwordError = "La contraseña debe tener al menos 8 caracteres";
} else {
  passwordError = "";
}

let isFormValid = false;

if (emailError === "" && passwordError === "") {
  isFormValid = true;
}

let serverMessage;

if (isFormValid) {
  switch (statusCode) {
    case 200:
      serverMessage = "Login correcto";
      break;
    case 400:
    case 422:
      serverMessage = "Datos enviados incorrectos";
      break;
    case 401:
      serverMessage = "Email o contraseña incorrectos";
      break;
    case 403:
      serverMessage = "Cuenta bloqueada";
      break;
    case 404:
      serverMessage = "Usuario no encontrado";
      break;
    case 500:
    case 502:
    case 503:
      serverMessage = "Error del servidor, inténtalo más tarde";
      break;
    default:
      serverMessage = "Error inesperado (código " + statusCode + ")";
      break;
  }
} else {
  serverMessage = "";
}

let redirectUrl;

if (isFormValid && statusCode === 200) {
  switch (userRole) {
    case "admin":
      redirectUrl = "/admin";
      break;
    case "editor":
      redirectUrl = "/editor";
      break;
    default:
      redirectUrl = "/inicio";
  }
} else {
  redirectUrl = "";
}

const sessionSaved = rememberMe && redirectUrl !== "";

let message = "";

if (!isFormValid) {
  message =
    "Formulario incorrecto: " +
    (emailError !== "" ? emailError : passwordError);
} else if (statusCode === 200) {
  message =
    serverMessage +
    ". Redirigiendo a " +
    redirectUrl +
    (sessionSaved ? " (sesión guardada)" : "");
} else {
  message = `Error: ${serverMessage}`;
}

console.log(message);

//  Bonus: ¿por qué en la regla 4 no se puede escribir case 400 || 422:? La expresión vale 400 (el primer valor verdadero), así que solo coincide con 400.
