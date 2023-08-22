# OS yg digunakan dockerfile: versinya
FROM node:20-alpine3.17

# copy semua file dari package.json
COPY package*.json ./

# menentukan path/ working directory
WORKDIR /app

# '.' pertama current path '.' kedua destination / pathnya
COPY . .

# menggunakan OS maka dapat menjalankan npm install, install from package*.json
RUN npm install


# optional
EXPOSE 8010

# execute file didocker
CMD ["node", "app.js"]