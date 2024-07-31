# Gunakan image node sebagai base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file proyek ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Jalankan Next.js di mode production
CMD ["npm", "run", "start"]

