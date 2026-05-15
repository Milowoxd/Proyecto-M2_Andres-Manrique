# MiniBlog API

MiniBlog es una API REST que simula el backend de un blog sencillo. Permite gestionar autores, publicaciones y comentarios. Fue construida con Node.js, Express y PostgreSQL como proyecto integrador del Módulo 2 en DevSpark.

---

## ¿Qué hace esta API?

Es el backend de un blog. Puedes:
- Crear y gestionar **autores** — los que escriben en el blog
- Crear y gestionar **posts** — las publicaciones del blog
- Dejar **comentarios** en los posts — asociados a un autor y un post
- Todo se persiste en una base de datos PostgreSQL real

---

## Tecnologías usadas

- **Node.js** — entorno de ejecución
- **Express** — framework para el servidor HTTP
- **PostgreSQL** — base de datos relacional
- **pg** — cliente de PostgreSQL para Node.js
- **Jest + Supertest** — testing
- **Railway** — deployment y base de datos en la nube

---

## Requisitos

- Node.js v18+
- npm
- Una base de datos PostgreSQL (puedes crear una gratis en Railway)

---

## Instalación y ejecución local

**1. Clona el repositorio:**
```bash
git clone https://github.com/Milowoxd/Proyecto-M2_Andres-Manrique.git
cd Proyecto-M2_Andres-Manrique
```

**2. Instala las dependencias:**
```bash
npm install
```

**3. Configura las variables de entorno:**
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus datos:
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/miniblog

> Puedes obtener la `DATABASE_URL` desde Railway → tu proyecto PostgreSQL → Variables → `DATABASE_PUBLIC_URL`

**4. Crea las tablas en la base de datos:**
```bash
npm run db:migrate
```

**5. Carga datos de ejemplo:**
```bash
npm run db:seed
```

**6. Inicia el servidor en modo desarrollo:**
```bash
npm run dev
```

La API quedará disponible en `http://localhost:3000`

---

## Estructura del proyecto
Proyecto-M2_Andres-Manrique/
├── src/
│   ├── controllers/        # Validan datos y responden al cliente
│   │   ├── authorsController.js
│   │   ├── postsController.js
│   │   └── commentsController.js
│   ├── services/           # Ejecutan las consultas SQL
│   │   ├── authorsService.js
│   │   ├── postsService.js
│   │   └── commentsService.js
│   ├── routes/             # Definen los endpoints
│   │   ├── authors.js
│   │   ├── posts.js
│   │   └── comments.js
│   ├── middleware/         # Manejo central de errores
│   │   └── errorHandler.js
│   ├── db/                 # Conexión y scripts de base de datos
│   │   ├── pool.js
│   │   ├── migrate.js
│   │   └── seed.js
│   └── app.js              # Configuración de Express
├── tests/                  # Tests con Jest y Supertest
│   ├── authors.test.js
│   ├── posts.test.js
│   └── comments.test.js
├── docs/
│   └── openapi.yaml        # Documentación OpenAPI
├── server.js               # Punto de entrada del servidor
├── .env.example            # Plantilla de variables de entorno
└── README.md

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `PORT` | Puerto del servidor | `3000` |
| `DATABASE_URL` | URL de conexión a PostgreSQL | `postgresql://user:pass@host:5432/db` |

---

## Endpoints disponibles

### Authors

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/authors` | Lista todos los autores |
| GET | `/authors/:id` | Obtiene un autor por id |
| POST | `/authors` | Crea un autor nuevo |
| PUT | `/authors/:id` | Actualiza un autor existente |
| DELETE | `/authors/:id` | Elimina un autor y sus posts |

**Body para crear/actualizar un autor:**
```json
{
  "name": "Andres Manrique",
  "email": "andres@miniblog.com",
  "bio": "Developer junior en DevSpark"
}
```

### Posts

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/posts` | Lista todos los posts |
| GET | `/posts/:id` | Obtiene un post por id |
| GET | `/posts/author/:authorId` | Lista los posts de un autor con su info |
| POST | `/posts` | Crea un post nuevo |
| PUT | `/posts/:id` | Actualiza un post existente |
| DELETE | `/posts/:id` | Elimina un post |

**Body para crear/actualizar un post:**
```json
{
  "title": "Mi primer post",
  "content": "Contenido del post...",
  "author_id": 1,
  "published": true
}
```

### Comments

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/comments` | Lista todos los comentarios |
| GET | `/comments/post/:postId` | Lista los comentarios de un post |
| POST | `/comments` | Crea un comentario nuevo |

**Body para crear un comentario:**
```json
{
  "content": "Muy buen post!",
  "author_id": 1,
  "post_id": 2
}
```

---

## Tests

Para ejecutar los tests:
```bash
npm test
```

Hay 17 tests que cubren los casos críticos de cada entidad — creación, validaciones, 404 y errores esperados.

---

## Documentación OpenAPI

El archivo `docs/openapi.yaml` contiene la documentación completa de todos los endpoints.

Para explorarla visualmente:
1. Ve a [Swagger Editor](https://editor.swagger.io/)
2. Copia y pega el contenido de `docs/openapi.yaml`
3. Navega por todos los endpoints de forma interactiva

---

## Deploy en Railway

La API está desplegada en Railway con una base de datos PostgreSQL en la nube.

**URLs:**
- 🌐 Public URL: `https://proyecto-m2andres-manrique-production.up.railway.app`
- 🔒 Internal URL: `proyecto-m2andres-manrique.railway.internal`

**Pruébala directamente:**
- Authors → https://proyecto-m2andres-manrique-production.up.railway.app/authors
- Posts → https://proyecto-m2andres-manrique-production.up.railway.app/posts
- Comments → https://proyecto-m2andres-manrique-production.up.railway.app/comments

**Pasos para hacer tu propio deploy:**
1. Crea un proyecto en [Railway](https://railway.app)
2. Agrega un servicio **PostgreSQL**
3. Copia la `DATABASE_PUBLIC_URL` desde Variables del servicio PostgreSQL
4. Conecta tu repositorio de GitHub al proyecto
5. Agrega la variable `DATABASE_URL` al servicio de la app
6. Railway despliega automáticamente con cada push a `main`
7. Genera un dominio público desde Settings → Networking → Generate Domain

---

## Uso de IA

Se utilizó **Claude (Anthropic)** como asistente durante el desarrollo del proyecto.

**¿Para qué se usó?**
- Guía paso a paso en la implementación de cada capa (routes, controllers, services)
- Explicación de conceptos como middlewares, pool de conexiones y SQL parametrizado
- Resolución de errores durante el proceso de desarrollo
- Configuración del entorno y deployment en Railway

**Nota:** Todo el código fue revisado y comprendido antes de ser implementado. El asistente fue una guía, no un reemplazo del proceso de aprendizaje.