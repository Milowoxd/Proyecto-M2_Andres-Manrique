# Registro de uso de IA

## Herramienta utilizada
Claude (Anthropic) — claude.ai

## ¿Cómo se usó?
Se utilizó como asistente paso a paso durante todo el desarrollo del proyecto. 
No se generó código sin antes entenderlo. Cada bloque fue explicado y comprendido antes de implementarse.

---

## Prompts y decisiones clave

### 1. Estructura del proyecto
**Prompt:** "Quiero construir una API REST con Node.js, Express y PostgreSQL para gestionar authors y posts"

**Resultado:** Se definió la arquitectura en capas:
- `routes/` → define los endpoints
- `controllers/` → valida datos y responde al cliente  
- `services/` → ejecuta las consultas SQL
- `middleware/` → manejo centralizado de errores
- `db/` → conexión y scripts de base de datos

---

### 2. Conexión a PostgreSQL
**Prompt:** "¿Cómo conecto Express a PostgreSQL sin ORM?"

**Resultado:** Se usó `pg` con un Pool de conexiones centralizado en `src/db/pool.js`. La URL de conexión se lee desde variables de entorno para soportar tanto entorno local como Railway.

---

### 3. Scripts de base de datos
**Prompt:** "Necesito un script para crear las tablas y otro para insertar datos de ejemplo"

**Resultado:** 
- `migrate.js` → crea las tablas `authors`, `posts` y `comments` con sus FK
- `seed.js` → inserta datos de ejemplo reales

---

### 4. Endpoints y validaciones
**Prompt:** "¿Cómo manejo validaciones y errores en Express?"

**Resultado:** 
- Validaciones en los controllers antes de tocar la base de datos
- Middleware global `errorHandler.js` al final de `app.js`
- Manejo específico del error `23505` de PostgreSQL para emails duplicados

---

### 5. Tests con Supertest
**Prompt:** "¿Cómo escribo tests para una API Express con Jest y Supertest?"

**Resultado:** Tests que cubren:
- Flujos exitosos (201, 200, 204)
- Validaciones fallidas (400)
- Recursos inexistentes (404)
- Email duplicado (400 con mensaje claro)

---

### 6. Deploy en Railway
**Prompt:** "¿Cómo despliego una API Express con PostgreSQL en Railway?"

**Resultado:** 
- Base de datos PostgreSQL provisionada en Railway
- Variable `DATABASE_URL` configurada en el servicio de la app
- Deploy automático con cada push a `main`

---

### 7. Extra credit — Comments
**Prompt:** "Quiero agregar una entidad comments asociada a posts y authors"

**Resultado:** 
- Nueva tabla `comments` con FK a `authors` y `posts` con `ON DELETE CASCADE`
- Endpoints: `GET /comments`, `GET /comments/post/:postId`, `POST /comments`
- Tests agregados al suite existente

---

## Aprendizajes del proceso

- La separación en capas (routes → controllers → services) hace el código más fácil de mantener
- Las queries parametrizadas con `$1, $2` son esenciales para evitar SQL injection
- Railway facilita el deploy pero requiere configurar correctamente las variables de entorno
- Los tests con Supertest hacen peticiones reales a la API sin necesidad de levantar el servidor manualmente