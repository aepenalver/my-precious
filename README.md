# My Precious

Desarrollo de API REST para tienda de joyas My Precious Spa, como evaluación de desafío 5 y demostración de conocimiento de desarrollo con NodeJS y PostgreSQL.

## Tecnologías Empleadas

- Node JS
- JavaScript
- Express JS
- PostgreSQL

## Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (versión 12 o superior).
- Una terminal o consola de comandos.
- Tener instalado [PostgreSQL](https://www.postgresql.org/download/) (versión 16 o superior).
- Aplicación frontend, disponible en el siguiente repositorio: [LikeMe-Client](https://github.com/aepenalver/likeme-client)
- Opcional: Tener instalado algún "Cliente API"

## Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/aepenalver/my-precious
```

2. Acceder al directorio:

```bash
cd my-precious
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar las variables de entorno

Crear archivo `.env` usando como referencia `.env.example`

5. Uso (modo desarrollo):

```bash
npm run dev
```

6.  Creación de Base de Datos

Desde la "CLI psql" crear la base de datos y tabla. Las sentencias se encuentran detalladas en el directorio `database/schema.sql`

## Estructura de la aplicación

```bash
.
├── database            # Configuración y creación de base de datos y tablas
├── index.js            # Entrada de la app
├── logs                # Registros de logs
├── middlewares         # Middlewares
├── package.json        # Configuración del proyecto y dependencias
├── queries.js          # Repositorio de consultas SQL y lógica de datos
└── utils               # Funciones auxiliares o helpers
```
