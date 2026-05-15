# MiniBlog API

API REST para gestionar autores, posts y comentarios. Construida con Node.js, Express y PostgreSQL. Proyecto integrador del Módulo 2 en DevSpark.

## Stack

- Node.js
- Express
- PostgreSQL + pg
- Jest + Supertest
- Railway

## Estructura del proyecto
Proyecto-M2_Andres-Manrique/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   └── app.js
├── tests/
├── docs/
│   └── openapi.yaml
├── server.js
├── .env.example
└── README.md
## Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/Milowoxd/Proyecto-M2_Andres-Manrique.git
cd Proyecto-M2_Andres-Manrique
```

Instalar dependencias:

```bash
npm install
```

Crear el archivo `.env` en la raíz:

```bash
cp .env.example .env
```

Contenido del `.env`:
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/miniblog
Obtén la `DATABASE_URL` desde Railway → servicio PostgreSQL → Variables → `DATABASE_PUBLIC_URL`.

Crear las tablas:

```bash
npm run db:migrate
```

Cargar datos de ejemplo:

```bash
npm run db:seed
```

Iniciar el servidor:

```bash
npm run dev
```

La API queda disponible en `http://localhost:3000`.

## Endpoints
GET    /authors
GET    /authors/:id
POST   /authors
PUT    /authors/:id
DELETE /authors/:id
GET    /posts
GET    /posts/:id
GET    /posts/author/:authorId
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
GET    /comments
GET    /comments/post/:postId
POST   /comments
## Tests

```bash
npm test
```

17 tests cubriendo creación, validaciones y errores esperados.

## Documentación OpenAPI

Importar `docs/openapi.yaml` en [Swagger Editor](https://editor.swagger.io/) para explorar los endpoints de forma interactiva.

## Deploy en Railway

1. Crear un proyecto en Railway
2. Agregar un servicio PostgreSQL
3. Copiar `DATABASE_PUBLIC_URL` desde Variables del servicio PostgreSQL
4. Conectar el repositorio de GitHub
5. Agregar `DATABASE_URL` como variable de entorno en el servicio de la app
6. Railway despliega automáticamente con cada push a `main`
7. Generar dominio público desde Settings → Networking → Generate Domain

URLs del proyecto:

- Public URL: `https://proyecto-m2andres-manrique-production.up.railway.app`
- Internal URL: `proyecto-m2andres-manrique.railway.internal`

## Uso de IA

Se utilizó Claude (Anthropic) como asistente durante el desarrollo para guía en la implementación, explicación de conceptos y resolución de errores. Todo el código fue revisado y comprendido antes de ser implementado.