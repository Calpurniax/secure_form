# secure_form
In this project I wanted to create a contact form without OWASP vulnerabilities. There is also a login for users, so they can read all the messages that our visitors sent, and a administrator dashboard to manage the users.

I get the hero image from  [Andrew Ridley](https://unsplash.com/es/@aridley88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) in [Unsplash](https://unsplash.com/es/fotos/jR4Zf-riEjI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## About the project
This a full-stack MERN development, so I create with React a front-end and include features to secure the contact form against XSS or DoS attacks (validate the inputs, avoiding "InnerHTML" and implementing a captcha) There are also 2 hidden inputs, when those are filled, both the front-end and the back-end don't allow the message to be saved in the DB.
In the back-end side we have one MongoDB database with two collections, one for users and one for messages. Some of the 
- Users can be created only by the administrator, and for their names and user's names only letters are allowed (to avoid XSS or SQL injection)
- User's password has to be a secure one (minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character) and is always cypher and will never returned to the client side
- Messages are filter by a yup schema, to prevent XSS or SQL injection
Furthermore a middleware checks all inputs thanks to the validator library, sanitizing and checking the passwords and emails format.


### Tasks for the front-end
#### In the contact form
- [x] Captcha
- [x] 2 hidden inputs (they have to be empty to avoid bots)
- [x] Max lenght for the inputs
- [x] Validate the inputs to prevent XSS (regular expressions, avoid innerHTML)
#### Control Panel
- [x] 2 types of user (admin and user)
- [x] Admin Route to the control panel
- [x] Admin can CRUD the users
- [x] User can check only the messages
- [x] Use protected Routes
- [x] Implement Auth Context

### Task for the back-end
#### In the contact form
- [x] Route and controller for saving the contact form data
- [x] ORM for the DB
- [x] Apply filters against XSS and SQLinjection (validatorjs, CSP configuration)
- [x] Validate hidden inputs are empty (return error 500)
- [x] Implement middleware to restrict number of calls (express-rate-limit)
#### CRUD
- [x] Token with encript user id and role, needs to has expire date
- [x] Admin is unique and generate only in DB
- [x] Validate (with a middleware) the rol admin for manage Users
- [x] Validate the user has user rol to check the messages
- [x] All users has id, name and lastname, rol, email  and username
- [x] Use hash for cypher the passwords
- [x] Apply middleware against brute force attack on login (express-rate-limit)
