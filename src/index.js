import app from "./app.js";
import dbConnect from './db/db.js';

dbConnect();
app.listen(3000);
console.log('server on port',3000);