# Base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Install system dependencies for Expo
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 19000 (Expo DevTools), 19001 (Expo Metro Bundler), and 19002 (Expo Web Interface)
EXPOSE 19000 19001 19002

# Start the Expo development server
CMD ["npm", "start"]
