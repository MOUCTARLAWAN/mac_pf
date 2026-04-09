# Étape 1 : Build de l'app
FROM node:20-bullseye-slim AS build

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code et builder
COPY . .
RUN npm run build

# Étape 2 : image finale pour production
FROM node:20-bullseye-slim

WORKDIR /app

# Installer serve pour servir les fichiers statiques
RUN npm install -g serve

# Copier node_modules et build depuis l'étape précédente
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY start.sh ./start.sh

# Rendre le script exécutable
RUN chmod +x start.sh

# Définir le script comme point d'entrée
ENTRYPOINT ["./start.sh"]









# Étape 1 : Build de l'application
# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# # Build React (Vite = dist)
# RUN npm run build

# # Étape 2 : Serveur Nginx
# FROM nginx:stable-alpine

# # Copier les fichiers build
# COPY --from=build /portfolio-mac/public /portfolio-mac/public
# COPY --from=build /portfolio-mac/package.json /portfolio-mac/package.json
# COPY --from=build /portfolio-mac/package-lock.json /portfolio-mac/package-lock.json
# COPY --from=build /portfolio-mac/start.sh /portfolio-mac/start.sh
# COPY --from=build /portfolio-mac/dockerignore /dockerignore
# COPY --from=build /portfolio-mac/README.md /README.md
# COPY --from=build /portfolio-mac/LICENSE /portfolio-mac/LICENSE
# COPY --from=build /portfolio-mac/package-lock.json /portfolio-mac/package-lock.json
# COPY --from=build /portfolio-mac/package.json /portfolio-mac/package.json



# #EXPOSE 80

#ENTRYPOINT ["./portfolio-mac/start.sh"]

# CMD ["npm", "run", "start"]

