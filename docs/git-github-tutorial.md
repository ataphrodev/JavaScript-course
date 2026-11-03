# Git y GitHub: Tutorial Práctico

Guía paso a paso para guardar y sincronizar los cambios de un repositorio local con GitHub desde la terminal.

---

## Flujo de trabajo básico (Guardar y Sincronizar)

### Paso 1: Comprobar el estado actual
Antes de hacer cualquier cambio, verifica qué archivos han cambiado:

```bash
git status
```

* **¿Qué hace esto?** Muestra el estado del árbol de trabajo:
  * Archivos modificados (en rojo).
  * Archivos nuevos no rastreados (`??`).
  * Archivos renombrados o eliminados.

---

### Paso 2: Añadir los cambios al área de preparación (*staging*)
Indica a Git qué archivos formarán parte del próximo guardado:

```bash
git add .
```

* **¿Qué hace esto?** Añade todos los cambios (nuevos, modificados y eliminados).
* **Nota:** El punto (`.`) indica *"todos los archivos de la carpeta actual y sus subcarpetas"*.

---

### Paso 3: Verificar los archivos preparados
Confirma que todo lo que quieres guardar está en verde:

```bash
git status
```

* **¿Qué deberías ver?** Todos los cambios deben aparecer en **verde** bajo el apartado:
  ```text
  Changes to be committed:
  ```
  Esto confirma que están listos para el commit.

---

### Paso 4: Crear el *commit* (guardar la "foto" de tus cambios)
Guarda permanentemente este punto en el historial junto con un mensaje descriptivo:

```bash
git commit -m "feat: ejercicios y conceptos de strings, renombramiento de katas"
```

> **Consejo:** Usa mensajes claros y en presente que expliquen brevemente qué se añadió o modificó.

---

### Paso 5: Enviar los cambios a GitHub (*push*)
Sube tus commits locales al repositorio remoto en GitHub:

```bash
git push origin main
```
*(O simplemente `git push` si la rama ya está vinculada).*

> **Nota:** Si la terminal te solicita credenciales, introduce tu usuario y tu Personal Access Token (PAT) de GitHub para autorizar la conexión.

---

### Paso 6: Confirmación final
Comprueba que el repositorio local y el remoto están completamente sincronizados:

```bash
git status
```

* **Resultado esperado:**
  ```text
  Your branch is up to date with 'origin/main'.
  nothing to commit, working tree clean
  ```

