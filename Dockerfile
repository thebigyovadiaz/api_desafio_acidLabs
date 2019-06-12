# Install node v10
FROM node:10

# Set the workdir /var/www/myapp
WORKDIR /var/www/myapp

# Copy the package.json to workdir
COPY package.json ./

# Run npm install - install the npm dependencies
RUN npm install

# Copy application source
COPY . .

# Expose application ports - (4300 - for API and 4301 - for front end)
EXPOSE 4300 4301

# Generate build
RUN npm start

# Start the application
CMD ["npm", "run", "run:prod"]