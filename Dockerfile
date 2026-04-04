# Étape 1 : Build de l'application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build React (Vite = dist)
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:stable-alpine

# Copier les fichiers build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]