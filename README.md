# Fiz's Diner

## Online food ordering application
Welcome to Fiz's Diner. An online application that offers customers to order delicious western food.

## Challenges

- Bootstrap helped alot with styling of the application, but also messed up some of the functionalities. For example, buttons did not work after drop-down menu is added and vise versa. But fortunately it was fixed by changing all button tags in the ejs files with <a> tag with "btn" class.
- For unknown reason, clicking on the "delete" button triggers the logout function after the drop-down menu was implemented, but was fixed by changing the logout route.
- I could not figure out how to implement the "add to cart" function and link it to the responding buttons.

## Technology in use

- NodeJS
- Nodemon
- Dotenv
- Express JS
- Express-session middleware for Express
- Method-override middleware for Express
- EJS
- Mongoose
- MongoDB
- Bcrypt
- Bootstrap
- Popper

## Future note to self & Improvements to be made

- Add the "add to cart" function
- Make the "invalid username or password" error message appear on the login page itself
- Add the user welcome page (Welcome "username") so that customer knows they login successfully 
- Categorize different type of food and show them in different tabs

## Link to application

https://fizs-diner.onrender.com
