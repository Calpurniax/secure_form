# secure_form
A MERN contact form and login without OWASP vulnerabilities
Hero image from  [Andrew Ridley] (https://unsplash.com/es/@aridley88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) in ("https://unsplash.com/es/fotos/jR4Zf-riEjI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")>[Unsplash]
  

## Tasks for the front-end
### In the contact form
- [x] Captcha
- [x] 2 hidden inputs (they have to be empty to avoid bots)
- [x] Max lenght for the inputs
- [x] Validate the inputs to prevent XSS (regular expressions, avoid innerHTML)
### Control Panel
- [x] 2 types of user (admin and user)
- [x] Admin Route to the control panel
- [x] Admin can CRUD the users
- [x] User can check only the messages
- [x] Use protected Routes
- [x] Implement Auth Context

## Task for the back-end
### In the contact form
- [x] Route and controller for saving the contact form data
- [x] ORM for the DB
- [x] Apply filters against XSS and SQLinjection (validatorjs, CSP configuration)
- [x] Validate hidden inputs are empty (return error 500)
- [x] Implement middleware to restrict number of calls (express-rate-limit)
### CRUD
- [x] Token with encript user id and role, needs to has expire date
- [x] Admin is unique and generate only in DB
- [x] Validate (with a middleware) the rol admin for manage Users
- [x] Validate the user has user rol to check the messages
- [x] All users has id, name and lastname, rol, email  and username
- [x] Use hash for cypher the passwords
- [x] Apply middleware against brute force attack on login (express-rate-limit)
