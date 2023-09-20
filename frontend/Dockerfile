# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React application for production
RUN npm run build

# Expose port 3000 (the port that the React app will listen on)
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]