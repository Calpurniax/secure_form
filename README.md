# secure_form
A MERN contact form and login without OWASP vulnerabilities

## Tasks for the front-end
### In the contact form
- [x] Captcha
- [x] 2 hidden inputs (they have to be empty to avoid bots)
- [x] Max lenght for the inputs
- [x] Validate the inputs to prevent XSS (yup and avoid innerHTML)
### Control Panel
- [x] 2 types of user (admin and user)
- [] Admin Route to the control panel
- [] Admin can CRUD the users
- [x] User can check only his messages
- [] Use protected Routes
- [x] Implement Auth Context

## Task for the back-end
### In the contact form
- [] Route and controller for saving the contact form data
- [] ORM for the DB
- [] Apply filters against XSS and SQLinjection
- [] Validate hidden inputs are empty (return error 500)
- [] Implement middleware to restrict number of calls
### CRUD
- [x] Token with encript user id and role, needs to has expire date
- [x] Admin is unique and generate only in DB
- [x] Validate (with a middleware) the rol admin for manage Users
- [x] Validate the user has user rol to check the messages
- [x] All users has id, name and lastname, rol, email  and username
- [x] Use hash for cypher the passwords
- [] Apply middleware against brute force attack on login
