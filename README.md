##README##

##RUN THE APP##

#NOTE#
MongoDB must be installed globally for this to work

For development:

1. cd api
	a. mkdir uploads
2. npm i
3. in main directory run
	a. npm start
4. in /api run
	a. sudo mongod
	b. NODE_ENV=production node server.js
5. Navigate to http://localhost:8080 to see app

For production:

1. npm i
2. in main directory
	a. npm run build
	b. npm run prod
3. in /api run
	a. mkdir uploads
	b. sudo mongod
	c. node server.js
4. Navigate to http://localhost:8080 to see app

#NOTE#
If running the production build you may need to change the port in server.js to whatever fits your devops needs.

##TESTING##
1. npm i
2. npm run test