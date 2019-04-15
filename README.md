# britecore

VueJs fullstack application. Implements Api endpoint 
to query SQL server to manipulate customer transactions. Implements Vuex 
application state management. SQL server run time scripts for custom docker image. Api and client containerized. 


Front End Application Features
- Vuex State Management
- Pagination
- Latest entry sorting

## To Run the Stack:

Inside project\, run:

`docker-compose up --build -d`

project\VueApp:

http:\\localhost:8080

project\api:

http:\\localhost:3000

## Working with non Dockerized Api
Inside project\api:

`export $(cat .env | xargs)`

Then inside api\src folder, run:

`npm i`

`DEBUG=* npm start` 
