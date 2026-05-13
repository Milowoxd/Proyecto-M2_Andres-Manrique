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

**URL pública:** https://proyecto-m2andres-manrique-production.up.railway.app

## Uso de IA

Se utilizó Claude (Anthropic) como asistente durante el desarrollo del proyecto para:
- Guía paso a paso en la implementación
- Explicación de conceptos (middlewares, pool de conexiones, SQL parametrizado)
- Resolución de errores

Todos los prompts fueron revisados y el código fue comprendido antes de ser implementado.