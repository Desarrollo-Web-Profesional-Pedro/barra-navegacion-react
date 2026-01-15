# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todos los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servidor de Producción (Nginx)
FROM nginx:stable-alpine

# Copiar los archivos compilados desde la etapa 'build'
# Vite usa 'dist' por defecto
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
