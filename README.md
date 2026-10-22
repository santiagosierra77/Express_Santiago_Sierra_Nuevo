# Comandos para instalar ORM Prisma

npm install prisma@7 --save-dev

# instalar el cliente de prisma (-D)
npm install @prisma/client@7 --save-dev

# instalar el adaptador para postgres
npm install -D @prisma/adapter-pg@7

# Libreria para tsx y poder seguir escribiendo archivos js con
# la forma de importacion commojs (ES Module)
npm install -d prisma@7 tsx

# TENEMOS TODAS LAS HERRAMIENTAS
# Inicializar prisma con un proveedor - .env la url
npx prisma init --datasource-provider postgresql

# crear las tablas y generar el cliente
npx prisma migrate dev --name inicio

# Genera el cliente orm
npx prisma generate

