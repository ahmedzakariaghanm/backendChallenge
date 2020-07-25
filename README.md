
## How to use this ?

1. Clone this project into your local machine
2. Open your cmd and navigate to project directory
3. Run **npm install**
4. Run **nodemon index**
5. Now you can use the API , open your browser and enter http://localhost:5000/
6. use http://localhost:5000/getCoffeeMachine/ to get coffee machines , add product_type and water_line params to the end point to filter the resulte ,example : http://localhost:5000/getCoffeeMachine/?product_type=large will return all large machines .
7. use http://localhost:5000/getCoffeePod/ to get coffee pods , add product_type and water_line params to the end point to filter the resulte ,example : http://localhost:5000/getCoffeePod/?product_type=large will return all large pods
 

## Note
You must have mongoDB installed on your local machine