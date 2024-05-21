FROM node:14

# Set the working directory
WORKDIR /usr/src

COPY package.json package-lock.json ./
# En RUN creamos la direccion donde vamos a meter nuestro contenedor.
# La ruta es una ruta dentro del mismo contenedor, el cual es, una distribucion de Linux.
# RUN nos sirve para ejecutar instrucciones del SO Linux.
RUN npm install

# Copy nos sirve para acceder a los archivos de nuestro SO (Windows o MAC OS), los toma y luego los coloca dentro de nuestro contenedor
# El primer punto indica la ruta de nuestro Sistema Operativo, le sigue la ruta del destino
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
