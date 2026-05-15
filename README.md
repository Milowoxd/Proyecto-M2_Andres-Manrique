# MiniBlog API

API REST para gestión de authors y posts, construida con Node.js + Express + PostgreSQL.

## Descripción

API tipo JSONPlaceholder que permite crear, leer, actualizar y eliminar authors y posts. Desarrollada como proyecto integrador del Módulo 2.

## Requisitos

- Node.js v18+
- npm
- Cuenta en Railway (para la base de datos)

## Instalación local

1. Clona el repositorio:
git clone https://github.com/Milowoxd/Proyecto-M2_Andres-Manrique.git
cd Proyecto-M2_Andres-Manrique

2. Instala las dependencias:
npm install

3. Configura las variables de entorno:
cp .env.example .env

Edita .env y agrega tu DATABASE_URL de Railway.

4. Crea las tablas:
npm run db:migrate

5. Carga datos de ejemplo:
npm run db:seed

6. Inicia el servidor:
npm run dev

La API estará disponible en http://localhost:3000

## Variables de entorno

| Variable | Descripción |
|---|---|
| PORT | Puerto del servidor (default: 3000) |
| DATABASE_URL | URL de conexión a PostgreSQL |

## Endpoints

### Authors
| Método | Ruta | Descripción |
|---|---|---|
| GET | /authors | Listar authors |
| GET | /authors/:id | Obtener author |
| POST | /authors | Crear author |
| PUT | /authors/:id | Actualizar author |
| DELETE | /authors/:id | Eliminar author |

### Posts
| Método | Ruta | Descripción |
|---|---|---|
| GET | /posts | Listar posts |
| GET | /posts/:id | Obtener post |
| GET | /posts/author/:authorId | Posts por author |
| POST | /posts | Crear post |
| PUT | /posts/:id | Actualizar post |
| DELETE | /posts/:id | Eliminar post |

## Tests

```bash
npm test
```

## Documentación OpenAPI

Importa el archivo `docs/openapi.yaml` en [Swagger Editor](https://editor.swagger.io/) para explorar la API interactivamente.

## Deploy en Railway

1. Crea un proyecto en Railway
2. Agrega un servicio PostgreSQL
3. Copia la DATABASE_URL de las variables del servicio PostgreSQL
4. Conecta el repositorio de GitHub
5. Agrega la variable DATABASE_URL al servicio de la app
6. Railway despliega automáticamente con cada push

**URL pública:** https://proyecto-m2andres-manrique-production.up.railway.app/authors


---

## ¿Qué hace esta API?

Básicamente es el backend de un blog. Puedes:

- Crear y gestionar **autores** (los que escriben)
- Crear y gestionar **posts** (lo que escriben)
- Dejar **comentarios** en los posts (extra)
- Todo se guarda en una base de datos real en PostgreSQL

---

## Requisitos para correrla local

- Node.js v18+
- npm
- Una base de datos PostgreSQL (puedes usar Railway gratis)

---

## Cómo correrla local

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
Abre el archivo `.env` y pega tu `DATABASE_URL` de Railway.

**4. Crea las tablas en la base de datos:**
```bash
npm run db:migrate
```

**5. Carga datos de ejemplo:**
```bash
npm run db:seed
```

**6. Inicia el servidor:**
```bash
npm run dev
```

La API queda disponible en `http://localhost:3000`

---

## Variables de entorno

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor (default: 3000) |
| `DATABASE_URL` | URL de conexión a PostgreSQL |

**Ejemplo de `.env`:**
```
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/miniblog
```

---

## Endpoints disponibles

### Authors

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/authors` | Trae todos los autores |
| GET | `/authors/:id` | Trae un autor por su id |
| POST | `/authors` | Crea un autor nuevo |
| PUT | `/authors/:id` | Edita un autor existente |
| DELETE | `/authors/:id` | Elimina un autor y sus posts |

**Ejemplo para crear un autor:**
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
| GET | `/posts` | Trae todos los posts |
| GET | `/posts/:id` | Trae un post por su id |
| GET | `/posts/author/:authorId` | Trae los posts de un autor con su info |
| POST | `/posts` | Crea un post nuevo |
| PUT | `/posts/:id` | Edita un post existente |
| DELETE | `/posts/:id` | Elimina un post |

**Ejemplo para crear un post:**
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
| GET | `/comments` | Trae todos los comentarios |
| GET | `/comments/post/:postId` | Trae los comentarios de un post |
| POST | `/comments` | Crea un comentario nuevo |

**Ejemplo para crear un comentario:**
```json
{
  "content": "Muy buen post!",
  "author_id": 1,
  "post_id": 2
}
```

---

## Cómo correr los tests

```bash
npm test
```

Hay 17 tests que cubren los casos más importantes de cada entidad.

---

## Documentación OpenAPI

El archivo `docs/openapi.yaml` tiene la documentación completa de la API.

Para verla de forma visual:
1. Ve a [Swagger Editor](https://editor.swagger.io/)
2. Copia y pega el contenido del archivo `openapi.yaml`
3. Explora todos los endpoints de forma interactiva

---

## Deploy en Railway

La API está desplegada en Railway y conectada a una base de datos PostgreSQL en la nube.

**URLs de Railway:**
- Internal URL: `proyecto-m2andres-manrique.railway.internal`
- Public URL: `https://proyecto-m2andres-manrique-production.up.railway.app`

**URL pública:** `https://proyecto-m2andres-manrique-production.up.railway.app`

Pruébala directamente:
- `GET /authors` → https://proyecto-m2andres-manrique-production.up.railway.app/authors
- `GET /posts` → https://proyecto-m2andres-manrique-production.up.railway.app/posts
- `GET /comments` → https://proyecto-m2andres-manrique-production.up.railway.app/comments

**Pasos para hacer tu propio deploy:**
1. Crea un proyecto en [Railway](https://railway.app)
2. Agrega un servicio PostgreSQL
3. Copia la `DATABASE_URL` de las variables del servicio PostgreSQL
4. Conecta tu repositorio de GitHub
5. Agrega la variable `DATABASE_URL` al servicio de la app
6. Railway despliega automáticamente con cada push a `main`

---
## Estructura del proyecto

```
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
```
## Uso de IA

Se utilizó Claude (Anthropic) como asistente durante el desarrollo. Principalmente para:
- Guía paso a paso en la implementación de cada capa (routes, controllers, services)
- Explicación de conceptos como middlewares, pool de conexiones y SQL parametrizado
- Resolución de errores durante el desarrollo

Todo el código fue revisado y comprendido antes de ser implementado.