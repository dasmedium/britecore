FROM node:8

ENV WORKDIR /src

# This is internal to the container
RUN mkdir -p ${WORKDIR}

# Install dependencies
RUN npm install --quiet node-gyp -g

# Change dir contexts
WORKDIR ${WORKDIR}

# Copy this in now so only changes to package.json cause a container rebuild
COPY src/package*.json ./

# Install app dependencies
RUN npm install

# Copy the project source code into the container
COPY src/ .

# Document expected port (EXPOSE is for documentation only)
EXPOSE 3000

# start the application
CMD ["npm","start"]
