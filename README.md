# secure_form
In this project I wanted to create a contact form without OWASP vulnerabilities. There is also a login for users, so they can read all the messages that our visitors sent, and a administrator dashboard to manage the users.

I get the hero image from  [Andrew Ridley](https://unsplash.com/es/@aridley88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) in [Unsplash](https://unsplash.com/es/fotos/jR4Zf-riEjI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## About the project
This a full-stack MERN development, I also chose to go with tailwindCSS. As long as the features, the front-end includes some measures to secure the contact form against XSS or DoS attacks (validate the inputs, avoiding "InnerHTML" and implementing a captcha) There are also 2 hidden inputs, when those are filled, both the front-end and the back-end don't allow the message to be saved in the DB.
In the back-end side we have one MongoDB database with two collections, one for users and one for messages. 
- Users can be created only by the administrator, and for their names and user's names only letters are allowed (to avoid XSS or SQL injection)
- User's password has to be a secure one (minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character) and is always cypher and will never returned to the client side
- Messages are filter by a yup schema, to prevent XSS or SQL injection

  
Furthermore a middleware checks all inputs thanks to the validator library, sanitizing and checking the email format.

Here is a list of features I have implemented:
### Front-end
#### Contact form
-  Captcha
-  2 hidden inputs (they have to be empty to avoid bots)
-  Max lenght for the inputs
-  Validate the inputs to prevent XSS (regular expressions, avoid innerHTML)
#### Control Panel
-  2 types of user (admin and user)
-  Admin Route to the control panel
-  Admin can CRUD the users
-  Users can check only the messages and change their own profile
-  Use protected Routes
-  Implement Auth Context

### Back-end
#### Contact form
-  Route and controller for saving the contact form data
-  ORM for the DB (mongoose)
-  Apply filters against XSS and SQLinjection (validatorjs, CSP configuration)
-  Validate hidden inputs are empty (return error 500)
-  Implement middleware to restrict number of calls (express-rate-limit)
#### Users
-  Token with encript user id and role, with expire date
-  Admin is unique and generate only in DB
-  Validate (with a middleware) the rol admin for manage Users
-  Validate the user has user rol to check the messages or update his profile
-  All users has id, name and lastname, rol, email  and username
-  Use hash for cypher the passwords
-  Apply middleware against brute force attack on login (express-rate-limit)

## Installation and configuration

To run this project, make sure you have vite and node and npm installed. Then clone this repository
```
git clone https://github.com/Calpurniax/secure_form.git
```
