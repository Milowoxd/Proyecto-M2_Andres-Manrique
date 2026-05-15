# Registro de uso de IA

## Herramienta utilizada
Claude (Anthropic) — claude.ai

## Rol de la IA en el proyecto

Claude actuó como asistente principal durante todo el desarrollo. El flujo fue conversacional: yo describía lo que necesitaba, Claude guiaba la implementación paso a paso explicando cada decisión antes de escribir el código.

---

## Prompts y decisiones clave

### 1. Estructura del proyecto
**Prompt:** "Quiero construir una API REST con Node.js, Express y PostgreSQL para gestionar authors y posts"

**Resultado:** Claude definió la arquitectura en capas:
- `routes/` → define los endpoints
- `controllers/` → valida datos y responde al cliente
- `services/` → ejecuta las consultas SQL
- `middleware/` → manejo centralizado de errores
- `db/` → conexión y scripts de base de datos

---

### 2. Conexión a PostgreSQL
**Prompt:** "¿Cómo conecto Express a PostgreSQL sin ORM?"

**Resultado:** Claude implementó `pg` con un Pool de conexiones centralizado en `src/db/pool.js`. La URL de conexión se lee desde variables de entorno para soportar entorno local y Railway.

---

### 3. Scripts de base de datos
**Prompt:** "Necesito un script para crear las tablas y otro para insertar datos de ejemplo"

**Resultado:** Claude escribió:
- `migrate.js` → crea las tablas `authors`, `posts` y `comments` con sus FK
- `seed.js` → inserta datos de ejemplo

---

### 4. Endpoints y validaciones
**Prompt:** "¿Cómo manejo validaciones y errores en Express?"

**Resultado:** Claude implementó:
- Validaciones en los controllers antes de tocar la base de datos
- Middleware global `errorHandler.js` al final de `app.js`
- Manejo específico del error `23505` de PostgreSQL para emails duplicados

---

### 5. Tests con Supertest
**Prompt:** "¿Cómo escribo tests para una API Express con Jest y Supertest?"

**Resultado:** Claude escribió tests que cubren:
- Flujos exitosos (201, 200, 204)
- Validaciones fallidas (400)
- Recursos inexistentes (404)
- Email duplicado (400 con mensaje claro)

---

### 6. Deploy en Railway
**Prompt:** "¿Cómo despliego una API Express con PostgreSQL en Railway?"

**Resultado:** Claude guió:
- Provisionar PostgreSQL en Railway
- Configurar `DATABASE_URL` en el servicio de la app
- Generar el dominio público

---

### 7. Extra credit — Comments
**Prompt:** "Quiero agregar una entidad comments asociada a posts y authors"

**Resultado:** Claude implementó:
- Tabla `comments` con FK a `authors` y `posts` con `ON DELETE CASCADE`
- Endpoints: `GET /comments`, `GET /comments/post/:postId`, `POST /comments`
- Tests para la nueva entidad

---

## ¿Qué hice yo?

- Tomé las decisiones sobre qué construir y cómo avanzar
- Ejecuté cada comando y verifiqué que funcionara
- Entendí cada bloque de código antes de continuar
- Configuré Railway, GitHub y las variables de entorno
- Ajusté los datos del seed a mi gusto
- Hice preguntas cuando algo no quedaba claro

## Reflexión

Usar IA como asistente aceleró el desarrollo significativamente. El proceso de ir paso a paso, ejecutar cada comando y verificar que funcionara me permitió entender qué hace cada parte del proyecto. La IA fue una guía, pero las decisiones y la comprensión del código fueron mías.