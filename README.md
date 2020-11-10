# Metigy-Google-AdWords-Configurator

A coding challenge as part of an interview at Metigy.

To run the Project, please follow the following steps.

1. Froom root directory
```bash
cd server

yarn install
```
This is required as the nodejs node_modules is not found after laoding the containers. I am still looking for a workaround.

2. Go back to the root directory to run the program. Make sure to have docker ready.
```bash
docker-compose up --build
```
The program should be up and running at [http://localhost:3000/](http://localhost:3000/)



>   **NOTE**

Make sure that the following ports are not in use:

* 3000: React Server
* 8000: Node server
* 3306: MySQL server



