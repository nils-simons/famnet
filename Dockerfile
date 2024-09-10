
FROM node:20

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install --production

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the port the app runs on (optional but recommended)
EXPOSE 1280

# Step 7: Define the command to run the app
CMD ["node", "index.js"]
