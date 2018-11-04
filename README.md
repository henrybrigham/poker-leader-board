##README##

##RUN THE APP##

For development:
1. cd api
	a. mkdir uploads
2. npm i
3. in main directory
	a. run npm start
4. in /api
	a. run sudo mongod
	b. run nodemon server.js
5. Navigate to http://localhost:8080 to see app

For production:
1. npm i
2. in main directory
	a. npm run build
	b. npm run prod
3. in /api
	a. run sudo mongod
	b. run node server.js
4. Navigate to http://localhost:8080 to see app

##TESTING##
1. npm i
2. npm run test