File and package names were based off the assumption that this is a microservice with a sole purpose of dealing with customer preferences.

For the purpose of this test I decide to but the data into an array of objects but for a real application I would definitely use a db.

To Use:
-clone/download project in local environment
-in terminal (I used cmder https://cmder.net/)
  -cd into the project directory (where ever you saved it)
  -make sure node is installed (can check with command node --version if not installed download from here https://nodejs.org/en/download/)
  -run application using command: node server.js (if successful you will see log message 'App has started on port...')

APIs
-I used postman to test the apis https://www.getpostman.com/downloads/

-'Get one entity by id' and 'get all entities by customer id' both use same endpoint.
  -this is a GET request
  -using endpoint http://localhost:8080/customer/1 (1 represents the id) will return the object for customer with id 1
  -for purpose of testing I added three customers by default with ids 1, 2 and 3
  -if one object has the provided id it will return a single object but if multiple objects have the same id then it will return multiple objects
  -if using database we would have an id to uniquely identify each row which in that case we could separate these endpoints but for my example it is not needed

-'Add a entity'
  -this is a POST request
  -using endpoint http://localhost:8080/customer/add will add a new customers
  -need to fill out the required fields in the body of the request
  -in postman:
    -navigate to the 'body' tab
    -select the body type as 'x-www-form-urlencoded'
    -add following keys and a respective value of your choosing:
      -customerId
      -name
      -templatedId (in order to pass ENUM check this field needs value to be either 'Single Image Ad' or 'Carousel Ad' not case sensitive)
      -startDate
      -repeat (in order to pass ENUM check this field needs value to be either 'daily' or 'weekly' or 'monthly' not case sensitive)

  -'Delete an entity'
    -this is a DELETE request
    -using endpoint http://localhost:8080/customer/delete/1 (1 representing the id) will delete the customer with the corresponding Id.
    -since there is no restriction on adding multiple entries with the same customerId, this endpoint will delete all entries with the provided Id
    (to delete a specific one only and not the others will need a new field, such as a db primary key, in order to uniquely identify them)
